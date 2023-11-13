import React from 'react';
import {Box, Button, IconButton, Stack, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {Add,Remove} from '@mui/icons-material'
import { addToCart, removeFromCart } from '../../feature/cartSlice';


const Cart = () => {
    const {cartItems} = useSelector(state=>state.cart);
    const { productList } = useSelector(state => state.product);
    const dispatch = useDispatch();
    console.log(cartItems);

    if(cartItems.length===0){
        return <Typography>No Cart items are added...</Typography>
    }
  return (
    <Stack sx={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'40px'}}>
            {
                cartItems && cartItems.length > 0 ?
                    cartItems.map(item => (
                        <Box key={item.id} sx={{border:'1px solid #d7cccc', borderRadius:'4px'}}>
                            <Box sx={{height:'200px', padding:'10px', borderBottom:'1px solid #d7cccc'}}>
                                <img src={item.thumbnail} alt={item.title} style={{width:'100%', height:'100%'}}/>
                            </Box>
                            <Box sx={{display:'flex', padding:'10px'}}>
                                <Typography sx={{display:'flex' ,flex:'1', color:'#6f6c6c', fontSize:'14px'}}>{item.title}</Typography>
                                <Typography sx={{color:'#6f6c6c', fontSize:'14px'}}>{item.price}</Typography>
                            </Box>
                            <Box sx={{padding:'10px'}}>
                                <Typography sx={{color:'#000', fontSize:'16px', fontWeight:'bold', whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden', width:'318px'}}>{item.description}</Typography>
                            </Box>
                            <Box sx={{padding:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <IconButton onClick={()=>dispatch(removeFromCart(item))}><Remove/></IconButton>
                                <Typography>{item.quantity}</Typography>
                                <IconButton onClick={()=>dispatch(addToCart(item))}><Add/></IconButton>
                            </Box>
                        </Box>
                    ))
                    : null
            }
            {/* <Typography>Products</Typography> */}
        </Stack>
  )
}

export default Cart