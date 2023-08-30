class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    pesquisar(codigo) {
        return this.disciplinas.find(disciplina => disciplina.getCodigo() === codigo);
    }

    atualizar(disciplina) {
        // Implementar atualização da disciplina no repositório
    }

    remover(codigo) {
        // Implementar remoção da disciplina no repositório
    }
}
