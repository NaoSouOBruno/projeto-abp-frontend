import "./add_estoque.css"
import { useState } from 'react';

export function Edit({openEdit,setOpenEdit,codigoSelect}){
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"))
    const Dado = DB_ITEM.find(DB_ITEM => DB_ITEM.codigo === codigoSelect);
    const [Img,setImg] = useState("") //usado para conseguirmos alterar a img

    function AddImagem(event){ //pega a img do input e trasforma em url
        const x = event.target.files[0]
        const xurl = URL.createObjectURL(x);
        setImg(xurl)
    }

    if (!openEdit) return null;


    return(

        <div id="fundo">    
                <div id="menu">
                    <h1>Editor de item</h1>
                    <form action="">
                    <h2>Imagem:</h2>
                    <input onChange={AddImagem} type="file" name="imagem"  />
                    <img src={Img === "" ? Dado.imagem: Img} alt="" />
                    <h2>Nome:</h2>
                    <input defaultValue={Dado.nome} name="nome" type="text" />
                    <h2>Código:</h2>
                    <input disabled value={Dado.codigo}  name="codigo" type="text" />
                    <h2>Unidade:</h2>
                    <input defaultValue={Dado.unidade} name="unidade" type="text" />
                    
                    <div id="botoes">
                        <button>Editar</button> 
                        <button onClick={setOpenEdit}>Cancelar</button>
                    </div>
                    </form> 
                </div>
            </div>





    )


 


}