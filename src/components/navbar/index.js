import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Home, ShoppingBag } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const navigate = useNavigate();
    const { cartItems } = useSelector(state => state.cart)
    return (
        <Stack direction={'row'} sx={{ padding: '10px 15px', border: '1px solid black', borderTop: '0' }}>
            <Box sx={{ flex: '1', display: 'flex' }}>
                <IconButton size='large'>
                    <Home onClick={() => navigate('/')} />
                </IconButton>
            </Box>
            <Box sx={{position:'relative'}}>
                <Typography sx={{position:'absolute', right:'8px'}}>{cartItems && cartItems.length}</Typography>
                <IconButton size='large'>
                    <ShoppingBag onClick={() => navigate('/cart')} />
                </IconButton>
            </Box>
        </Stack>
    )
}

export default NavBar