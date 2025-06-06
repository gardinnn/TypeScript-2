interface pessoa<T> {
  nome:string
  idade:number
  profissão: T   
}

interface Aluno {
    matricula:string
}

interface Engenheiro{
    crea: string
}

interface Medico{
    crm:string
}

let medico: pessoa<Medico>
let aluno: pessoa<Aluno>
let engenheiro: pessoa<Engenheiro>

// ---------------------------------------------------------------------------------


type lista<T> = T[]
let lista
