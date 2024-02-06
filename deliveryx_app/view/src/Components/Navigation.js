import React from 'react'
import { Row } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button } from "@mui/material"

// componente da barra de navegacao
function Navigation() {
  // Variavel usada para navegar entre telas, coloque navigate('path') para ir ao route com tal path
  const navigate = useNavigate();

  return (
    <div>
      <Row>
        <Box sx={{
          width: '100%',
          height: '76px',
          bgcolor: 'gold',
          justifyContent: 'space-around',
        }}>
          <img src="DeliveryX.png" alt="DeliveryX" style={{ marginTop:"10px", display: 'inline-block', width:"600px", height:"60px" }}/>
          <Avatar
            sx={{
              bgcolor: "blueviolet",
              width: "56px",
              height: "56px",
              float: "right",
              marginTop: "10px"
            }}
            onClick={() => { alert("ola") }} // mudar para um menuzinho com logout e abrir o menu e tals
            alt="Deliveryx Logo" // quando não tiver nenhuma foto, usar as letras das iniciais
            src="./img.jpg" // quando existir alguma foto
          />
        </Box>
      </Row>
      <Row>
        <Box sx={{
          width: '100%',
          height: '38px',
          bgcolor: 'goldenrod',
          justifyContent: 'space-around',
        }}>
          {// trocar esse componente h1 pra imagem da logo dps
          }
          <Button
            variant="transparent"
            onClick={() => { navigate('/') }}
            sx={{ display: 'inline-block' }}
          >
            Solicitar Novo Pacote
          </Button>
          <Button
            variant="transparent"
            onClick={() => { navigate('/rastrear') }}
            sx={{ display: 'inline-block' }}
          >
            Consultar Pedido
          </Button>
        </Box>
      </Row>
    </div>
  )
}

export default Navigation