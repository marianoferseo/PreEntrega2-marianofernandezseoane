import './ItemCount.css';
import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='container'>
      <div className='counter'>
        <div className='controls'>
          <button className='button' onClick={decrement}>
            -
          </button>
          <h4 className='number'>{quantity}</h4>
          <button className='button' onClick={increment}>
            +
          </button>
        </div>
        <div className='addToCart'>
          <button
            className='button1'
            onClick={() => onAdd(quantity)}
            disabled={!stock}>
            <img className='agregarCarrito' src="data:image/png;base64,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" alt="carrito de compras" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;