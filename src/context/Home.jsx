import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Home =()=> {

    const {theme,setTheme}=useContext(ThemeContext)
   // console.log(theme,"theme ka value");
    
    return(<>
    <h1>Theme</h1>
    <h1>{theme}</h1>
    <button onClick={()=>{setTheme("black")}}>click theme</button>
    </>)
}