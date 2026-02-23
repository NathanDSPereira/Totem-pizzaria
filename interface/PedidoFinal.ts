import { ItemCarrinho } from "./ItemCarrinho";

export interface PedidoFinal {
  localConsumo: "local" | "viagem";
  cliente: string;
  telefoneCliente: string;
  statusPedido: "pendente" | "em preparo" | "pronto" | "entregue";
  metodoPagamento: string;
  produtos: ItemCarrinho[];
  valorTotal: number;
  numeroPedido: string;
}