
function gerarLinkWhatsApp(pedido, total, numero) {

    // Traduz os valores do formulário
    const textos = {
        casa: "Casa",
        apartamento: "Apartamento",
        comercio: "Comércio",
        cliente: "Por conta do cliente",
        eletricista: "Por conta do eletricista",
        normal: "Normal",
        emergencia: "Emergência"
    };

    let mensagem = `⚡ *Novo pedido de orçamento*
👤 Nome: ${pedido.contato.nome}
📞 Telefone: ${pedido.contato.telefone}
📍 Endereço: ${pedido.endereco.rua}, ${pedido.endereco.numero} - ${pedido.endereco.bairro}, ${pedido.endereco.cidade}/${pedido.endereco.uf}
🏠 Imóvel: ${textos[pedido.imovel]}
🔧 Serviços:`;

    pedido.itens.forEach(item => {
        mensagem += `\n- ${item.qtd}x ${item.nome}`;
    });

    mensagem += `
🧰 Material: ${textos[pedido.material]}
⏱ Urgência: ${textos[pedido.urgencia]}
💰 Estimativa: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
🕐 Melhor horário: ${pedido.contato.horario}`;

    if (pedido.endereco.complemento) {
        mensagem += `\n🏡 Complemento: ${pedido.endereco.complemento}`;
    }

    if (pedido.contato.observacoes) {
        mensagem += `\n📝 Obs: ${pedido.contato.observacoes}`;
    }

    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
