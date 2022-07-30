// Regular imports 

import React from 'react'
import Link  from 'next/link'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem } from '@mui/material'


// Import Components
import { CryptoState } from "../components/CryptoContext"



// Header Component 
const Header = () => {

  const { currency, setCurrency } = CryptoState();

  //test change in currency
  // console.log(currency);

  return (
    <>
<AppBar color='transparent' position='static' className='rounded-xl'> 
   <Container>
    <Toolbar>
        <Link href='/'> 
        <a className='px-2 text-lg text-gradient bg-gradient-to-tr from-cyan-500 to-blue-500 font-bold cursor-pointer flex-1'>Crypto Watch</a>
        </Link>
        <Select variant='outlined' className='w-24 h-10 mr-4 text-white'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
        >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'CAD'}>CAD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
            <MenuItem value={'GBP'}>GBP</MenuItem>
        </Select>
    </Toolbar>
   </Container>
</AppBar>
    </>
  )
}


// Exporting Components

export default Header