import React from 'react'
import styled from 'styled-components/native'
import BanheiroItem from './BanheiroItem'

const Lista = styled.View`
  padding: 10px;
`

const ListaTitulo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

const ListaTituloText = styled.Text`
  font-weight: bold;
  font-size: 25px;
`
const ListaVerTudoButton = styled.TouchableOpacity``

const ListaVerTudoButtonText = styled.Text`
  color: orange;
  font-weight: bold;
  font-size: 12px;
`

export default ({ banheiros }) => {
  return (
    <Lista>
      <ListaTitulo>
        <ListaTituloText>
          Próximos a você
        </ListaTituloText>
        <ListaVerTudoButton>
          <ListaVerTudoButtonText>
            Ver Tudo
          </ListaVerTudoButtonText>
        </ListaVerTudoButton>
      </ListaTitulo>
      { banheiros.map((banheiro, k) => (
        <BanheiroItem banheiro={banheiro} key={k} />
      )) }
    </Lista>
  )
}