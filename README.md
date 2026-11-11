# ⚡ Faísca Orçamentos

Site de orçamento de serviços elétricos para um eletricista autônomo de **João Pessoa - PB**. O cliente monta o pedido em poucas etapas, vê um valor estimado e envia tudo pronto pelo **WhatsApp**.

> 🚧 Projeto em desenvolvimento.
---
## ✨ Funcionalidades (v1)

- Landing page com apresentação e serviços
- Formulário de orçamento em 6 etapas (wizard) com barra de progresso e validação
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
- [x] Landing page
- [x] Formulário em etapas (wizard)
- [x] Dados e cálculo
- [x] Integração com ViaCEP e taxa de deslocamento
- [x] Envio pelo WhatsApp
- [ ] Testes e correções
- [ ] Polimento e responsividade
- [ ] Publicação no GitHub Pages
---
## ⚠️ Aviso

Os valores exibidos são **estimativas**. O valor final depende de visita técnica.
---
## 👥 Equipe

| Nome | Responsabilidade | GitHub |
|---|---|---|
| Marllon Lorran | Formulário em etapas (`orcamento.html`, `wizard.js`) | [@eumarllonlran](https://github.com/eumarllonlran) |
| Fábio Henrique | Integrações (`cep.js`, `whatsapp.js`) | — |
| Luiz Vinicius Brito Correia | Cálculo (`calculo.js`) | — |
| Pedro Henrique | Dados e visual (`servicos.json`, `style.css`) | — |
