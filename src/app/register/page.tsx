"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {registerByMail} from "@/clients/auth.client";
import {createCookie} from "@/utils/cookies/cookies";
import {useRouter} from "next/navigation";


const RegisterPage: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const username = data.get('username')
        if (typeof email !== 'string') {
            return console.log('email should be string')
        }
        if (typeof username !== 'string') {
            return console.log('username should be string')
        }
        await createCookie('identifier', email);
        const registerData = {
            email, username
        };
        const response = await registerByMail(registerData)
        if (response.status === 'success') {
            console.log(response);
            await router.push('/register/code')
        }
    };

    return (
        <>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={(event) => handleSubmit(event)} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="User Name"
                            type="text"
                            id="username"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>

    );

}

export default RegisterPage;
