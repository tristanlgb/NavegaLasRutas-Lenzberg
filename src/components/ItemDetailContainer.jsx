// components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const fakeProducts = [
  { id: '1', title: 'Charmander', category: 'fire', description: 'Description 1', price: 100 },
  { id: '2', title: 'Squirtle', category: 'water', description: 'Description 2', price: 200 },
  { id: '3', title: 'Charizard', category: 'fire', description: 'Description 3', price: 300 },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeProducts.find((product) => product.id === id));
      }, 500);
    });

    fetchProduct.then((data) => setProduct(data));
  }, [id]);

  return (
    <Container className="mt-5">
      {product ? (
        <Card>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ItemDetailContainer;