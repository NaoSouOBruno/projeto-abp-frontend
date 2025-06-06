import React, { useState } from 'react'

import './index.css'

import { Card } from './card/card.jsx'

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
            status: 'No Veterinário'
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
            status: 'No Abrigo'
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

    const [caoDetalhe, setCaoDetalhe] = useState(null);

    const caesFiltrados = caes.filter(cao =>
        cao.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );

    const [caoAdd, setCaoAdd] = useState(false);

    const [form, setForm] = useState({
        nome: '',
        idade: '',
        raca: '',
        local: '',
        descricao: '',
        img: '',
        status: ''
    });

    function alterarForm(e) {
        const { name, value, files } = e.target;
        if (name === 'img' && files.length > 0) {                                                       // verifica campo imagem
            setForm({ ...form, img: URL.createObjectURL(files[0]) });                                   // cria url temporaria
        } else {
            setForm({ ...form, [name]: value });                                                        // atualiza o estado do form
        }
    }

    function aoSubmit(e) {
        e.preventDefault();

        setCaes([...caes, form]);                                                                       // adiciona cachorro novo no fim do array
        setCaoAdd(false);                                                                               // fecha popup
        setForm({nome: '', idade: '', raca: '', local: '', descricao: '', img: '', status: ''});        // limpa form
    }

    return (
        <div className='index'>
            <br/>
            <div className="divTabela">
                <div className='divCabecalho'>
                    <input
                        type="text"
                        className="inputPesquisa"
                        placeholder="Nome do cachorro..."
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
                <div className="divCachorros">
                    {caesFiltrados.map((cao) => (
                        <Card
                            key={cao.nome}
                            img={cao.img}
                            nome={cao.nome}
                            descricao={cao.descricao}
                            status={cao.status}
                            onDetalhes={() => setCaoDetalhe(cao)}
                        />
                    ))}
                </div>
            </div>

            {caoAdd && (
                <div className="popupOverlay">
                    <div className="popupBody">
                        <div className="divCabecalhoPopup">
                            <h2>Cadastrar cachorro</h2>
                            <button className="botaoFecharPopup" onClick={() => setCaoAdd(false)}>X</button>
                        </div>
                        <form action="" className='addCachorro' onSubmit={aoSubmit}>
                            <p>Nome:</p>
                            <input type="text" name="nome" value={form.nome} onChange={alterarForm} required />
                            <p>Idade:</p>
                            <input type="text" name="idade" value={form.idade} onChange={alterarForm} required />
                            <p>Raça:</p>
                            <input type="text" name="raca" value={form.raca} onChange={alterarForm} required />
                            <p>Local:</p>
                            <input type="text" name="local" value={form.local} onChange={alterarForm} required />
                            <p>Descrição:</p>
                            <input type="text" name="descricao" value={form.descricao} onChange={alterarForm} required />
                            <p>Imagem:</p>
                            <input type="file" name="img" accept="image/*" onChange={alterarForm} />
                            <p>Status:</p>
                            <select name="status" value={form.status} onChange={alterarForm} required>
                                <option value="">Selecione o status</option>
                                <option value="No Veterinário">No Veterinário</option>
                                <option value="No Petshop">No Petshop</option>
                                <option value="No Abrigo">No Abrigo</option>
                                <option value="Adotado">Adotado</option>
                            </select>
                            <br/>
                            <br/>
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            )}

            {caoDetalhe && (
                <div className="popupOverlay">
                    <div className="popupBody">
                        <div className="divCabecalhoPopup">
                            <h2>{caoDetalhe.nome}</h2>
                            <button className="botaoFecharPopup" onClick={() => setCaoDetalhe(null)}>X</button>
                        </div>
                        <div className="detalhesBody">
                            <img src={caoDetalhe.img} alt={caoDetalhe.nome}/>
                            <div className="detalhesBodyInfo">
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

        </div>

    )

}