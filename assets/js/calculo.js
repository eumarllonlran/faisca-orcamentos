// calculo.js - regras de preço: mão de obra, material, urgência, deslocamento e valor mínimo

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

    if (pedido.endereco.cidade !== config.deslocamento.cidadeBase) {
        deslocamento = config.deslocamento.outraCidade;
    } else if (
        config.deslocamento.bairros[pedido.endereco.bairro] !== undefined
    ) {
        deslocamento = config.deslocamento.bairros[pedido.endereco.bairro];
    } else {
        deslocamento = config.deslocamento.padraoMesmaCidade;
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
