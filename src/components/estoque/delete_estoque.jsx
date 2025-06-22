import { useState, useEffect } from 'react';
import "./delete_estoque.css"

export function Delete({openDelete,setOpenDelete,codigoSelect}){

    
    const codigo = codigoSelect;

    const [DB_ITEM,setDB_ITEM] = useState([""]);
    
    useEffect(() => {
            const dados = localStorage.getItem('DB_ITEM'); // pega os daods de local storage se tiver alguma coisa, se não continua vazia
            if (dados !== null && dados !== undefined){
                setDB_ITEM(JSON.parse(dados));
            }
        },[]);
    


    function deletar(){
        const novoDB_ITEM = DB_ITEM.filter(item => item.codigo != codigo); // faz uma nova db sem o item com aquele codigo
        console.log("aqui")
        localStorage.setItem("DB_ITEM",JSON.stringify(novoDB_ITEM)); //manda
        window.location.reload(false); //autualiza janela
    }

    if(!openDelete) return null;

    return(

        <div className="fundo_blur">

            <div id="menu_delete">
                <div id="mensagem_delete">
                    Tem Certeza?
                </div>
                <button onClick={deletar}>Sim</button>
                <button onClick={setOpenDelete}>Não</button>

            </div>



        </div>


    )

    


}