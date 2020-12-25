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

    .active.top-search-box::placeholder {
        color: ${props => props.theme.titleColor};
    }

    .top-search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        border-radius: 5px;
        font-size: 18px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .top-search-button {
        display: flex;
        align-items: center;
        background: none;
        border: 0;
        color: #AFAFAF;
        transition: all 0.5s ease;
    }

    .active.top-search-button {
        color: ${props => props.theme.titleColor};
    }

    .top-search-box {
        border: 0;
        padding: 1rem;
        width: 100%;
        margin-left: 10px;
        background-color: transparent;    
        color: ${props => props.theme.titleColor};    
    }

    .top-search-box:focus,
    .top-search-button:focus {
        outline: 0;
    }

    .top-search-box::placeholder {
        color: #AFAFAF;
        transition: all 0.5s ease;
    }

`;

function Body(props){
    const inputFocus = () => {
        const box = document.querySelector(".top-search-box");
        const button = document.querySelector(".top-search-button");

        box.classList.add("active");
        button.classList.add("active");
    }

    const inputLoseFocus = () => {
        const box = document.querySelector(".top-search-box");
        const button = document.querySelector(".top-search-button");

        box.classList.remove("active");
        button.classList.remove("active");
    }

    return (
            <Main id="main" className="main">
                <div className="container">
                <TopSearch>
                    <form id="top-search" className="top-search">
                        <button className="top-search-button" type="submit"><IoSearch size={20}/></button>                    
                        <input className="top-search-box" type="text" placeholder="search for a country..." onFocus={inputFocus} onBlur={inputLoseFocus}/>
                    </form>
                </TopSearch>

                </div>
            </Main>
        )
}

export default Body;