const objeto = 

[
    {
        "Nome": "Garrett Vandervort",
        "Celular": "1-864-947-4697 x689",
        "Email": "Krista.Wyman@hotmail.com",
        "endereo": "Antonette Road",
        "idade": 77921,
        "id": "1",
        "atividadeExtra": [
            {
                "nome": "Renee Connelly",
                "conteudo": "conteudo 1",
                "id": "1",
                "alunoId": "1"
            }
        ]
    },
    {
        "Nome": "Miss Terrell Klein",
        "Celular": "(808) 788-9519 x7476",
        "Email": "Nora.Ferry@yahoo.com",
        "endereo": "Eveline Roads",
        "idade": 91201,
        "id": "2",
        "atividadeExtra": [
            {
                "nome": "Jessica Koss",
                "conteudo": "conteudo 2",
                "id": "2",
                "alunoId": "2"
            }
        ]
    }
]


console.log(objeto)
console.log(typeof objeto)

const jsonData = JSON.stringify(objeto)

console.log(jsonData)
console.log(typeof jsonData)

const objtData = JSON.parse(jsonData)

console.log(objtData)
console.log(typeof objtData)

objtData.map((aluno) => { 
    console.log(aluno.Nome)
    console.log(aluno.Email)
    console.log(aluno.atividadeExtra)

    aluno.atividadeExtra.map((extra)=>{
        console.log(extra.nome)
        console.log(extra.conteudo)
    })
    
    console.log()

})

console.log(objeto.at)