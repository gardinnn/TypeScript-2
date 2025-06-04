interface Pessoa{
    nome: string
    idade: number
}

interface Aluno extends Pessoa{
    curso: string
    ira: number
}

let aluno : Aluno 

