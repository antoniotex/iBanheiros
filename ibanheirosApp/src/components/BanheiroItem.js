import React from 'react'
import styled from 'styled-components/native'

const Area = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
`

const Imagem = styled.Image`
  width: 35%;
  height: 110px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

const BanheiroInfo = styled.View`
  width: 65%;
  justify-content: space-between;
  padding: 10px;
`

const BanheiroInfoTitulo = styled.Text`
  font-weight: bold;
  font-size: 17px;
`

const BanheiroInfoLikesPreco = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const BanheiroInfoLikes = styled.Text``

const BanheiroInfoPreco = styled.Text``


export default ({ banheiro }) => {
  return (
    <Area>
      <Imagem source={{uri: banheiro.url_imagem }} />
      <BanheiroInfo>
        <BanheiroInfoTitulo>{ banheiro.local }</BanheiroInfoTitulo>
        <BanheiroInfoLikesPreco>
          <BanheiroInfoLikes>258 likes</BanheiroInfoLikes>
          <BanheiroInfoPreco>R$15,00</BanheiroInfoPreco>
        </BanheiroInfoLikesPreco>
      </BanheiroInfo>
    </Area>
  )
}