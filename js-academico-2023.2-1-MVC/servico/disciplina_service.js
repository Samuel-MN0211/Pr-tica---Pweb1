class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplina);
        return disciplina;
    }

    pesquisar(codigo) {
        return this.repositorio.pesquisar(codigo);
    }

    atualizar(disciplina) {
        // Implementar atualização da disciplina
    }

    remover(codigo) {
        // Implementar remoção da disciplina
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        disciplina.adicionarAluno(aluno);
    }
}
