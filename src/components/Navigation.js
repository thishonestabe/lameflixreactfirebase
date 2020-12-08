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
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className={'mr-auto'}>
                    <Nav.Link >
                        <Button variant={'link'} onClick={handleLogout}>Log Out</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>

        </>
    )
}
