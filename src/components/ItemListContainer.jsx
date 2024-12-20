// components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const fakeProducts = [
  { id: '1', title: 'Charmander', category: 'fire', description: 'Description 1', price: 100 },
  { id: '2', title: 'Squirtle', category: 'water', description: 'Description 2', price: 200 },
  { id: '3', title: 'Charizard', category: 'fire', description: 'Description 3', price: 300 },
];

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          resolve(fakeProducts.filter((product) => product.category === category));
        } else {
          resolve(fakeProducts);
        }
      }, 500);
    });

    fetchProducts.then((data) => setProducts(data));
  }, [category]);

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" href={`/product/${product.id}`}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
