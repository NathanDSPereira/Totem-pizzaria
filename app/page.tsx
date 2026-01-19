'use client';

import ListPizza from '@/components/ListPizza';
import ListCategorias from '@/components/ListCategorias';
import Footer from '@/components/FooterPage';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import BdCategorias from '@/bancoDeDados/BdCategorias.json';
import BdIngredientes from '@/bancoDeDados/BdIngredientes.json'

import { useState } from 'react';

import { Pizza } from '@/interface/Pizza';
import CarrinhoModal from '@/components/CarrinhoModal';
import CustomizacaoPizzaModal from '@/components/CustomizacaoPizzaModal';

export default function Home() {

  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'PizzaRestaurant',
  //   'name': 'Duperon Pizzaria',
  //   'address': {
  //     '@type': 'PostalAddress',
  //     'streetAddress': 'Bairro Abadia, 406',
  //     'addressLocality': 'Uberaba',
  //     'addressRegion': 'MG',
  //     'postalCode': '38025-170',
  //     'addressCountry': 'BR'
  //   },
  //   'telephone': '+553499999999', // Atualize com o número real
  //   'openingHours': 'Mo-Fr 18:00-23:00',
  //   'priceRange': '$$'
  // };

  const listaPizzas = BdPizzas;
  const listCategorias = BdCategorias;
  const listIngredientes = BdIngredientes;

  const [categoriaAtiva, setCategoriaAtiva] = useState('pizzas-salgadas');
  const [carrinho, setCarrinho] = useState<Pizza[]>([]);
  const [isFinalizarAberto, setIsFinalizarAberto] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Pizza | null>(null);

  const produtosFiltrados = listaPizzas.filter((produto) => produto.categoriaId == categoriaAtiva);
  const valorTotal = carrinho.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  const quantidadeTotal = carrinho.reduce((acumulador, item) => acumulador + item.quantidade, 0)



  const editarProduto = (produto: Pizza) => {
    setProdutoEmEdicao(produto);
  }

  const removerItemCarrinho = (id: string) => {
    setCarrinho((itensAtuais) => {
      return itensAtuais.filter(item => item.id !== id);
    })
  }

  const adicionarAoCarinho = (produto: Pizza) => {
    setCarrinho((itensAtuais) => {
      const itemExiste = itensAtuais.find((item) => item.id === produto.id)

      if(itemExiste) {
        return itensAtuais.map((item) => 
          item.id === produto.id 
          ? {...item, quantidade: item.quantidade + 1} : item
        )
      }

      return [...itensAtuais, {...produto, quantidade: 1}]
    })
  }

  const selecionarCategoria = (categoriaSlug: string) => {
    setCategoriaAtiva(categoriaSlug);
  };

  return (
    <main className="overflow-hidden bg-zinc-950 h-screen pb-40 pt-4 flex">

      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ListCategorias 
        listaCategorias={listCategorias} 
        selecionarCategoria={selecionarCategoria}
        categoriaAtiva={categoriaAtiva}
      />
      <ListPizza 
        listaPizzas={produtosFiltrados} 
        adicionarAoCarrinho={adicionarAoCarinho}
        abrirCustomizacao={editarProduto}
      />

      {quantidadeTotal > 0 && (
        <Footer 
          valorTotal={valorTotal} 
          quantidadeTotal={quantidadeTotal} 
          aoFinalizar={() => setIsFinalizarAberto(true)}
        />
      )}

      {isFinalizarAberto && (
        <CarrinhoModal 
          itens={carrinho}
          fechar={() => setIsFinalizarAberto(false)}
          remover={removerItemCarrinho}
          total={valorTotal}
        />
      )}

      {produtoEmEdicao && (
        <CustomizacaoPizzaModal
          fecharModal={() => setProdutoEmEdicao(null)}
          produto={produtoEmEdicao}
          todosOsIngredientes={listIngredientes}
        />
      )}
    </main>
  );
}
