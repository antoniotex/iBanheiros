import React from 'react'
import { Image, Text } from 'react-native'
import styled from 'styled-components/native'

import { icons, COLORS } from '../constants'

const Area = styled.View`
  background-color: ${COLORS.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  padding: 0px 10px;
`
const Button = styled.TouchableOpacity``

const Icone = styled.Image``

const Input = styled.TextInput`
  flex: 1;
  padding: 15px;
`
export default () => {
  return (
    <Area>
      <Button>
        <Icone source={icons.lupa} />
      </Button>
      <Input placeholder="Buscar Banheiros..." />
      <Button>
        <Icone source={icons.ajustes} />
      </Button>
    </Area>
  )
}