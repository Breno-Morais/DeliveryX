import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Base from '../../Components/Struct/Base'
import FormRastreio from '../../Components/Input/FormRastreio'
import ProgressBar from '../../Components/Elements/ProgressBar'

function ConsultaPedido() {
    const [idPacote, setIdPacote] = useState(-1)
    const [pacoteInfo, setPacoteInfo] = useState({ nome: '', origem: '', destino: '', atual: '', emRota: false })
    const [progress, setProgress] = useState(0)
    const [etapa, setEtapa] = useState(['hidden','','','',''])

    useEffect(() => {
        //'w-75 p-4'
        let newEtapa = ['hidden', '', '', '', '']
        let newProgress = 0
        if(pacoteInfo.finalizado) // Se a entregue já foi feita
        {
            newEtapa = ['w-75 p-4', '', '', '', 'fw-bold']
            newProgress = 100
        } else if(pacoteInfo.emRota) // Se o pedido já saiu para entregue
        {
            newEtapa = ['w-75 p-4', '', '', 'fw-bold', 'hidden']
            newProgress = 75
        } else if(pacoteInfo.pronto) // Se o pedido foi reconhecido e o pagamento foi feito
        {
            newEtapa = ['w-75 p-4', '', 'fw-bold', 'hidden', 'hidden']
            newProgress = 50
        } else if(pacoteInfo.nome)// Se o pedido pelo site foi feito e está em análise
        {
            newEtapa = ['w-75 p-4', 'fw-bold', 'hidden', 'hidden', 'hidden']
            newProgress = 25
        }

        setProgress(newProgress)
        setEtapa(newEtapa)

    }, [pacoteInfo])

    function handleIdChange(event) {
        // Não aceite Ids negativos
        if (event.target.value >= 0)
            setIdPacote(event.target.value)
    }

    function handleConsulta(event) {
        event.preventDefault() // Não roda o componente novamente, reiniciando os estados
        if (event.target.value === undefined)
            return

        // Faz um request ao server consultando o pacote
        fetch("/consultaPedido?shoppingId=" + idPacote + "&type=track").then(
            response => response.json()
        ).then(
            data => {
                if (data === '[]') {
                    toast.warn('Pedido não Achado')
                    setPacoteInfo({ origem: '', destino: '', atual: '' })
                }
                else {
                    setPacoteInfo(JSON.parse(data))
                }
            }
        )
    }

    return (
        <Base role={'usuario'}>
            <h1 className='display-6 text-center'>Rastrear Pedido</h1>
            <div className='d-flex bg-light rounded'>
                <FormRastreio handleIdChange={handleIdChange} handleConsulta={handleConsulta} idPacote={idPacote} />
                <div className={etapa[0]}>
                    <h4 className='text-center'>Situação atual</h4>
                    <ProgressBar value={progress}/>
                    <div className='d-flex justify-content-around'>
                        <p className={etapa[1]} style={{marginRight: '8px'}}>Solicitação feita</p>
                        <p className={etapa[2]} style={{marginRight: '8px'}}>Solicitação aceita</p>
                        <p className={etapa[3]} style={{marginRight: '8px'}}>Saiu para entrega</p>
                        <p className={etapa[4]} style={{marginRight: '8px'}}>Entregue</p>
                    </div>
                    <div>
                        <h4 style={{marginTop: '5px'}}>Informações</h4>
                        <p style={{marginBottom: '2px'}}>Usuário que enviou: {pacoteInfo.nome}</p>
                        <p style={{marginBottom: '2px'}}>Localização de Origem: {pacoteInfo.origem}</p>
                        <p style={{marginBottom: '2px'}}>Localização de Destino: {pacoteInfo.destino}</p>
                        <p style={{marginBottom: '2px'}}>Localização Atual: {pacoteInfo.atual}</p>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default ConsultaPedido