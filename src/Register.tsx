import { Typography, TextField, Avatar, Button, Container, CircularProgress } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase/config';

export default function Register({
    user,
    setUser
}: {
    user: any,
    setUser: any
}) {

    let [email, setEmail] = useState("");
    let [pass, setPassword] = useState("")
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)

    let navigate = useNavigate()


    useEffect(() => {
        if (user) {
            navigate("../")
        }
    }, [user])



    async function handleLogin(e: any) {
        e.preventDefault();

        // try {
        //     // Sign in with email and password
        //     setIsLoading(true)
        //     setIsError(false)
        //     await signInWithEmailAndPassword(auth, email, pass);
        //     console.log('Login successful!');
        //     setIsLoading(false)
        // } catch (error: any) {
        //     console.error('Error signing in:', error.message);
        //     setIsError(true)
        //     setIsLoading(true)

        // }

        if (email == "abdu_nti" && pass == "123456") {
            setIsError(false)
            setUser(true)
        } else {
            setIsError(true)
        }


    }


    return (
        <Container style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} maxWidth="xs">
            <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar style={{ backgroundColor: '#f50057' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{ margin: '16px 0' }}>
                    Sign in
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        error={isError}
                        helperText={isError ? "invalid-Email" : ""}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        required
                        helperText={isError ? "invalid-Password" : ""}
                        error={isError}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={pass}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ margin: '16px 0' }}
                    >
                        {"Sign In"}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}
