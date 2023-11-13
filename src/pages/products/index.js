import React, { useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { callProductListApi, getProducts } from '../../feature/productSlice';
import { addToCart } from '../../feature/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { productList, isLoading } = useSelector(state => state.product);
    const { cartItems } = useSelector(state => state.cart)


    useEffect(() => {
        // call the particular ation
        dispatch(callProductListApi())
    }, [])

    console.log('productList', productList);

    const handleAddToCart = (currentItem) => {
        dispatch(addToCart(currentItem))
    }

    if (isLoading) {
        return (
            <Typography>Loading! Please wait....</Typography>
        )
    }

    return (
        <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '40px' }}>
            {
                productList && productList.length > 0 ?
                    productList.map(item => (
                        <Box key={item.id} sx={{ border: '1px solid #d7cccc', borderRadius: '4px' }}>
                            <Box sx={{ height: '200px', padding: '10px', borderBottom: '1px solid #d7cccc' }}>
                                <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%' }} />
                            </Box>
                            <Box sx={{ display: 'flex', padding: '10px' }}>
                                <Typography sx={{ display: 'flex', flex: '1', color: '#6f6c6c', fontSize: '14px' }}>{item.title}</Typography>
                                <Typography sx={{ color: '#6f6c6c', fontSize: '14px' }}>{item.price}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px' }}>
                                <Typography sx={{ color: '#000', fontSize: '16px', fontWeight: 'bold', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '318px' }}>{item.description}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    sx={{ padding: '8px 25px', border: '1px solid black' }}
                                    onClick={() => handleAddToCart(item)}
                                    disabled={ cartItems && cartItems.length > 0 
                                        ? cartItems
                                        .map(cartitem=>cartitem.id)
                                        .indexOf(item.id) > -1
                                        : false}
                                >
                                    Add To Cart
                                </Button>
                            </Box>
                        </Box>
                    ))
                    : null
            }
            {/* <Typography>Products</Typography> */}
        </Stack>
    )
}

export default Products