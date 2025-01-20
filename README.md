# Documentação do Projeto: Dark Souls Lore App

Introdução

Este projeto é uma aplicação React que apresenta a lore de chefes icônicos do jogo Dark Souls. A aplicação utiliza rotas para navegar entre diferentes páginas e inclui estilos customizados para melhorar a experiência visual.

Dependências e Configurações

Dependências Instaladas

O projeto utiliza as seguintes bibliotecas:

React: Biblioteca principal para construção da interface do usuário.

React Router DOM: Responsável pelo gerenciamento de rotas na aplicação.

Comandos para Instalação

Certifique-se de ter o Node.js instalado. Em seguida, execute os comandos abaixo para configurar o ambiente:

npm install react-router-dom

Estrutura do Projeto

Arquivos e Diretórios Principais

App.js: Contém os componentes principais da aplicação e as definições de rota.

App.css: Arquivo de estilos customizados utilizado para estilizar os componentes.

index.js: Ponto de entrada da aplicação React.

Estrutura do App.js

O App.js foi estruturado da seguinte forma:

Home: Página inicial que apresenta uma mensagem de boas-vindas e um botão para acessar a primeira página de lore.

LoreArtorias: Página dedicada à história de Artorias, contendo texto descritivo, uma imagem animada e links para navegar entre páginas.

LoreKalameet: Página que detalha a lore de Kalameet, com estrutura semelhante à de Artorias.

LoreSoulOfCinder: Página sobre a Soul of Cinder, também com conteúdo visual e descritivo.

Configuração de Rotas

As rotas foram configuradas com react-router-dom e incluem:

/: Página inicial.

/lore-artorias: Página da lore de Artorias.

/lore-kalameet: Página da lore de Kalameet.

/lore-soul-of-cinder: Página da lore da Soul of Cinder.

Exemplo de definição de rotas no App.js:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/lore-artorias" element={<LoreArtorias />} />
  <Route path="/lore-kalameet" element={<LoreKalameet />} />
  <Route path="/lore-soul-of-cinder" element={<LoreSoulOfCinder />} />
</Routes>

Estilização

O arquivo App.css foi criado para estilizar os componentes de forma consistente com o tema de Dark Souls. Os principais estilos incluem:

Fundo escuro com texto em cores suaves para garantir contraste.

Botões personalizados com efeitos de hover.

Imagens animadas centralizadas e estilizadas com bordas arredondadas e sombras.

Trecho de exemplo do App.css:

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #1e1e2f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

button:hover {
  background-color: #e3b016;
  color: #fff;
}

Funcionalidades Implementadas

Navegação: Links para ir à próxima ou voltar à página anterior, facilitando a exploração da lore.

Interatividade: Uso do useNavigate para redirecionar entre páginas com um clique.

Estilização responsiva: GIFs redimensionáveis e design que se adapta a diferentes tamanhos de tela.

Melhorias Futuras

Adicionar mais lendas de chefes de Dark Souls.

Incluir áudio de fundo para uma experiência mais imersiva.

Implementar uma página de pesquisa para localizar chefes.

Como Executar o Projeto

Clone o repositório.

Instale as dependências com:

npm install

Inicie o servidor de desenvolvimento:

npm start

Acesse o aplicativo em http://localhost:3000.

Conclusão

Este projeto oferece uma base sólida para explorar a lore de Dark Souls. Sua estrutura modular e estilização cuidadosa tornam o aplicativo fácil de expandir e personalizar. Caso tenha dúvidas ou queira contribuir, sinta-se à vontade para entrar em contato!