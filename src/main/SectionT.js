import React from 'react'
import './SectionT.css'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



const SectionT = () => {
    const cardInfo = [
        { image: "https://smartmockups-web-assets.imgix.net/hp-hero-laptop-hover.jpg?w=500&h=340&auto=format,compress&fit=crop", title: "Pakistan", text: "this is our country" },
        { image: "https://picjumbo.com/wp-content/uploads/DSC03137-2210x1473.jpg", title: "Pakistan", text: "this is our country" },
        { image: "https://picjumbo.com/wp-content/uploads/DSC06796-2210x1473.jpg", title: "Pakistan", text: "this is our country" },
        {image: "https://picjumbo.com/wp-content/uploads/coffee-laptop-business-work-still-life-2210x1473.jpg", title: "paksitan", text: "pakistan is our country"}
    ];

    const randerCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="grid" style={{ backgroundColor: '#36cadb' }}>
            <h1>Our Services </h1>

            {cardInfo.map(randerCard)}

        </div>
    )
}

export default SectionT
