import React, { useState } from 'react'

import './index.css'

import { Card } from './card/card.jsx'

export function Index() {
    const [caes, setCaes] = useState([
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
        }
    ]);

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
        if (name === 'img' && files.length > 0) { // verifica campo imagem
            setForm({ ...form, img: URL.createObjectURL(files[0]) }); // cria url temporaria
        } else {
            setForm({ ...form, [name]: value }); // atualiza o estado do form
        }
    }

    function aoSubmit(e) {
        e.preventDefault();

        setCaes([...caes, form]); // adiciona cachorro novo ao array
        setMostrarPopup(false); // fecha popup
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
                    />
                    <button
                        className='btnAdicionar'
                        onClick={() => setMostrarPopup(true)}
                    >
                        +
                    </button>

                        
                </div>
                <div className="divCachorros">
                    {caes.map((cao) => (
                        <Card
                            img={cao.img}
                            nome={cao.nome}
                            descricao={cao.descricao}
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

        </div>

    )

}