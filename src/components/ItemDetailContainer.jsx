// components/ItemDetailContainer.jsx
// components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

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
