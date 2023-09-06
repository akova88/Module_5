import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import { CustomerProvider } from './context/CustomerContext'
import Summary from './pages/Summary'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { listProducts, editProduct, createProduct } from './components/Products'

function App() {
  return (
      <CustomerProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/summary' element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </CustomerProvider>
    //   <div className='App'>
    //     <Admin dataProvider={restProvider('http://localhost:3001')}>
    //         <Resource name='products' 
    //         list={listProducts}
    //         edit={editProduct}
    //         create={createProduct}
    //         />
    //     </Admin>
    // </div>
  )
}

export default App
