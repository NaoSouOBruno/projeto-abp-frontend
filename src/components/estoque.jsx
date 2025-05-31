
import { Item } from "./card/item";

const DB_ITEM = [
        {
            nome: "Teste",
        },
    ];
export function estoque(){
    return(
          <div>
            {DB_ITEM.map((itens) => (
                <Item nome = {itens.nome}>    
                </Item>
            ) ) }
        </div>
    );
}