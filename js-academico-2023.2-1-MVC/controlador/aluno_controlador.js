class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        const idadeElemento = document.querySelector("#idade");
        const idade = Number(idadeElemento.value)
        if (idade < 18){
            alert("Alunos menores de idade não podem ser cadastrados.");
            return;
        }
        const nomeElemento = document.querySelector("#nome");
        const matriculoElemento = document.querySelector("#matricula");
        
        const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

}
