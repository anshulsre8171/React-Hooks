
import './App.css'
import { useContext } from 'react'
import { TextContext } from './context/textContext'

function App() {

const t=useContext(TextContext)
console.log(t,"context data");

const {text,setText}=useContext(TextContext)
console.log(text,"context data");

  return (
    <>

    <h1>hello</h1>
    <h1>{text}</h1>
    <button onClick={()=>{setText("hello text")}} >CLICK ME</button>
    </>
  )
}

export default App
