import './App.css'
import { Add } from './context/Add';
import { Home } from './context/Home';

//import { ThemeContext } from './context/theme'

function App() {  

  // const p=useContext(ThemeContext)
  // console.log(p,"theme is coming soon");

  // const {theme,setTheme}=useContext(ThemeContext)
  // console.log(theme,"theme is coming soon");

  return (
    <>
    {/*   
     <h1>{theme}</h1>
    <button onClick={()=>{setTheme("black")}}>theme</button>
     */}
    <Add/>
    <Home/>

    </>
  )
}

export default App
