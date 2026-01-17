export interface Pizza {
    id: string;
    categoriaId: string;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    popular: boolean;
    quantidade: number;
}