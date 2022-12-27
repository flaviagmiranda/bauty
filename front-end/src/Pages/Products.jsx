import React, { useState } from 'react';
import Products from '../Components/Products/Products';
import Header from '../Components/Header/Header';

function ProductsPage() {
    const [basket, setBasket] = useState([]);

    return (
        <div className="App">
            <Header />
            <main>
            <Products basket={basket} setBasket={setBasket} />
            </main>
        </div>
    )

}
export default ProductsPage;