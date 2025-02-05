import { createContext, useState } from "react";
export const TextContext = createContext();             //use->jaha data set,get karna wha import hoga



export const TextProvider = ({ children }) => {                 // root me import hoga
    const [text, setText] = useState("")

    return (

        <TextContext.Provider value={{ text, setText }}>
            {children}
        </TextContext.Provider>

    )
}