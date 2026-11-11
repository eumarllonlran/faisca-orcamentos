# ⚡ Faísca Orçamentos

Site de orçamento de serviços elétricos para um eletricista autônomo de **João Pessoa - PB**. O cliente monta o pedido em poucas etapas, vê um valor estimado e envia tudo pronto pelo **WhatsApp**.

> 🚧 Projeto em desenvolvimento.
---
## ✨ Funcionalidades (v1)

- Landing page com apresentação, serviços e área de atendimento
- Formulário de orçamento em etapas (wizard) com barra de progresso e validação
- Cálculo do valor estimado com base em:
  - mão de obra por item
  - material por conta do cliente ou do eletricista
  - urgência (normal ou emergência)
  - taxa de deslocamento por bairro/cidade
  - valor mínimo de visita
- Preenchimento automático do endereço pelo CEP (API [ViaCEP](https://viacep.com.br))
- Envio do pedido formatado pelo WhatsApp (link `wa.me`)
---
## 🛠️ Tecnologias

- HTML5
- CSS3 + [Bootstrap 5](https://getbootstrap.com)
- JavaScript puro (ES6+)
- [ViaCEP](https://viacep.com.br) para busca de endereço
- WhatsApp Click to Chat (`wa.me`)
---
## 🎨 Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Laranja | `#F97316` | destaques e botões |
| Grafite | `#2B2D31` | fundo e textos |
| Cinza claro | `#F4F4F5` | seções |
---
## 🚀 Como rodar

Não precisa instalar nada. Clone o repositório e abra com um servidor local (necessário para carregar o `servicos.json`):

```bash
git clone https://github.com/eumarllonlran/faisca-orcamentos.git
cd faisca-orcamentos

# opção 1: extensão Live Server do VS Code
# opção 2: Python
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
---
## 🗺️ Roadmap

- [x] Setup do projeto e estrutura de pastas
- [ ] Landing page
- [ ] Estrutura do wizard
- [ ] Dados e cálculo
- [ ] Integração com ViaCEP e taxa de deslocamento
- [ ] Envio pelo WhatsApp
- [ ] Polimento e responsividade
---
## ⚠️ Aviso

Os valores exibidos são **estimativas**. O valor final depende de visita técnica.
---
## 👥 Equipe

| Nome | GitHub |
|---|---|
| Marllon Lorran | [@eumarllonlran](https://github.com/eumarllonlran) |
| Fábio Henrique | — |
| Luiz Vinicius Brito Correia | — |
| Pedro Henrique | — |
