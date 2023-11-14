export interface Produto {
  id: number | undefined | null;
  nome: string | undefined | null;
  descricao?: string | undefined | null;
  preco: number | undefined | null;
}
