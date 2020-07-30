import React from 'react';
import './SectionT.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { motion } from "framer-motion";



export const SectionT = () => {
    const info = [
        { pic: "https://smartmockups-web-assets.imgix.net/hp-hero-laptop-hover.jpg?w=500&h=340&auto=format,compress&fit=crop", que: "Pakistan", desc: "this is our country" },
        { pic: "https://picjumbo.com/wp-content/uploads/DSC03137-2210x1473.jpg", que: "Computer", desc: "this is our computer" },
        { pic: "https://picjumbo.com/wp-content/uploads/DSC06796-2210x1473.jpg", que: "Software", desc: "this is our software" },
        { pic: "https://picjumbo.com/wp-content/uploads/coffee-laptop-business-work-still-life-2210x1473.jpg", que: "System", desc: "pakistan is our system" }
    ];

    const randercard = (cr, index) => {
        return (
            <motion.Card style={{ width: '18rem' }} key={index} className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.9 }}>
                <Card.Img variant="top"  src={cr.pic} />
                <Card.Body>
                    <Card.Title>{cr.que}</Card.Title>
                    <Card.Text>{cr.desc}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </motion.Card>
        )
    }

    return (
        <div className="grid" style={{ backgroundColor: '#36cadb' }}>
            

            {info.map(randercard)}

        </div>
    );
}





