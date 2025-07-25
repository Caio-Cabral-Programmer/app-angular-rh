export class Candidato {
    constructor(
        public cpf: string = '',
        public nome: string = '',
        public telefone: string = '',
        public email: string = ''
    ) {}

    public mostrarCandidato() : string {
        return `CPF: ${this.cpf}\nNome: ${this.nome}\nTelefone: ${this.telefone}\nEmail: ${this.email}`;
    }
}
