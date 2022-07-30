// Regular imports 

import React, { useContext, useState, useEffect } from 'react'
import { createContext } from 'react'

// Import Components




// Create functions

const Crypto = createContext()


// Default export 

const CryptoContext = ({ children }) => {
  
    //states

    const [currency, setCurrency] = useState("USD")
    const [curSym, setCurSym] = useState("U$")

    // useEffect

    useEffect(() => {
        if (currency === "USD") setCurSym("U$");
        else if (currency === "CAD") setCurSym("C$");
        else if (currency === "INR") setCurSym("₹");
        else if (currency === "GBP") setCurSym("£");
        
    },[currency]);

  
    return (
    <Crypto.Provider value={{ currency, curSym, setCurrency }}>
      { children }
    </Crypto.Provider>
  )

  
}

export default CryptoContext

export const CryptoState = () => {
return useContext(Crypto)
};



