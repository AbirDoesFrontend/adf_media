import React from 'react'

import { Stack , Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo }  from '../utils/costants';
import  SearchBar  from './SearchBar';


const Navbar = () => (

  <Stack 
    direction="row"
    alignItems="center"
    justifyContent='space-between'
    p={2}
    sx={{
      position : 'sticky' , background : '#000' , top : 0 , justifyContent : 'space-between'
    }}
    position='relative'
  >
    <Link to="/" style={{ display : 'flex' , alignItems : 'center' }}>
      <img src={logo} alt="logo" height={45}/>
    </Link>
    <Stack 
      textTransform='uppercase'
      sx={{
        position :'absolute', pl : 8
      }}
    >
      <Typography style={{ color : 'white' , fontWeight : 'bold' , fontSize : '17px'}}    className='brand'>
        Abir <span style={{ color : '#fc1503' }}>Does</span> Frontend Media
      </Typography>
    </Stack>
    <Stack>
      <SearchBar />
    </Stack>
  </Stack>

);

export default Navbar