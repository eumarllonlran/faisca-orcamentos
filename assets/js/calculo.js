// calculo.js - regras de preço: mão de obra, material, urgência, deslocamento e valor mínimo

// Deixa o texto num formato padrão para comparar: " Manaíra " -> "manaira"
function normalizarTexto(texto) {
    return (texto || '')
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function calcularOrcamento(pedido, config) {
    let subtotal = 0;

    // 1. Calcular o valor dos serviços
    pedido.itens.forEach(item => {
        const servico = config.servicos.find(s => s.id === item.id);

        if (servico) {
            subtotal += servico.preco * item.qtd;
        }
    });

    // 2. Acréscimo de material
    if (pedido.material === "eletricista") {
        subtotal += subtotal * config.acrescimoMaterial;
    }

    // 3. Acréscimo de urgência
    if (pedido.urgencia === "emergencia") {
        subtotal *= config.multiplicadorUrgencia;
    }

    // 4. Calcular deslocamento
    let deslocamento;
    const cidadePedido = normalizarTexto(pedido.endereco.cidade);
    const cidadeBase = normalizarTexto(config.deslocamento.cidadeBase);
    const bairroPedido = normalizarTexto(pedido.endereco.bairro);

    // Procura o bairro na lista, comparando os nomes normalizados
    let taxaBairro;
    for (const nome in config.deslocamento.bairros) {
        if (normalizarTexto(nome) === bairroPedido) {
            taxaBairro = config.deslocamento.bairros[nome];
        }
    }

    if (cidadePedido !== cidadeBase) {
        deslocamento = config.deslocamento.outraCidade;        // outra cidade
    } else if (taxaBairro !== undefined) {
        deslocamento = taxaBairro;                             // bairro da lista
    } else {
        deslocamento = config.deslocamento.padraoMesmaCidade;  // bairro fora da lista
    }

    // 5. Calcular total
    let total = subtotal + deslocamento;

    // 6. Aplicar valor mínimo
    let aplicouMinimo = false;

    if (total < config.valorMinimoVisita) {
        total = config.valorMinimoVisita;
        aplicouMinimo = true;
    }

    // Arredondar para duas casas decimais
    subtotal = Number(subtotal.toFixed(2));
    deslocamento = Number(deslocamento.toFixed(2));
    total = Number(total.toFixed(2));

    return {
        subtotal,
        deslocamento,
        total,
        aplicouMinimo
    };
}