import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    const currrentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                <p>Mgv Rentals &copy; {currrentYear} All rights reserved</p>

                </Col>
            </Row>
        </Container>
    </footer>

  )
}

export default Footer
