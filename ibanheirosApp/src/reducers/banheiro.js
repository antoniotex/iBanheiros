const INITIAL_STATE = {
  modules: [
  { id: 1, local: 'Edificio Menezes Cortes', descricao: 'Segundo andar' },
  { id: 2, local: 'Edificio Menezes Cortes', descricao: 'Segundo andar' },
  { id: 3, local: 'Edificio Menezes Cortes', descricao: 'Segundo andar' },
  { id: 4, local: 'Edificio Menezes Cortes', descricao: 'Segundo andar' },
]}

export default banheiro = (state = INITIAL_STATE, action) => {
  console.log(action)
  if(action.type === 'OBTER_BANHEIROS'){
    return { ...state, activeLesson: action.lesson, activeModule: action.module }
  }
  return state
}