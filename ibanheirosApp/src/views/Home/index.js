import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'



const Home = (props) => {
  console.log(props)
  return (
    <View>
      <Text>Teste</Text>
    </View>
  )
}

const mapStateToProps = state => ({
  banheiros: state.banheiro.banheiros
})

export default connect(mapStateToProps)(Home)