import React, { useState } from 'react'

import './index.css'

import { Card } from './card/card.jsx'

export function Index() {

    const [caes, setCaes] = useState([
        // alguns cachorrinhos placeholder!
        {
            img: '/src/assets/index/cachorro1.jpeg',
            idade: '2 ano',
            raca: 'Pastor Alemão',
            nome: 'Ringo',
            descricao: 'Esse é o Ringo, ele é muito legal e adora brincar!'
        },
        {
            img: '/src/assets/index/cachorro2.jpg',
            idade: '1 ano',
            raca: 'Chihuahua',
            nome: 'Rei Henrique VIII',
            descricao: 'Esse é o Rei Henrique VIII, ele é muito carinhoso e adora passear!'
        },
        {
            img: '/src/assets/index/cachorro3.png',
            idade: '3 meses',
            raca: 'Vira-lata',
            nome: 'Wilsinho',
            descricao: 'Esse é o Wilsinho, ele é muito esperto e adora aprender novos truques!'
        },
        {
            img: '/src/assets/index/cachorro4.jpg',
            idade: '33 anos',
            raca: 'Developer',
            nome: 'Toby',
            descricao: 'Esse é o Toby, ele adora programar e compor músicas!'
        }
    ]);

    const [filtroNome, setFiltroNome] = useState('');

    const [caoDetalhe, setCaoDetalhe] = useState(null);

    const caesFiltrados = caes.filter(cao =>
        cao.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );

    const [mostrarPopup, setMostrarPopup] = useState(false);

    const [form, setForm] = useState({
        nome: '',
        idade: '',
        raca: '',
        descricao: '',
        img: ''
    });

    function alterarForm(e) {
        const { name, value, files } = e.target;
        if (name === 'img' && files.length > 0) {                           // verifica campo imagem
            setForm({ ...form, img: URL.createObjectURL(files[0]) });       // cria url temporaria
        } else {
            setForm({ ...form, [name]: value });                            // atualiza o estado do form
        }
    }

    function aoSubmit(e) {
        e.preventDefault();

        setCaes([...caes, form]);                                           // adiciona cachorro novo no fim do array
        setMostrarPopup(false);                                             // fecha popup
        setForm({ nome: '', idade: '', raca: '', descricao: '', img: '' }); // limpa form
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
                        onClick={() => setMostrarPopup(true)}
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
                            onDetalhes={() => setCaoDetalhe(cao)}
                        />
                    ))}
                </div>
            </div>

            {mostrarPopup && (
                <div className="popupOverlay">
                    <div className="popupBody">
                        <div className="divCabecalhoPopup">
                            <h2>Cadastrar cachorro</h2>
                            <button className="botaoFecharPopup" onClick={() => setMostrarPopup(false)}>X</button>
                        </div>
                        <form action="" className='addCachorro' onSubmit={aoSubmit}>
                            <p>Nome:</p>
                            <input type="text" name="nome" value={form.nome} onChange={alterarForm} required />
                            <p>Idade:</p>
                            <input type="text" name="idade" value={form.idade} onChange={alterarForm} required />
                            <p>Raça:</p>
                            <input type="text" name="raca" value={form.raca} onChange={alterarForm} required />
                            <p>Descrição:</p>
                            <input type="text" name="descricao" value={form.descricao} onChange={alterarForm} required />
                            <p>Imagem:</p>
                            <input type="file" name="img" accept="image/*" onChange={alterarForm} />
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
                                <p><b>Idade:</b> {caoDetalhe.idade}</p>
                                <p><b>Raça:</b> {caoDetalhe.raca}</p>
                                <p><b>Descrição:</b> {caoDetalhe.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    )

}