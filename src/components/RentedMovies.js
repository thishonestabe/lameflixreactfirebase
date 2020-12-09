import React, {useEffect, useState} from 'react';
import {Card, Button, Container, Table} from 'react-bootstrap';
import axios from "axios";
import Navigation from "./Navigation";


export default function Dashboard() {
    const [error, setError] = useState('');









    return (
        <>
            <Navigation/>
            <Container className={'mt-5 text-center'}>
                <h1 className={'mb-5'}>Rented Movies</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Day Rented</th>
                        <th>Due Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>

            </Container>




        </>
    )
}
