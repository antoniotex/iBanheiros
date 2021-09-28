import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Container } from './styles'
import Lista from '../../components/Lista'



const Home = ({ banheiros }) => {
  return (
    <Container>
      <Lista banheiros={banheiros} />
    </Container>
  )
}

const mapStateToProps = state => ({
  banheiros: state.banheiro.banheiros
})

export default connect(mapStateToProps)(Home)