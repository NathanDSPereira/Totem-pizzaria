'use client';

import ListPizza from '@/components/ListPizza';
import ListCategorias from '@/components/ListCategorias';
import Footer from '@/components/FooterPage';
import CarrinhoModal from '@/components/CarrinhoModal';
import CustomizacaoPizzaModal from '@/components/CustomizacaoPizzaModal';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import BdCategorias from '@/bancoDeDados/BdCategorias.json';
import BdIngredientes from '@/bancoDeDados/BdIngredientes.json'

import { Pizza } from '@/interface/Pizza';
import { ItemCarrinho } from '@/interface/ItemCarrinho';

import { useState } from 'react';


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
  const [categoriaNome, setCategoriaNomeAtivo] = useState('Pizzas Salgadas')
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
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

  const adicionarAoCarinho = (produto: ItemCarrinho) => {
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

  const selecionarCategoria = (categoriaSlug: string, categoriaNome: string) => {
    setCategoriaAtiva(categoriaSlug);
    setCategoriaNomeAtivo(categoriaNome)
  };

  return (
    <div className="overflow-hidden bg-zinc-950 h-screen pt-4 flex">

      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ListCategorias 
        listaCategorias={listCategorias} 
        selecionarCategoria={selecionarCategoria}
        categoriaAtiva={categoriaAtiva}
      />

      <main className='flex flex-1 flex-col h-[calc(100vw - 50px)] overflow-y-auto custom-scrollbar'>
        <ListPizza 
          listaPizzas={produtosFiltrados} 
          adicionarAoCarrinho={adicionarAoCarinho}
          abrirCustomizacao={editarProduto}
          categoriaNome={categoriaNome}
        />

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
      
      {quantidadeTotal > 0 && (
          <Footer 
            valorTotal={valorTotal} 
            quantidadeTotal={quantidadeTotal} 
            aoFinalizar={() => setIsFinalizarAberto(true)}
          />
        )}
    </div>
  );
}
