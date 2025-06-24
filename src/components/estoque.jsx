import './estoque.css'
import { Add } from './estoque/add_estoque';
import { Delete } from './estoque/delete_estoque';
import { Edit } from './estoque/edit_estoque';
import { Visualizar } from './estoque/visualizar.jsx';
import { Registro } from './estoque/registro.jsx';
import { use, useEffect, useState } from 'react';

import { Navbar } from './navbar/navbar.jsx'
    
export function Estoque(){

    const [open,setOpen] = useState(false);
    const [openEdit,setOpenEdit] = useState(false);
    const [openDelete,setOpenDelete] = useState(false); 
    const [openVisualizar,setOpenVisualizar] = useState(false);
    const [openRegistro,setOpenRegistro] = useState(false);
    const [codigoSelect,setCodigoSelect] = useState(0);
    const [DB_ITEM,setDB_ITEM] = useState([]);
    const [filtroNome,setFiltroNome] = useState("");
    const [filtroCodigo,setFiltroCodigo] = useState("");
    const [filtroQuantidade,setFiltroQuantidade] = useState("");
    const [filtroUnidade,setFiltroUnidade] = useState("");
   

    useEffect(() => {
    const dados = localStorage.getItem('DB_ITEM');

    if (dados) {
        setDB_ITEM(JSON.parse(dados));
    } else {
        const padrao = [
        { descricao: "Ração Golden (Peças Grandes)", codigo: 1, quantidade: 12, unidade: "Pacote", imagem: "/public/ração2.jpeg" },
        { descricao: "Ração Golden (Peças Pequenas)", codigo: 2, quantidade: 24, unidade: "Pacote", imagem: "/public/ração3.webp" },
        { descricao: "Ração Golden (Peças Médias)", codigo: 3, quantidade: 18, unidade: "Pacote", imagem: "/public/maçã.gif" },
        { descricao: "Ração Premier (Peças Pequenas)", codigo: 4, quantidade: 30, unidade: "Pacote", imagem: "/public/ração5.png" },
        ];
        setDB_ITEM(padrao);
        localStorage.setItem('DB_ITEM', JSON.stringify(padrao));
        
    }
    }, []);


    

    //filtro

    const estoque_filtro = DB_ITEM.filter((item) =>
        (item.descricao || "").toLowerCase().includes((filtroNome || "").toLowerCase()) &&
        (filtroCodigo === "" || item.codigo === Number(filtroCodigo)) &&
        (filtroQuantidade === "" || item.quantidade === Number(filtroQuantidade)) &&
        (item.unidade || "").includes((filtroUnidade || ""))
    );



    

    return(
        <>
        
        <Navbar />
            <Add open={open} setOpen={() => setOpen(false)}/>
            <Edit openEdit={openEdit} setOpenEdit={() => setOpenEdit(false)} codigoSelect={codigoSelect} />   
            <Delete openDelete={openDelete}  setOpenDelete={() => setOpenDelete(false)} codigoSelect={codigoSelect}  />
            <Visualizar openVisualizar={openVisualizar} setOpenVisualizar={() => setOpenVisualizar(false)} codigoSelect={codigoSelect} />
            <Registro openRegistro={openRegistro}  setOpenRegistro={() => setOpenRegistro(false)}  />
          <div id = "estoque">
            <div id="div_filtros">
                <h1>Estoque</h1>
                <div id="filtros">
                <p>Descrição:</p>
                <input id="filtros_descricao" type="text" placeholder="Pesquisar Descrição" onChange={(e) => {setFiltroNome(e.target.value)}}/>
                <p>Codigo:</p>
                <input id="filtros_codigo" type="text" placeholder="Pesquisar Codigo" onChange={(e) => {setFiltroCodigo(e.target.value)}}/>
                <p>Quantidade:</p>
                <input id="filtros_quantidade" type="text" placeholder="Quantidade" onChange={(e) => {setFiltroQuantidade(e.target.value)}}/>
                <p>Unidade:</p>
                <select id="filtros_unidade" onChange={(e) => {setFiltroUnidade(e.target.value)}} defaultValue={""} type="text">
                        <option value="">Todos</option>
                        <option value="Unidade">Unidade</option>
                        <option value="Pacote">Pacote</option>
                        <option value="Caixa">Caixa</option>
                        <option value="Fardo">Fardo</option>
                        <option value="Saco">Saco</option>
                        <option value="Rolo">Rolo</option>
                        <option value="Kit">Kit</option>
                    </select>
                <button id='botao_add' onClick={() => setOpen(true)}><img src="/src/assets/estoque/+.png" alt="add"/></button>
                <button id='botao_add' onClick={() => setOpenRegistro(true)}><img src="/src/assets/estoque/registro.png" alt="registro"/></button>
                </div>
            </div>
            <div id = "div_tabela">
                <table id="tabela_estoque">
                    <tbody >    
                        <tr>
                            <th>Imagem</th>
                            <th>Descrição</th>
                            <th>Código</th>
                            <th>Unidade de controle</th>
                            <th>Quantidade</th>
                        </tr>
                        {estoque_filtro.map((itens) => (
                            <tr key={itens.codigo}>
                                
                                <td id="coluna_img"><img src={itens.imagem}/></td>
                                <td>{itens.descricao}</td>
                                <td width={"10%"}>{itens.codigo}</td>
                                <td width={"10%"} >{itens.unidade}</td>
                                <td width={"10%"} >{itens.quantidade}</td>
                                <td  id="coluna_bottons"><button id='botao_gen' onClick={() => {setOpenEdit(true),setCodigoSelect(itens.codigo)}}> <img src="/src/assets/estoque/editar.png" alt="editar" /></button>
                                <button id='botao_gen' onClick={() => {setCodigoSelect(itens.codigo),setOpenDelete(true)}}><img src="/src/assets/estoque/delete.png" alt="deletar" /></button>
                                <button id='botao_gen' onClick={() => {setCodigoSelect(itens.codigo), setOpenVisualizar(true)}}><img src="/src/assets/estoque/visualizar.png" alt="visualizar" /></button>
                                </td>
                                
                            </tr>
                        ) )} 
                    </tbody>
                </table>
            </div>
          </div>
          
        </>
        
    );
}
