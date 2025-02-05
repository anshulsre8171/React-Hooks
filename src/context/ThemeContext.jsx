import { createContext, useState } from "react";
export const ThemeContext = createContext()


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('')
    const [data,setData]=useState(" ")

    return (<>

        <ThemeContext.Provider value={{ theme, setTheme ,data,setData}}>
            <h1>Theme content</h1>
            {children}
        </ThemeContext.Provider>

    </>)

}