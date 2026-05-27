## Nome do aluno
Lucas da Cunha

## Descrição do aplicativo
Aplicativo desenvolvido com Ionic Vue para exibir um catálogo de filmes.  
O usuário pode visualizar os filmes disponíveis, suas informações principais e acessar a tela de detalhes de cada filme.

## Telas Desenvolvidas

### 1. Tela Inicial (WelcomePage)

A primeira tela do aplicativo funciona como entrada do sistema.

Nela o usuário:
- Visualiza o nome do aplicativo
- Digita um email em um campo de entrada
- Recebe validação simples caso tente entrar sem preencher corretamente
- Pode acessar o catálogo através do botão “Entrar no App”

Foi utilizada estilização com:
- IonInput
- IonButton
- IonItem
- CSS personalizado com gradiente e centralização

---

### 2. Tela de Lista de Filmes (MoviesPage)

A segunda tela apresenta todos os filmes cadastrados no aplicativo.

Cada filme é exibido em formato de card contendo:
- Nome do filme
- Ano de lançamento
- Faixa etária

As faixas etárias possuem cores diferentes:
- Livre → verde
- 12+ → laranja
- 16+ → vermelho
- 18+ → preto

Também foi utilizado:
- Componente reutilizável (`MovieCard.vue`)
- Navegação dinâmica para os detalhes do filme
- Renderização usando `v-for`

Componentes Ionic utilizados:
- IonCard
- IonBadge
- IonToolbar
- IonTitle

---

### 3. Tela de Detalhes do Filme (MovieDetailsPage)

A tela de detalhes exibe informações completas do filme selecionado.

Nela o usuário consegue visualizar:
- Título do filme
- Ano de lançamento
- Descrição/sinopse
- Faixa etária

Além disso, existe um botão para retornar à lista de filmes.

A navegação é feita utilizando parâmetros de rota (`/movie/:id`) através do Vue Router.

## Como rodar o projeto

Instalar as dependências:

```bash
npm install
```

Rodar o projeto:

```bash
ionic serve