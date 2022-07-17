import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem } from '@mui/material'

const Header = () => {
  return (
    <>
<AppBar color='transparent' position='static' className='rounded-xl'> 
   <Container>
    <Toolbar>
        <Typography className='px-2 text-xl text-gradient bg-gradient-to-tr from-cyan-500 to-blue-500 font-bold cursor-pointer flex-1'>CryptoWatch</Typography>
        <Select variant='outlined' className='w-24 h-10 mr-4 text-white'>
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

export default Header