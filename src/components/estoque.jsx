import './estoque.css'
import { Item } from "./card/item";

const DB_ITEM = [
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
        },
       
    ];
export function estoque(){
    return(
          <div id = "estoque">
            {DB_ITEM.map((itens) => (
                <Item imagem={itens.imagem} nome = {itens.nome}>    
                </Item>
            ) ) }
          </div>
    );
}