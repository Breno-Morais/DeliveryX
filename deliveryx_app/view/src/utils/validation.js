import { toast } from "react-toastify"

export function validacaoLogin(user) {
  // Tratamento de Erros
  // Campo Vazio
  if (user.email === '' || user.password === '') {
    toast.warn('Preencha todos os campos')
    return false
  }

  if (user.password.length > 50) {
    return false
  }

  return true
}