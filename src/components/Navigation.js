import React, { useState } from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router";

export default function Navigation() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth()
    const history = useHistory();
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('./login')
        } catch {
            setError('Failed to logout')
        }
    }
    return (
        <>
            <Navbar style={{width: '100vw'}} bg="dark">
                <Navbar.Brand href="#home">
                    <span style={{color: 'red'}}>LAMEFLIX</span>
                </Navbar.Brand>
                <Nav className={'mr-auto'}>
                    <Nav.Link >
                        <Button variant={'link'} onClick={handleLogout}>Log Out</Button>
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{color: 'white'}}>
                        Signed in as: {currentUser.email}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
