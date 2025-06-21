import "./edit_estoque.css"
import { useEffect, useState } from 'react';

export function Edit({openEdit,setOpenEdit,codigoSelect}){
    
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
    const [Img,setImg] = useState("") //usado para conseguirmos alterar a img
    const [item_edit,setItem_edit] = useState([""]);

    const Dado = DB_ITEM.find(item => item.codigo === codigoSelect) || []; 

    useEffect(() => {
            setItem_edit(Dado)
        },[])    
        

    if (!openEdit) return null;
          
        function AddImagem(e){ //pega a img do input e trasforma em url
            if (Dado != null && DB_ITEM != null){
                const x = e.target.files[0]
                const xurl = URL.createObjectURL(x);
                setImg(xurl)
            }
        }

        
        
        

    function item_construcao(e){   //constroi o item quando o input recebe alteração
            if (e.target.type === "file"){ // possibilita armazenar um imagem no local storage convertendo ela para ser possivel de leitura
                const name = e.target.name
                const imagem = e.target.files[0]; // acho a imagem
                const imagem_leitor = new FileReader(); // crio o leitor
                imagem_leitor.readAsDataURL(imagem); // aqui ta lendo, e vai gera um rrsultado que vai ser usando no imagem_leitor.result;
                imagem_leitor.onloadend = () => {  //espero carregar p imagem_leitor.readAsDataURL(imagem); para fazer isso
                    const valor = imagem_leitor.result; // com o resultado do imagem_leitor.readAsDataURL(imagem) ele pode já ser amarzenado no local storagem, porque se não for assim  ele não funfa
                    setItem_edit((antes) => ({
                    ...antes,[name]: valor
                    }))
                }

            }else{
            const {name,value} = e.target; // caso não for a imagem ele armazena normalmente
            setItem_edit((antes) => ({
            ...antes,[name]: value}));}}



    function salvar_item (){ // modifica o item e manda para o local storage
        const item_atualizado = DB_ITEM.map((item) => item.codigo === Dado.codigo ? {...item, imagem:item_edit.imagem, descricao:item_edit.descricao, unidade: item_edit.unidade} : item); //modifica
        console.log(item_atualizado) // teste para ver se tá chegando
        localStorage.setItem("DB_ITEM",JSON.stringify(item_atualizado)); //manda
        setOpenEdit(false); //fecha
        window.location.reload(false); //autualiza janela
        }



    return(

        <div className="fundo_blur">
                <div id="menu_editor">
                    <h1>Editor de item</h1>
                    <form id="form_editor" action="">
                    <h2>Imagem:</h2>
                    <input id="edit_input_imaegm" onChange={(e) => {
                        AddImagem(e);
                        item_construcao(e);
                    }} type="file" name="imagem"  />
                    <img src={Img === "" ? Dado.imagem: Img} alt="" />
                    <div id="all_editor">
                        <h2>Descrição:</h2>
                        <input id="edit_descricao" onChange={item_construcao} defaultValue={Dado.descricao} name="descricao" type="text" />
                        <h2>Unidade de controle:</h2>
                        <select id="edit_unidade" onChange={item_construcao} value={Dado.unidade} name="unidade" type="text">
                            <option value="Unidade">Unidade</option>
                            <option value="Pacote">Pacote</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Fardo">Fardo</option>
                            <option value="Saco">Saco</option>
                            <option value="Rolo">Rolo</option>
                            <option value="Kit">Kit</option>
                        </select>
                    </div>
                    <div id="botoes_editor">
                        <button type="button" onClick={salvar_item}>Editar</button>
                        <button type="button" onClick={setOpenEdit}>Cancelar</button>
                    </div>
                    </form>
                </div>
            </div>





    )
}