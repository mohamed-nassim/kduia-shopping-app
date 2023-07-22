import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
    <div className="container">
    <div className='row mt-3'>
    <h3>Shopping App</h3>
        <div>
            <CartValue/>
        </div>
        <div>
            <Location/>
        </div>
    </div>
        
        <h3>Shopping Cart</h3>
        <div>
            <ExpenseList/>
        </div>
        <h3>Add Items</h3>
        <div>
            <ItemSelected/>
        </div>
    </div>
    </AppProvider>
  );
}

export default App;
