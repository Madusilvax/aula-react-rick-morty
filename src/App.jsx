
import './App.css'
import Card from './Card';
function App() {
const item1 ={
  nome: 'Rick Sanchez',
  foto: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
}

const item2 ={
  nome: 'morty Smith',
  foto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
}

const item3 ={
  nome: 'Summer Smith',
  foto: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
}

  return (
    <>
      <Card info={item1} />
      <Card info={item2} />
      <Card info={item3} />
      </>
  )
}

export default App
