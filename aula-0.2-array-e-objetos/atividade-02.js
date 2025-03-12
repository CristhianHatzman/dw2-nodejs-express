const Estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", 
    "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", 
    "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", 
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", 
    "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ];
    console.log(`Essa é a lista de todos os estados brasileiros: `)
Estados.forEach(estado => {
    console.log(estado)
})
console.log()
const estados = [
    {
        nome: "Acre",
        sigla: "AC",
    },
    {
        nome: "Alagoas",
        sigla: "AL",
    },
    {
        nome: "Amapá",
        sigla: "AP",
    },
    {
        nome: "Amazonas",
        sigla: "AM",
    },
    {
        nome: "Bahia",
        sigla: "BA",
    },
    {
        nome: "Ceará",
        sigla: "CE",
    },
    {
        nome: "Espírito Santo",
        sigla: "ES",
    },
    {
        nome: "Goiás",
        sigla: "GO",
    },
    {
        nome: "Maranhão",
        sigla: "MA",
    },
    {
        nome: "Mato Grosso",
        sigla: "MT",
    },
    {
        nome: "Mato Grosso do Sul",
        sigla: "MS",
    },
    {
        nome: "Minas Gerais",
        sigla: "MG",
    },
    {
        nome: "Pará",
        sigla: "PA",
    },
    {
        nome: "Paraíba",
        sigla: "PB",
    },
    {
        nome: "Paraná",
        sigla: "PR",
    },
    {
        nome: "Pernambuco",
        sigla: "PE",
    },
    {
        nome: "Piauí",
        sigla: "PI",
    },
    {
        nome: "Rio de Janeiro",
        sigla: "RJ",
    },
    {
        nome: "Rio Grande do Norte",
        sigla: "RN",
    },
    {
        nome: "Rio Grande do Sul",
        sigla: "RS",
    },
    {
        nome: "Rondônia",
        sigla: "RO",
    },
    {
        nome: "Roraima",
        sigla: "RR",
    },
    {
        nome: "Santa Catarina",
        sigla: "SC",
    },
    {
        nome: "São Paulo",
        sigla: "SP",
    },
    {
        nome: "Sergipe",
        sigla: "SE",
    },
    {
        nome: "Tocantins",
        sigla: "TO",
    },
    {
        nome: "Distrito Federal",
        sigla: "DF",
    },
]

estados.forEach(estado => {
    console.log(`O estado ${estado.nome} tem a sigla ${estado.sigla}`)
    console.log()
})

const pessoa = {
    nome: 'Cristhian Hatzman',
    idade: 21,
    cidade: 'Pariquera-Açu',
    hobby: 'Academia',
    musicaPreferida: 'Hino do Corinthians',
}
console.log()
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade, mora em ${pessoa.cidade}, seu hobby é ${pessoa.hobby} e sua musica preferida é: ${pessoa.musicaPreferida}.`)
console.log()
const filmes = [
    {
        titulo: "O Poderoso Chefão",
        genero: "Crime, Drama",
        ano: 1972,
        classificacaoIdade: 16,
    },
    {
        titulo: "Forrest Gump: O Contador de Histórias",
        genero: "Drama, Romance",
        ano: 1994,
        classificacaoIdade: 12,
    },
    {
        titulo: "Titanic",
        genero: "Drama, Romance",
        ano: 1997,
        classificacaoIdade: 12,
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "Aventura, Fantasia",
        ano: 2001,
        classificacaoIdade: 12,
    },
    {
        titulo: "Jurassic Park: O Parque dos Dinossauros",
        genero: "Aventura, Ficção científica",
        ano: 1993,
        classificacaoIdade: 10,
    },
]

filmes.forEach(filme => {
    console.log(`O filme ${filme.titulo} de gênero ${filme.genero} foi lançado em ${filme.ano} e tem classificação indicativa para maior de ${filme.classificacaoIdade} anos.`)
    console.log()
})