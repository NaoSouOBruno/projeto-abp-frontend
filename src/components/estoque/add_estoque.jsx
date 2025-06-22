
import "./add_estoque.css"
import { useState,useEffect } from "react"


export function Add({open,setOpen}){
    const [codigonumero,setCodigonumero] = useState(0); //variavel usada para o codigo do item
    const [item_novo,setItem_novo] = useState({imagem: '',descricao: '',codigo: codigonumero,unidade: 'Unidade',quantidade: 0}
    );
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM") || "[]");
    
    function gerar_codigo(){ //gera um codigo com basse no ultimo codigo do item adicionado e soma + 1 

        if(DB_ITEM.length === 0){
            setCodigonumero(0)
        }else{
            const numero = DB_ITEM[DB_ITEM.length - 1];
            const novo_numero = parseInt(numero.codigo) + 1;
            setCodigonumero(novo_numero);
        }       
    };

    useEffect(() => { // para poder executar a função gerar codigo e setala modificala no item_novo
        gerar_codigo();
        setItem_novo((antes) => ({
            ...antes,
            codigo:codigonumero
        }));
    },[open])


    if (!open) return null;
       
        
    const item_construcao = (e) => {   //constroi o item quando o input recebe alteração  
        if (e.target.type === "file"){ // possibilita armazenar um imagem no local storage convertendo ela para ser possivel de leitura
            const name = e.target.name
            const imagem = e.target.files[0]; // acho a imagem
            const imagem_leitor = new FileReader(); // crio o leitor
            imagem_leitor.readAsDataURL(imagem); // aqui ta lendo, e vai gera um rrsultado que vai ser usando no imagem_leitor.result;
             imagem_leitor.onloadend = () => {  //espero carregar p imagem_leitor.readAsDataURL(imagem); para fazer isso 
                const valor = imagem_leitor.result; // com o resultado do imagem_leitor.readAsDataURL(imagem) ele pode já ser amarzenado no local storagem, porque se não for assim  ele não funfa
                setItem_novo((antes) => ({
                ...antes,[name]: valor
                }))
             }

        }else{
        const {name,value} = e.target; // caso não for a imagem ele armazena normalmente
        setItem_novo((antes) => ({
        ...antes,[name]: value}));}
            
        }

    

    const add_item = () => { //add o item para o local storage e fecha a o menu de criação atualizando a pagina
        if (item_novo.descricao === '') {
            alert("Preencha o campo descrição");
        } else {
            setItem_novo((antes) => ({
        ...antes,imagem: "/logos/logo1.png"}));
        const novos_itens = [...DB_ITEM,item_novo];
        localStorage.setItem("DB_ITEM",JSON.stringify(novos_itens));
        setOpen(false);
        window.location.reload(false);
        }
        }


        
        return (

            <div className="fundo_blur">    
                <div id="menu_add">
                    <h1>Criação de item</h1>
                    <form action="">
                    <h2>Imagem:</h2>
                    
                    <input id="add_input_imagem" onChange={item_construcao} type="file" name="imagem"  />
                    <div id="add_img">
                        <img required src={item_novo.imagem ? item_novo.imagem : "/logos/logo1.png"} alt="" />
                    </div>
                    <div id="add_all">
                        <h2>Descrição:</h2>
                        <input maxlength="100" id="add_input_descricao" required value={item_novo.descricao} onChange={item_construcao} name="descricao" type="text" />
                        <h2>Código:</h2>
                        <input id="add_input_codigo" required value={item_novo.codigo} onChange={item_construcao} name="codigo" type="text" disabled />
                        <h2>Unidade de controle:</h2>
                        {/* <input value={item_novo.unidade} onChange={item_construcao} name="unidade" type="text" /> */}
                        <select id="add_select_unidade" required value={item_novo.unidade} onChange={item_construcao} name="unidade">
                            <option value="Unidade">Unidade</option>
                            <option value="Pacote">Pacote</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Fardo">Fardo</option>
                            <option value="Saco">Saco</option>
                            <option value="Rolo">Rolo</option>
                            <option value="Kit">Kit</option>
                        </select>
                    </div>
                    <div id="botoes_add">
                        <button type="button" onClick={add_item}>Criar</button> 
                        <button type="button" onClick={() => {setOpen(false),setItem_novo({imagem: '',descricao: '',codigo: codigonumero,unidade: 'Unidade',quantidade: 0}); }}>Cancelar</button>
                    </div>
                    </form> 
                </div>
            </div>
        )
    }

 