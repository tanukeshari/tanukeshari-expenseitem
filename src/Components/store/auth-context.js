import React, {useState, useEffect} from 'react';

const AuthContext =React.createContext({
    isLoggedIn: false,
    onLogout: (email,password)=>{}
});


const AuthContextProvider =(props) =>{
const [isLoggedIn,setIsLoggedIn]=useState(false);

useEffect(()=>{
    const StoredUserLoggedInformation = localStorage.getItem('isLoggedIn');
    
    if(StoredUserLoggedInformation === '1'){
        setIsLoggedIn(true);
    }    

},[])
    return (
    <AuthContext.Provider
    value={{
        isLoggedIn:isLoggedIn,
        
    }}>
        {props.children}
        </AuthContext.Provider>
)}


export default AuthContext;
