import React,{ useState } from 'react';

export const GlobalContext = React.createContext()


export const GlobalProvider = (props) => {
  const [hide,setHide] = useState(false)
  const [newPosition,setNewPosition] = useState(-250)
  return(
    <GlobalContext.Provider value={{ hide, setHide, newPosition, setNewPosition }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
