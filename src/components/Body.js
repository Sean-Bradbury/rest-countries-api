import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Main = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
`;

const TopSearch = styled.div`
    background-color: ${props => props.theme.headBackground};
    color: ${props => props.theme.titleColor};  
`;

function Body(props){
    return (
            <Main id="main" className="main">
                <div className="container">
                <TopSearch>
                    <form id="top-search" className="top-search">
                        <button className="top-search-button" type="submit"><IoSearch size={20}/></button>                    
                        <input className="top-search-box" type="text" placeholder="search for a country..."/>
                    </form>
                </TopSearch>

                </div>
            </Main>
        )
}


export default Body;