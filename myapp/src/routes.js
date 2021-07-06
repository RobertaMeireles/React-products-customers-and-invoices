import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'
import Products from './views/Product/Products'
import CreateProduct from './views/Product/CreateProduct'
import UpdateProduct from './views/Product/UpdateProduct'
import DeleteProduct from './views/Product/DeleteProduct'
import Customers from './views/Customer/Customers'
import CreateCustomers from './views/Customer/CreateCustomer'
import UpdateCustomers from './views/Customer/UpdateCustomer'
import DeleteCustomers from './views/Customer/DeleteCustomer'
import Invoices from './views/Invoice/Invoices'
import CreateInvoices from './views/Invoice/CreateInvoice'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/product/create' component={CreateProduct} />
            <Route path='/api/products/update/:id' component={UpdateProduct} />
            <Route path='/product/delete/:id' component={DeleteProduct} />
            <Route path='/customers' component={Customers} />
            <Route path='/customer/create' component={CreateCustomers} />
            <Route path='/customer/update/:id' component={UpdateCustomers} />
            <Route path='/customer/delete/:id' component={DeleteCustomers} />
            <Route path='/invoices' component={Invoices} />
            <Route path='/invoice/create' component={CreateInvoices} />
        </Switch>
    )
}