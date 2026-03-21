import React,{useState } from "react";
import { AppContext, } from "./Context";



export default function AppState(props){
    const [page , setPage] = useState(0)
    return(
        <AppContext.Provider value={{
          page,
          setPage,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}