import React from "react";

import Card from 'react-bootstrap/Card';
const Footer = () => {
    return (
        <div>
            <Card>
                <Card.Header>Dijkstra algorithm</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">edsger w. dijkstra</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>



        </div>



    );
}

export default Footer;