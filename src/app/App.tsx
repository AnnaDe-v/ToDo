import React from "react";
import "./App.css";
import { TodolistsList } from "../features/TodolistsList/TodolistsList";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./store";
import { RequestStatusType } from "./app-reducer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import { Menu } from "@mui/icons-material";
import { ErrorSnackbar } from "../components/ErrorSnackbar/ErrorSnackbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../features/Login/Login";

type PropsType = {
  demo?: boolean;
};

function App({ demo = false }: PropsType) {
  const status = useSelector<AppRootStateType, RequestStatusType>(
    (state) => state.app.status
  );
  return (
    <BrowserRouter>
      <div className="App">
        <ErrorSnackbar />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">
              <a href="/ToDo/login">Login</a>
            </Button>
          </Toolbar>
          {status === "loading" && <LinearProgress />}
        </AppBar>

        <Container fixed>
          <Routes>
            <Route path="/ToDo/" element={<TodolistsList demo={demo} />} />
            <Route path="ToDo/login" element={<Login />} />
            <Route
              path="ToDo/404"
              element={
                <h1 style={{ textAlign: "center" }}>404: page not founded</h1>
              }
            />
            <Route path="*" element={<Navigate to={"404"} />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
