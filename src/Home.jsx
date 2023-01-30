import React from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import ProductList from './components/ProductList'

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          paddingTop: '100px'
        }}
      >
        <ProductList />
      </Box>
    </Container>
  )
}

export default Home