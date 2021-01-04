import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const TopSearch = styled.div`
    
    .active.top-search-box::placeholder {
        color: ${props => props.theme.titleColor};
    }

    .top-search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-radius: 10px;
        font-size: 14px;
        background-color: ${props => props.theme.headBackground};
        color: ${props => props.theme.titleColor};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .top-search-button {
        display: flex;
        align-items: center;
        background: none;
        border: 0;
        color: #AFAFAF;
        transition: all 0.5s ease;
        background-color: transparent;
    }

    .active.top-search-button {
        color: ${props => props.theme.titleColor};
    }

    .top-search-box {
        border: 0;
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

    @media (min-width: 1200px) {
        .top-search {
            width: 500px;
            height: 50px;
        }
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        .top-search {
            width: 50%;
        }
    }

`;

function TopSearchComponent(props){
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

    const [inputValue, setInputValue] = useState("");

    function inputChange(e){
        const newValue = e.target.value;
        setInputValue(newValue);
        props.setInputSearch(newValue);
    }

    function stopSubmit(e){
        e.preventDefault();
        document.activeElement.blur();
    }

    return (
        <TopSearch>
            <form id="top-search" className="top-search" onSubmit={stopSubmit}>
                <div className="top-search-button"><IoSearch size={20}/></div>                    
                <input className="top-search-box" type="text" placeholder="search for a country..." value={inputValue} onChange={inputChange} onFocus={inputFocus} onBlur={inputLoseFocus}/>
            </form>
        </TopSearch>
    )

}

export default TopSearchComponent;
