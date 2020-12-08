import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert, Container} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from  'react-router-dom'
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const {login}  = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value )
            setLoading(false);
            history.push('/')
        } catch {
            setError('Failed to sign in!')
            setLoading(false);
        }


    }
    return (
        <>
            <Container className={"d-flex align-content-center mt-5"}>
                <div className="w100" style={{maxWidth: '100vw'}}>
                <Card>
                    <Card.Body>
                        <h2 className={"text-center mb-4"}>Login</h2>

                        {error && <Alert variant={"danger"}>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id={"email"}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type={"email"} ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id={"password"}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={"password"} ref={passwordRef} required/>
                            </Form.Group>

                            <Button disabled={loading} className={"w-100"} type={"submit"}>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className={"w-100 text-center mt-2"}>
                    Need an Account? <Link to={'/signup'}>Signup</Link>
                </div>
                </div>
            </Container>

        </>
    )
}
