// components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const fakeProducts = [
  { id: '1', title: 'Charmander', category: 'fire', description: 'Description 1', price: 100 },
  { id: '2', title: 'Squirtle', category: 'water', description: 'Description 2', price: 200 },
  { id: '3', title: 'Charizard', category: 'fire', description: 'Description 3', price: 300 },
  { id: '4', title: 'Vaporeon', category: 'water', description: 'Elegant water Pokémon', price: 400 },
  { id: '5', title: 'Flareon', category: 'fire', description: 'Fiery evolution of Eevee', price: 450 },
  { id: '6', title: 'Magikarp', category: 'water', description: 'Splash around but evolves!', price: 50 },
  { id: '7', title: 'Gyarados', category: 'water', description: 'Fearsome water dragon Pokémon', price: 600 },
  { id: '8', title: 'Cyndaquil', category: 'fire', description: 'Fire Pokémon with a timid nature', price: 120 },
  { id: '9', title: 'Totodile', category: 'water', description: 'Playful and powerful water Pokémon', price: 220 },
  { id: '10', title: 'Torchic', category: 'fire', description: 'Charming little fire chick', price: 180 },
  { id: '11', title: 'Mudkip', category: 'water', description: 'Water Pokémon with a lovable smile', price: 240 },
  { id: '12', title: 'Litten', category: 'fire', description: 'Cool and fiery feline Pokémon', price: 300 },
  { id: '13', title: 'Popplio', category: 'water', description: 'Playful water seal Pokémon', price: 270 },
  { id: '14', title: 'Growlithe', category: 'fire', description: 'Loyal and brave fire dog', price: 200 },
  { id: '15', title: 'Poliwag', category: 'water', description: 'Tadpole Pokémon with a swirl', price: 90 },
  { id: '16', title: 'Blaziken', category: 'fire', description: 'Powerful fire-fighting Pokémon', price: 500 },
  { id: '17', title: 'Lapras', category: 'water', description: 'Gentle giant water Pokémon', price: 700 },
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
