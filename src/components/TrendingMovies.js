import React, {useEffect, useState} from 'react';
import {Card, Button, Alert, Container, Row, Col} from 'react-bootstrap';

import axios from "axios";


export default function Dashboard() {
    const [error, setError] = useState('');
    const [trendingMovies, setTrendingMovies] = useState([])


    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=acb1f7cc631280f76384d486fc592d60`)
            .then(res => {
                console.log(res.data.results);
                setTrendingMovies(res.data.results);

            })
    }, [])
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
                                <Button variant="primary" className={'mr-2'}>Details</Button>
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


        </>
    )
}
