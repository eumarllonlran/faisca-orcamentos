function gerarLinkWhatsApp(pedido, total, numero) {

    const numero = 5583996700764; // Número do WhatsApp (com DDD e sem espaços ou traços)

let mensagem = `⚡ *Novo pedido de orçamento*
👤 Nome: ${pedido.contato.nome}
📞 Telefone: ${pedido.contato.telefone}
📍 Endereço: ${pedido.endereco.rua}, ${pedido.endereco.numero} - ${pedido.endereco.bairro}, ${pedido.endereco.cidade}/${pedido.endereco.uf}
🏠 Imóvel: ${pedido.imovel}
🔧 Serviços:`;

    pedido.itens.forEach(item => {
        mensagem += `\n- ${item.qtd}x ${item.nome}`;
    });

    mensagem += `
🧰 Material: ${pedido.material}
⏱ Urgência: ${pedido.urgencia}
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
