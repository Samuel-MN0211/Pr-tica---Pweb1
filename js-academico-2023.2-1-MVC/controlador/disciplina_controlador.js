class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserirDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        
        const disciplina = this.servico.inserir(codigoElemento.value, nomeElemento.value);

        this.exibirDetalhesDisciplina(disciplina);
    }

    inserirAlunoNaDisciplina() {
        const idadeElemento = document.querySelector("#idade");
        const idade = Number(idadeElemento.value);

        if (idade < 18) {
            alert("Alunos menores de idade não podem ser cadastrados.");
            return;
        }

        const nomeElemento = document.querySelector("#nome");
        const matriculoElemento = document.querySelector("#matricula");

        const alunoInserido = this.servico.inserirAluno(nomeElemento.value, idade, matriculoElemento.value);
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

    exibirDetalhesDisciplina(disciplina) {
        const detalhesElemento = document.querySelector("#detalhesDisciplina");

        detalhesElemento.innerHTML = '';

        const detalhesDiv = document.createElement("div");
        detalhesDiv.textContent = `Código: ${disciplina.getCodigo()} - Nome: ${disciplina.getNome()}`;

        const alunosDiv = document.createElement("div");
        alunosDiv.textContent = "Alunos:";

        const alunosUl = document.createElement("ul");
        const alunos = disciplina.getAlunos();

        alunos.forEach(aluno => {
            const alunoLi = document.createElement("li");
            alunoLi.textContent = `${aluno.getNome()} - Idade: ${aluno.getIdade()}`;
            alunosUl.appendChild(alunoLi);
        });

        alunosDiv.appendChild(alunosUl);
        detalhesDiv.appendChild(alunosDiv);
        detalhesElemento.appendChild(detalhesDiv);
    }


}

