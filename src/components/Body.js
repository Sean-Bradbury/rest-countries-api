import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ponter;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    border: none;
    &:focus {
        outline: none;
    }
    transition: 0.5s all ease;
`;

function Body(props){
    return (
            <Main id="main" className="main">
            </Main>
        )
}


export default Body;