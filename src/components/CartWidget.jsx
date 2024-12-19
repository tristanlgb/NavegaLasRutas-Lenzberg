import React from 'react';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const CartWidget = () => {
  return (
    <Button variant="outline-primary" className="ms-auto">
      <FaShoppingCart /> Cart
    </Button>
  );
};

export default CartWidget;
