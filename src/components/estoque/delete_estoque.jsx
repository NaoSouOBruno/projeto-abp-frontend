
import "./delete_estoque.css"

export function Delete({openDelete,setOpenDelete,codigoSelect}){

    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM")) || [];
    const codigo = codigoSelect;

    function deletar(){
        const novoDB_ITEM = DB_ITEM.filter(item => item.codigo != codigo); // faz uma nova db sem o item com aquele codigo
        console.log("aqui")
        localStorage.setItem("DB_ITEM",JSON.stringify(novoDB_ITEM)); //manda
        window.location.reload(false); //autualiza janela
    }

    if(!openDelete) return null;

    return(

        <div id="fundo">

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