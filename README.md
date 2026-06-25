# SA_PortalGeek_George_Henrique_Oliveira
##  Sobre o Projeto
Este projeto consiste em um **Portal de Eventos Geek** estático e responsivo, desenvolvido como parte da avaliação de recuperação. A plataforma foi criada utilizando apenas HTML5, CSS3 e JavaScript puro (Vanilla JS), com o objetivo de divulgar atrações, cronogramas, atividades e permitir o pré-cadastro de visitantes interessados.

---

##  Funcionalidades Implementadas

###  Páginas do Sistema
* **Página Inicial (`index.html`):** Contém o nome do evento, banner principal, descrição detalhada, menu de navegação e rodapé.
* **Página de Atrações (`atracoes.html`):** Apresenta 6 atrações organizadas de forma responsiva utilizando **Grid** e **Flexbox**, contendo imagem, nome e uma breve descrição de cada uma.
* **Página de Cronograma (`cronograma.html`):** Exibe a grade de horários, locais e os nomes das atividades de forma clara e organizada.
* **Página de Pré-Cadastro (`cadastro.html`):** Formulário completo estruturado para coletar Nome, E-mail, Cidade, Faixa etária e Evento de interesse, utilizando validações nativas do HTML.

###  Recursos de Interatividade (JavaScript)
1.  **Exibir/Ocultar Informações:** Botão interativo na página de atrações que expande ou recolhe detalhes adicionais de um item.
2.  **Validação de Formulário:** Verificação de campos obrigatórios no pré-cadastro com exibição de uma mensagem de sucesso amigável após o envio.
3.  **Contador Fictício de Inscritos:** Um contador numérico que aumenta dinamicamente em tempo real assim que o usuário clica no botão "Participar".
4.  **Alternador de Tema (Dark/Light Mode):** Opção para alterar dinamicamente a identidade visual do site entre tema claro e tema escuro.

---

##  Tecnologias e Recursos Utilizados

* **HTML5:** Estruturação semântica de todas as páginas.
* **CSS3:** Estilização externa unificada (`style.css`), aplicando conceitos de:
    * Seletores por tag, classe e ID.
    * Pseudo-classes para interatividade visual.
    * Layouts modernos e responsivos com **Flexbox** e **CSS Grid Layout**.
    * Posicionamento de elementos (`position`).
* **JavaScript (ES6):** Manipulação do DOM para os recursos dinâmicos.
* **Google Fonts:** Tipografia personalizada aplicada ao contexto geek.
* **Font Awesome:** Biblioteca de ícones vetoriais para o menu e detalhes visuais.

---

##  Estrutura de Pastas do Projeto

```text
├── CSS/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── 
├── index.html
├── atracoes.html
├── cronograma.html
├── cadastro.html
└── README.md
