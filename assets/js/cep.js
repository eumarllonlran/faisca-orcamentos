async function buscarCep(cep) {
    cep = cep.replace(/\D/g, "");

    if (cep.length !== 8) {
        throw new Error("CEP inválido. Digite os 8 números.");
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }

        return {
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            uf: dados.uf
        };

    } catch (erro) {
        if (erro.message === "CEP não encontrado.") {
            throw erro;
        }

        throw new Error("Não foi possível buscar o CEP. Verifique sua conexão.");
    }
}
