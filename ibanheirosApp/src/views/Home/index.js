import React from 'react'
import { connect } from 'react-redux'
import { Container, Content } from './styles'
import Lista from '../../components/Lista'
import Busca from '../../components/Busca'



const Home = ({ banheiros }) => {
  return (
    <Container>
      <Busca />
      <Content>
        <Lista banheiros={banheiros} />
      </Content>
    </Container>
  )
}

const mapStateToProps = state => ({
  banheiros: state.banheiro.banheiros
})

export default connect(mapStateToProps)(Home)