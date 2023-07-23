import React,{useState, createContext} from 'react'

const MovieItem = React.createContext();

const ProfileContext = (props)=>{
    const [profile,setProfile] = useState([])

    return(
        <MovieItem.Provider value={{profile:profile,setProfile:setProfile}}>
            {props.children}
        </MovieItem.Provider>
    )
}

export { ProfileContext,MovieItem};