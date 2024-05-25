"use client";

import { verifyRegisterCode} from "@/clients/auth.client";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import {getCookie} from "@/utils/cookies/cookies";
import {useRouter} from "next/navigation";

const RegisterCodePage = () => {
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const code = data.get('code')
        if (typeof code !== 'string') {
            return console.log('code should be string')
        }
        const identifier = await getCookie('identifier')
        if (!identifier && typeof identifier !== 'string') {
            return console.log('identifier should be string')
        }
        const registerVerifyData = {
            identifier, code
        };
        const user = await verifyRegisterCode(registerVerifyData)
        if (user?._id) {
            console.log(user);
            await router.push('/trainers')
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
                        Code
                    </Typography>
                    <Box component="form" onSubmit={(event) => handleSubmit(event)} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="code"
                            label="Code"
                            type="text"
                            id="code"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Verify Code
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>)
}

export default RegisterCodePage;
