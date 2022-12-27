import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import LandingScreen from "../landingPage"
import Hero from "../hero";



export const AllRoute = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <LandingScreen />
        },
        {
            path: "/hero",
            element: <Hero />
        }
    ])


    return element;
}
