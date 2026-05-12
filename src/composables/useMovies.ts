import { ref } from 'vue'

const movies = ref([
  {
    id: 1,
    title: 'Interestelar',
    year: 2014,
    rating: '12+',
    description: 'Uma equipe viaja pelo espaço em busca de um novo lar.'
  },
  {
    id: 2,
    title: 'Toy Story',
    year: 1995,
    rating: 'Livre',
    description: 'Brinquedos ganham vida quando ninguém está olhando.'
  },
  {
    id: 3,
    title: 'Batman Begins',
    year: 2005,
    rating: '12+',
    description: 'Bruce Wayne inicia sua jornada como Batman.'
  },
  {
    id: 4,
    title: 'Coringa',
    year: 2019,
    rating: '18+',
    description: 'Arthur Fleck se transforma no Coringa.'
  },
  {
    id: 5,
    title: 'Vingadores: Ultimato',
    year: 2019,
    rating: '12+',
    description: 'Os heróis restantes enfrentam Thanos na batalha final.'
  },
  {
    id: 6,
    title: 'Homem-Aranha: Sem Volta Para Casa',
    year: 2021,
    rating: '12+',
    description: 'Peter Parker enfrenta vilões de outros universos.'
  },
  {
    id: 7,
    title: 'O Rei Leão',
    year: 1994,
    rating: 'Livre',
    description: 'Simba precisa assumir seu lugar como rei.'
  },
  {
    id: 8,
    title: 'John Wick',
    year: 2014,
    rating: '16+',
    description: 'Um ex-assassino busca vingança após perder seu cachorro.'
  },
  {
    id: 9,
    title: 'Titanic',
    year: 1997,
    rating: '12+',
    description: 'Um romance nasce durante a viagem do Titanic.'
  },
  {
    id: 10,
    title: 'Invocação do Mal',
    year: 2013,
    rating: '16+',
    description: 'Investigadores paranormais enfrentam forças malignas.'
  },
  {
    id: 11,
    title: 'Frozen',
    year: 2013,
    rating: 'Livre',
    description: 'Duas irmãs enfrentam poderes mágicos e aventuras.'
  },
  {
    id: 12,
    title: 'Deadpool',
    year: 2016,
    rating: '18+',
    description: 'Um anti-herói sarcástico busca vingança.'
  }
])

export function useMovies() {
  return {
    movies
  }
}