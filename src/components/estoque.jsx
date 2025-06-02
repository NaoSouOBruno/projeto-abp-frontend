import './estoque.css'
import { Add } from './estoque/add_estoque';
import { useState } from 'react';

const DB_ITEM = [
         {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Testse',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
        {
            imagem:'/src/assets/estoque/ração.jpg',
            nome:'Teste',
             codigo:"34534",
             unidade:"pacote",
             quantidade:12,
        },
    ];

    
export function Estoque(){

    const [open,setOpen] = useState(false)

    return(
          <div id = "estoque">
            <h1>Estoque</h1>

            <div id = "div_tabela">
                <table>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Código</th>
                        <th>Unidade</th>
                        <th>Quantidade</th>
                    </tr>
                    {DB_ITEM.map((itens) => (
                        <tr>
                            <td><img src={itens.imagem}/></td>
                            <td>{itens.nome}</td>
                            <td>{itens.codigo}</td>
                            <td>{itens.unidade}</td>
                            <td>{itens.quantidade}</td>
                        </tr>
                    ) ) } 
                </table>
            </div>
            <div>
                <button onClick={() => setOpen(true)}><img src="/src/assets/estoque/+.png" alt="add"/></button>
            </div>
            <Add open={open}/>
 
          </div>
    );
}