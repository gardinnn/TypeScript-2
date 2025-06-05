type pessoa = {
  nome:string
  idade:number
  carro?:string    
}

type aluno = pessoa &{
    curso:string
    ira:number
}

let aluno: aluno
aluno = {
    nome:"gabriel",
     idade:19, 
    curso: "ADS" , 
    ira:5
}