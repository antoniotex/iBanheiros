const INITIAL_STATE = {
  banheiros: [
    {
      id: 1,
      local: 'Edificio Menezes Cortes',
      descricao: 'Segundo andar',
      preco: '20,00',
      url_imagem: 'https://www.fraternidadesemfronteiras.org.br/wp-content/uploads/2020/10/reforma-centro-acolhimento-RJ-3.jpg'
    },
    {
      id: 2,
      local: 'Centro Belford Roxo',
      descricao: 'Segundo andar',
      preco: '20,00',
      url_imagem: 'https://www.fraternidadesemfronteiras.org.br/wp-content/uploads/2020/10/reforma-centro-acolhimento-RJ-3.jpg'
    },
    {
      id: 3,
      local: 'CEDAE Nova Iguaçu',
      descricao: 'Segundo andar',
      preco: '20,00',
      url_imagem: 'https://www.fraternidadesemfronteiras.org.br/wp-content/uploads/2020/10/reforma-centro-acolhimento-RJ-3.jpg'
    },
    {
      id: 4,
      local: 'Ponte Rio-Niteroi',
      descricao: 'Segundo andar',
      preco: '20,00',
      url_imagem: 'https://www.fraternidadesemfronteiras.org.br/wp-content/uploads/2020/10/reforma-centro-acolhimento-RJ-3.jpg'
    },
  ]
}

export default banheiro = (state = INITIAL_STATE, action) => {
  console.log(action)
  if(action.type === 'OBTER_BANHEIROS'){
    return { ...state, banheiros: action.banheiros }
  }
  return state
}