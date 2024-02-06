module.exports = {
    adaptPacoteToShipping,
    adaptShippingToPacote,
    adaptUser
}

function adaptPacoteToShipping(pacote){
    return {
        Location_destiny_id: pacote.destino.id, 
        Location_origin_id: pacote.origem.id, 
        Location_current_id: pacote.origem.id, 
        User_id: pacote.id,  
        Package_Weight: pacote.peso, 
        Package_Height: pacote.altura, 
        Package_Depth: pacote.comprimento,  
        Package_Width: pacote.largura, 
        Package_Price: pacote.preco, 
        Ready_to_deliver: pacote.ready,
        Finished: pacote.entregue,
        Recipient_Email: '\'' + pacote.emailDestinatario + '\'',
        Registration_date: '\'' + pacote.dataCadastro + '\''
    }
}

function adaptShippingToPacote(shipping, type){
    switch(type)
    {
        case 'track':
            return {
                nome: shipping.user_name,
                destino: shipping.destiny_name,
                origem: shipping.origin_name,
                atual: shipping.current_name,
                finalizado: shipping.finished,
                pronto: shipping.ready_to_deliver,
                emRota: shipping.emRota
            }

        case 'inspection':
            return {
                destino : {nome: shipping.destiny_location_name},
                origem: {nome: shipping.origin_location_name},
                email: shipping.email,
                preco: shipping.package_price,
                peso: shipping.package_weight,
                comprimento: shipping.package_depth,
                largura: shipping.package_width,
                altura: shipping.package_height,
                id: shipping.shipping_id,
                emailDestinatario: shipping.recipient_email
            }
        
        case 'route':
            return {
                idOrigem: shipping.location_origin_id,
                idDestino: shipping.location_destiny_id,
                id: shipping.shipping_id
            }
        
        case 'query':
            return {
                peso: shipping.package_weight,
                comprimento: shipping.package_depth,
                largura: shipping.package_width,
                altura: shipping.package_height,
                dataCadastro: shipping.registration_date,
                filial: shipping.location_name,
                dataEntrega: shipping.receive_date
            }
    }

}


// Transforma os dados do usuário vindos do banco de dados para uma estrutura padrão ao backend
function adaptUser(user)
{   
    if(user === undefined)
        return {}
    
    let type
    switch(user.user_type){
        case 1:
            type = 'admin'
            break;
        case 2:
            type = 'usuario'
            break;
        case 3:
            type = 'entregador'
            break;
    }

    return {
        id: user.user_id,
        name: user.user_name,
        CPF: user.cpf,
        email: user.email,
        password: user.user_password, // Sempre criptografado
        telephone: user.phone_number,
        role: type
    }
}