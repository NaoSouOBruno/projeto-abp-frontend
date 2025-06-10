import './estoque.css'
import { Add } from './estoque/add_estoque';
import { Delete } from './estoque/delete_estoque';
import { Edit } from './estoque/edit_estoque';
import { useEffect, useState } from 'react';

import { Navbar } from './navbar/navbar.jsx'
    
export function Estoque(){

    const [open,setOpen] = useState(false);
    const [openEdit,setOpenEdit] = useState(false);
    const [openDelete,setOpenDelete] = useState(false); 
    const [codigoSelect,setCodigoSelect] = useState(0)
    const [DB_ITEM,setDB_ITEM] = useState([]);


    useEffect(() => {
        const dados = localStorage.getItem('DB_ITEM'); // pega os daods de local storage se tiver alguma coisa, se não continua vazia
        if (dados !== null && dados !== undefined){
            setDB_ITEM(JSON.parse(dados));
        }
    },[]);

    

    return(
        <>
        <Navbar />
          <div id = "estoque">
            <h1>Estoque</h1>

            <div id = "div_tabela">
                <table>
                    <tbody>    
                        <tr>
                            <th>Imagem</th>
                            <th>Descrição</th>
                            <th>Código</th>
                            <th>Unidade de controle</th>
                            <th>Quantidade</th>
                        </tr>
                        {DB_ITEM.map((itens) => (
                            <tr key={itens.codigo}>
                                <td><img src={itens.imagem}/></td>
                                <td>{itens.descricao}</td>
                                <td>{itens.codigo}</td>
                                <td>{itens.unidade}</td>
                                <td>{itens.quantidade}</td>
                                <td id="coluna_bottons"><button onClick={() => {setOpenEdit(true),setCodigoSelect(itens.codigo)}}> <img src="/src/assets/estoque/editar.png" alt="editar" /></button>
                                <button onClick={() => {setCodigoSelect(itens.codigo),setOpenDelete(true)}}><img src="/src/assets/estoque/delete.png" alt="deletar" /></button></td>
                            </tr>
                        ) )} 
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => setOpen(true)}><img src="/src/assets/estoque/+.png" alt="add"/></button>
            </div>
            <Add open={open} setOpen={() => setOpen(false)}/>
            <Edit openEdit={openEdit} setOpenEdit={() => setOpenEdit(false)} codigoSelect={codigoSelect} />   
            <Delete openDelete={openDelete}  setOpenDelete={() => setOpenDelete(false)} codigoSelect={codigoSelect}  />
          </div>
        </>
    );
}
