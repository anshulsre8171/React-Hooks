import React from 'react'
import { useContext } from 'react'
import { TextContext } from './textContext'
import { ThemeContext } from './ThemeContext'

export const Add = () => {

  //  const t = useContext(TextContext)
  //  console.log(t, "t me value text context ka");

  const { text, setText } = useContext(TextContext)
 // console.log(text, "usestate me value text ka");

 const {data,setData}=useContext(ThemeContext)

  return (
    <>

      <h1>textcontext:{text}</h1>
      <h1>ThemeContext:{data}</h1>
      <button onClick={() => { setText("hello text") }} >CLICK ME text context</button>
      <button onClick={() => { setData("hello this is black theme") }} >CLICK ME theme context</button>
    </>
  )
}
