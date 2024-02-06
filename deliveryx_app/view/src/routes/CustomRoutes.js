import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import PrivateRoute from '../routes/PrivateRoute'

// Páginas
import MainLandingPage from '../pages/MainLandingPage'

import SolicitacaoPacote from '../pages/Usuario/SolicitacaoPacote'
import ConsultaPedido from '../pages/Usuario/ConsultaPedido'
import RelatorioUsuario from '../pages/Usuario/RelatorioUsuario'

// páginas do Usuário
import LoginUsuario from '../pages/Usuario/Login'
import SignUpUsuario from '../pages/Usuario/SignUp'
import MenuUsuario from '../pages/Usuario/Menu'
import ConsultarTodos from '../pages/Usuario/ConsultarTodos'

// páginas do Gerenciador
import LoginAdmin from '../pages/Gerenciador/Login'
import SignUpAdmin from '../pages/Gerenciador/SignUp'
import MenuAdmin from '../pages/Gerenciador/Menu'
import CriarRota from '../pages/Gerenciador/CriarRota'
import VerificarPedido from '../pages/Gerenciador/VerificarPedido'
import AtribuirRota from '../pages/Gerenciador/AtribuirRota'
import ConsultarTodosFilial from '../pages/Gerenciador/ConsultarTodosFilial'

// páginas do Entregador
import LoginEntregador from '../pages/Entregador/Login'
import SignUpEntregador from '../pages/Entregador/SignUp'
import EscolherRota from '../pages/Entregador/EscolherRota'
import MenuEntregador from '../pages/Entregador/Menu'
import VisualizarRota from '../pages/Entregador/VisualizarRota'

function CustomRoutes() {
  return (
    <Routes>
      {/* Geral */}
      <Route path='/' element={<MainLandingPage />} />

      {/* Usuario */}
      <Route path='/login' element={<LoginUsuario />} />
      <Route path='/signUp' element={<SignUpUsuario />} />
      <Route path='/solicitacao' element={
        <PrivateRoute type='usuario'>
          <SolicitacaoPacote />
        </PrivateRoute>
      } />
      <Route path='/rastrear' element={
        <PrivateRoute type='usuario'>
          <ConsultaPedido />
        </PrivateRoute>
      } />
      <Route path='/menuUsuario' element={
        <PrivateRoute type='usuario'>
          <MenuUsuario />
        </PrivateRoute>
      } />
      <Route path='/consultar' element={
        <PrivateRoute type='usuario'>
          <ConsultarTodos />
        </PrivateRoute>
      } />
      <Route path='/relatorioUsuario' element={
        <PrivateRoute type='usuario'>
          <RelatorioUsuario />
        </PrivateRoute>
      } />
      {/* Gerenciador */}
      <Route path='/loginAdmin' element={<LoginAdmin />} />
      <Route path='/signUpAdmin' element={<SignUpAdmin />} />
      <Route path='/menuAdmin' element={
        <MenuAdmin />
      } />
      <Route path='/criarRota' element={<CriarRota />} />
      <Route path='/verificar' element={<VerificarPedido />} />
      <Route path='/atribuir' element={<AtribuirRota />} />
      <Route path='/consultarFilial' element={
        <PrivateRoute type='usuario'>
          <ConsultarTodosFilial />
        </PrivateRoute>
      } />

      {/* Entregador */}
      <Route path='/loginCourier' element={<LoginEntregador />} />
      <Route path='/signUpCourier' element={<SignUpEntregador />} />
      <Route path='/menuCourier' element={<MenuEntregador />} />
      <Route path='/escolher' element={
        <PrivateRoute type='entregador'>
          <EscolherRota />
        </PrivateRoute>
      } />
      <Route path='/visualizar' element={
        <PrivateRoute type='entregador'>
          <VisualizarRota />
        </PrivateRoute>
      } />

    </Routes>
  )
}

export default CustomRoutes