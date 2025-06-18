import React, { useState } from 'react'
import './index.css'

import { Card } from './card/card.jsx'
import { Navbar } from './navbar/navbar.jsx'

export function Index() {

    const [caes, setCaes] = useState([
        // alguns cachorrinhos placeholder!
        {
            img: '/src/assets/index/cachorro1.jpeg',
            idade: '2 anos',
            raca: 'Pastor Alemão',
            nome: 'Ringo',
            local: 'Abrigo de Animais Treviso',
            descricao: 'Esse é o Ringo, ele é muito legal e adora brincar!',
            status: 'Adotado'
        },
        {
            img: '/src/assets/index/cachorro2.jpg',
            idade: '1 ano',
            raca: 'Chihuahua',
            nome: 'Rei Henrique VIII',
            local: 'Abrigo de Animais Treviso',
            descricao: 'Esse é o Rei Henrique VIII, ele é muito carinhoso e adora passear!',
            status: 'No Petshop'
        },
        {
            img: '/src/assets/index/cachorro3.png',
            idade: '3 meses',
            raca: 'Vira-lata',
            nome: 'Wilsinho',
            local: 'Abrigo de Animais Siderópolis',
            descricao: 'Esse é o Wilsinho, ele é muito esperto e adora aprender novos truques!',
            status: 'No Veterinário'
        },
        {
            img: '/src/assets/index/cachorro4.jpg',
            idade: '33 anos',
            raca: 'Developer',
            nome: 'Toby',
            local: 'Abrigo de Animais Siderópolis',
            descricao: 'Esse é o Toby, ele adora programar e compor músicas!',
            status: 'Adotado'
        },
        {
            img: '/src/assets/index/cachorro5.jpg',
            idade: '19 anos',
            raca: 'Humano',
            nome: 'Bruno',
            local: 'Treviso',
            descricao: 'Oi, eu sou o Bruno! Eu que fiz essa página.',
            status: 'No Abrigo'
        }
    ]);

    const [filtroNome, setFiltroNome] = useState('');

    const caesFiltrados = caes.filter(cao =>
        cao.nome.toLowerCase().includes(filtroNome.toLowerCase())
        && cao.status !== 'Adotado'
    );

    const caesAdotados = caes.filter(cao => cao.status === 'Adotado');

    const [caoAdd, setCaoAdd] = useState(false);
    const [caoDetalhe, setCaoDetalhe] = useState(null);
    const [caoEditar, setCaoEditar] = useState(null);
    const [caoExcluir, setCaoExcluir] = useState(null);

    const [form, setForm] = useState({
        nome: '',
        idade: '',
        raca: '',
        local: '',
        descricao: '',
        img: '',
        status: ''
    });

    function alterarFormAdicionar(e) {
        const { name, value, files } = e.target;
        if (name === 'img' && files.length > 0) {                                                       // verifica campo imagem
            setForm({ ...form, img: URL.createObjectURL(files[0])});                                   // cria url temporaria
        } else {
            setForm({ ...form, [name]: value });                                                        // atualiza o estado do form
        }
    }

    function aoSubmitAdicionar(e) {
        e.preventDefault();

        setCaes([...caes, form]);                                                                       // adiciona cachorro novo no fim do array
        setCaoAdd(false);                                                                               // fecha popup
        setForm({nome: '', idade: '', raca: '', local: '', descricao: '', img: '', status: ''});        // limpa form
    }

    function alterarFormEditar(e) {
        const { name, value, files } = e.target;
        if (name === 'img' && files.length > 0) {                                                       // verifica campo imagem
            setCaoEditar({ ...caoEditar, img: URL.createObjectURL(files[0]) });                         // cria url temporaria
        } else {
            setCaoEditar({ ...caoEditar, [name]: value });                                              // atualiza o estado do cachorro a ser editado
        }
    }

    function aoSubmitEditar(e) {
        e.preventDefault();
        setCaes(caes.map(cao => cao.nome === caoEditar.nome ? caoEditar : cao));                        // atualiza o cachorro editado no array
        setCaoEditar(null);                                                                             // fecha popup de edição
    }



    return (
        <>
        <Navbar />

        <div className='index'>
            <br/>
            <div className='divTabela'> {/* tabela cachorros disponiveis */}
                <div className='divCabecalho'>
                    <h1 className='tituloTabela'>Cachorros Disponíveis</h1>
                    <input
                        type='text'
                        className='inputPesquisa'
                        placeholder='Nome do cachorro...'
                        value={filtroNome}
                        onChange={e => setFiltroNome(e.target.value)}
                    />
                    <button
                        className='btnAdicionar'
                        onClick={() => setCaoAdd(true)}
                    >
                        +
                    </button>

                
                </div>
                <div className='divCachorros'>
                    {caesFiltrados.length === 0 ? (
                        <img src='/src/assets/index/icons/logoVazia.png' className='imgVazio' alt='Nenhum cachorro adotado.'/>
                    ) : (
                        caesFiltrados.map((cao) => (
                        <Card
                            key={cao.nome}
                            img={cao.img}
                            nome={cao.nome}
                            descricao={cao.descricao}
                            status={cao.status}
                            onDetalhes={() => setCaoDetalhe(cao)}
                            onEditar={() => setCaoEditar(cao)}
                            onExcluir={() => setCaoExcluir(cao)}
                        />
                    )))}
                </div>
            </div>

            <br/><br/>

            <div className='divTabela'> {/* tabela cachorros adotados */}
                <div className='divCabecalho'>
                    <h1 className='tituloTabela'>Cachorros Adotados</h1>
                </div>
                <div className='divCachorros'>
                    {caesAdotados.length === 0 ? (
                        <img src='/src/assets/index/icons/logoVazia.png' className='imgVazio' alt='Nenhum cachorro adotado.'/>
                    ) : (
                        caesAdotados.map((cao) => (
                        <Card
                            key={cao.nome}
                            img={cao.img}
                            nome={cao.nome}
                            descricao={cao.descricao}
                            status={cao.status}
                            onDetalhes={() => setCaoDetalhe(cao)}
                            onEditar={() => setCaoEditar(cao)}
                            onExcluir={() => setCaoExcluir(cao)}
                        />
                    )))}
                </div>
            </div>

            {caoAdd && (
                <div className='popupOverlay'>
                    <div className='popupBody'>
                        <div className='divCabecalhoPopup'>
                            <h2>Cadastrar cachorro</h2>
                            <button className='botaoFecharPopup' onClick={() => setCaoAdd(false)}>×</button>
                        </div>
                        <form action='' className='addCachorro' onSubmit={aoSubmitAdicionar}>
                            <p>Nome:</p>
                            <input type='text' name='nome' value={form.nome} onChange={alterarFormAdicionar} required />
                            <p>Idade:</p>
                            <input type='text' name='idade' value={form.idade} onChange={alterarFormAdicionar} required />
                            <p>Raça:</p>
                            <input type='text' name='raca' value={form.raca} onChange={alterarFormAdicionar} required />
                            <p>Local:</p>
                            <input type='text' name='local' value={form.local} onChange={alterarFormAdicionar} required />
                            <p>Descrição:</p>
                            <input type='text' name='descricao' value={form.descricao} onChange={alterarFormAdicionar}/>
                            <p>Imagem:</p>
                            <input type='file' name='img' accept='image/*' onChange={alterarFormAdicionar} />
                            <p>Status:</p>
                            <select name='status' value={form.status} onChange={alterarFormAdicionar} required>
                                <option value=''>Selecione o status</option>
                                <option value='No Veterinário'>No Veterinário</option>
                                <option value='No Petshop'>No Petshop</option>
                                <option value='No Abrigo'>No Abrigo</option>
                                <option value='Adotado'>Adotado</option>
                            </select>
                            <br/>
                            <br/>
                            <button type='submit'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            )}

            {caoDetalhe && (
                <div className='popupOverlay'>
                    <div className='popupBody'>
                        <div className='divCabecalhoPopup'>
                            <h2>{caoDetalhe.nome}</h2>
                            <button className='botaoFecharPopup' onClick={() => setCaoDetalhe(null)}>×</button>
                        </div>
                        <div className='detalhesBody'>
                            {caoDetalhe.img ? (
                                <img src={caoDetalhe.img} alt={caoDetalhe.nome}/>)
                                : <img src='/src/assets/index/icons/imagemVazia.png' alt='Imagem do cachorro' />}
                            <div className='detalhesBodyInfo'>
                                <b>Idade:</b>
                                <p>{caoDetalhe.idade}</p>
                                <b>Raça:</b>
                                <p>{caoDetalhe.raca}</p>
                                <b>Local:</b>
                                <p>{caoDetalhe.local}</p>
                                <b>Descrição:</b>
                                <p>{caoDetalhe.descricao}</p>
                                <b>Status:</b>
                                <p>{caoDetalhe.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {caoEditar && (
                <div className='popupOverlay'>
                    <div className='popupBody'>
                        <div className='divCabecalhoPopup'>
                            <h2>Editar informações</h2>
                            <button className='botaoFecharPopup' onClick={() => setCaoEditar(null)}>×</button>
                        </div>
                        <form action='' className='addCachorro' onSubmit={aoSubmitEditar}>
                            <p>Nome:</p>
                            <input type='text' name='nome' value={caoEditar.nome} onChange={alterarFormEditar} disabled />
                            <p>Idade:</p>
                            <input type='text' name='idade' value={caoEditar.idade} onChange={alterarFormEditar} required />
                            <p>Raça:</p>
                            <input type='text' name='raca' value={caoEditar.raca} onChange={alterarFormEditar} required />
                            <p>Local:</p>
                            <input type='text' name='local' value={caoEditar.local} onChange={alterarFormEditar} required />
                            <p>Descrição:</p>
                            <input type='text' name='descricao' value={caoEditar.descricao} onChange={alterarFormEditar}/>
                            <p>Imagem:</p>
                            <input type='file' name='img' accept='image/*' onChange={alterarFormEditar} />
                            <p>Status:</p>
                            <select name='status' value={caoEditar.status} onChange={alterarFormEditar} required>
                                <option value=''>Selecione o status</option>
                                <option value='No Veterinário'>No Veterinário</option>
                                <option value='No Petshop'>No Petshop</option>
                                <option value='No Abrigo'>No Abrigo</option>
                                <option value='Adotado'>Adotado</option>
                            </select>
                            <br/>
                            <br/>
                            <button type='submit'>Alterar</button>
                        </form>
                    </div>
                </div>
            )}

            {caoExcluir && (
                <div className='popupOverlay'>
                    <div className='popupBody'>
                        <div className='divCabecalhoPopup'>
                            <h2>{caoExcluir.nome}</h2>
                        </div>
                        <div className='popupExcluirConteudo'>
                        <p><b>Tem certeza que deseja excluir esse cãozinho?</b><br/>
                        Essa ação não pode ser desfeita.</p>
                        </div>
                        <div className='popupExcluirBotoes'>
                        <button className='btnCancelar' onClick={() => setCaoExcluir(null)}>Cancelar</button>
                        <button className='btnExcluirPopup' onClick={() => {
                            setCaes(caes.filter(cao => cao.nome !== caoExcluir.nome));
                            setCaoExcluir(null);
                        }}>Excluir</button>
                        
                        </div>
                    </div>
                </div>
            )}

        </div>

    </>)

}


