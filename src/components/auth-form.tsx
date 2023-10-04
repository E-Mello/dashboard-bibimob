"use client"

import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { useAtom } from "jotai";

const useStyles = makeStyles((theme) => ({
    button: {
        top: 10,
        right: 10,
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
    },
    form: {
        width: "100%",
        textAlign: "center",
        padding: 15,
    },
}));

export default function AuthForm() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignIn, setIsSignIn] = useState(true);
    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

    const handleToggleSignInUp = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Implemente a lógica de autenticação do Supabase aqui
    };

    return (
        <div className="flex items-center justify-center h-[100vh] bg-gradient-to-b from-yellow-400 to-black">
            <div className="bg-white  transition-shadow p-8 w-[30rem] rounded-lg justify-center flex flex-col text-center">
                <Typography variant="h2" component="h1" gutterBottom>
                    {isSignIn ? "Login" : "Cadastro"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        className={classes.button}
                    >
                        {isSignIn ? "Entrar" : "Cadastrar"}
                    </Button>
                </form>
                <Button
                    variant="outlined"
                    color="primary"
                    className={'bg-blue-500 rounded-lg p-2 text-white'}
                    onClick={handleToggleSignInUp}
                >
                    {isSignIn ? "Criar uma conta" : "Já tem uma conta? Faça login"}
                </Button>
            </div>
        </div>
    );
}
