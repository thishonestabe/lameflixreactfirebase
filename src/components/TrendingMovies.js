import React, {useEffect, useState} from 'react';
import {Card, Button, Alert, Container, Row, Col, Modal} from 'react-bootstrap';
import MovieProvider, {useMovie} from "../contexts/MovieContext";
import axios from "axios";


export default function Dashboard() {
    const [error, setError] = useState('');
    //const [trendingMovies, setTrendingMovies] = useState([])
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({title: '', description: ''})
    const { trendingMovies } = useMovie();
    const handleShow = (t, d) => {
        setModalInfo({title: t, description: d})
        return setShow(true)
    };
    const handleClose = () => setShow(false);


    let movieCards = trendingMovies.map((m,i) => {
            return (
                <Col xs={12} md={6} lg={3} className={'mb-4'}>
                    <Card key={m.id} >
                        <Card.Img style={{height: '300px'}} variant="top" src={'https://image.tmdb.org/t/p/w300/' + m['poster_path']} />
                        <Card.Body>
                            <Container className={'align-items-center text-center'}>
                                <Card.Title style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{m.title}</Card.Title>
                                <Card.Text>
                                    Release Date: {m['release_date']}
                                    <br/>
                                    Score: {m['vote_average']}
                                </Card.Text>
                                <Button variant="primary" className={'mr-2'} onClick={() => handleShow(m.title, m.overview)}>Details</Button>
                                <Button variant="danger">Rent</Button>
                            </Container>

                        </Card.Body>
                    </Card>

                </Col>
            )
        })



    return (
        <>

            <Container fluid>
                <Row>
                    {movieCards}
                </Row>

            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalInfo.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Rent
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}
