import './estoque.css'
import { Item } from "./card/item";

const DB_ITEM = [
         {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            //  imagem:'/src/assets/estoque/ração.jpg',
            imagem:"asa",
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
    ];
export function estoque(){
    return(
          <div id = "estoque">
            <h1>Estoque</h1>
            <table>
                <tr id = "estoque_info">
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Código</th>
                    <th>Unidade</th>
                    <th>Quantidade</th>
                </tr>
                {DB_ITEM.map((itens) => (
                    <tr id = "estoque_dados" >
                        <th><img src={itens.imagem}/></th>
                        <th>{itens.nome}</th>
                        <th>{itens.codigo}</th>
                        <th>{itens.unidade}</th>
                        <th>{itens.quantidade}</th>
                    </tr>
                 ) ) } 
            </table>
            
            
            
            
            
            
            
          </div>
    );
}