import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from './Heading';
import Body from './Body';

function App() {
    return (
        <Container fluid>
            <Heading />
            <Body />
        </Container>
    );
}

export default App;