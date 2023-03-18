import { Container } from '@mui/material';
import React from 'react'
import StatCard from '../card/StateCard';
import MainTable from '../table/MainTable'

const Home = () => {
    const tableHead = ['Image', 'Name', 'Revenue', 'Stock Status', 'Action'];
    const productList = [
      {
        imgUrl: './assets/headphone-2.jpg',
        name: 'headphone-2',
        price: 100,
        available: 15,
      },
      {
        imgUrl: './assets/iphone-2.jpg',
        name: 'iPhone x1',
        price: 1900,
        available: 35,
      },
      {
        imgUrl: './assets/iphone-1.jpg',
        name: 'iPhone x2',
        price: 100,
        available: 0,
      },
    ];
  return (
    <>
       <h1>Home</h1>
       <Container>

       <StatCard />
       </Container>
       <MainTable
     title="All products"
     tableHead={tableHead}
     list={productList}
     edit={'/products/editProduct'}
     show={'/products/product1'}/>
    </>
  )
}

export default Home