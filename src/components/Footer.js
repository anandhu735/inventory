import React from 'react'
import { Button, Card, } from 'react-bootstrap'
function Footer() {
    return (
        <div style={{marginTop:"25%"}}>
            <Card className="text-center">
                <Card.Header>Inventory Management</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Button variant="primary">contact</Button>
                </Card.Body>
                <Card.Footer className="text-muted">information -  support -  domain</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
