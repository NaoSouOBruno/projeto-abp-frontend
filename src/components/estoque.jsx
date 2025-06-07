import './estoque.css'
import { Add } from './estoque/add_estoque';
import { Edit } from './estoque/edit_estoque';
import { useEffect, useState } from 'react';


    
export function Estoque(){

    const [open,setOpen] = useState(false);
    const [openEdit,setOpenEdit] = useState(false);


    const [DB_ITEM,setDB_ITEM] = useState([]);


    useEffect(() => {
        const dados = localStorage.getItem('DB_ITEM'); // pega os daods de local storage se tiver alguma coisa se não continua vazia
        if (dados !== null && dados !== undefined){
            setDB_ITEM(JSON.parse(dados));
        }
    },[]);

    

    return(
          <div id = "estoque">
            <h1>Estoque</h1>

            <div id = "div_tabela">
                <table>
                    <tbody>    
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Código</th>
                            <th>Unidade</th>
                            <th>Quantidade</th>
                        </tr>
                        {DB_ITEM.map((itens,index) => (
                            <tr key={index}>
                                <td><img src={itens.imagem}/></td>
                                <td>{itens.nome}</td>
                                <td>{itens.codigo}</td>
                                <td>{itens.unidade}</td>
                                <td>{itens.quantidade}</td>
                                <td id="coluna_bottons"><button> <img src="/src/assets/estoque/editar.png" alt="editar" /></button>
                                <button><img src="/src/assets/estoque/delete.png" alt="deletar" /></button></td>
                            </tr>
                        ) )} 
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => setOpen(true)}><img src="/src/assets/estoque/+.png" alt="add"/></button>
            </div>
            <Add open={open} setOpen={() => setOpen(false)}/>
            <Edit openEdit={openEdit} setOpenEdit={() => setOpenEdit(false)} />   
          </div>
    );
}
