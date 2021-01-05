import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import CountryCard from "./CountryCard";
import TopSearchComponent from "./TopSearch.js";
import TopFilterComponent from "./TopFilter.js";

const Main = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
    .country-details-link {
        color: ${props => props.theme.titleColor};
    }
    .country-details-link:hover {
        text-decoration: none;
    }

    .country-cards {
        display: grid;
        grid-gap: 3rem;
        margin-top: 30px;
    }

    /* Desktop and laptop */

    @media (min-width: 1200px){
        .inputs-container {
            display: flex;
            justify-content: space-between;
        }

        .country-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 3rem;
        }
    }

    /* Tablets */

    @media (min-width: 600px) and (max-width: 1199px) {
        .country-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;



function Home(props){
    const [searchStringText, setSearchStringText] = useState("");

    const [regionName, setRegionName] = useState("");

    const apiUrl = "https://restcountries.eu/rest/v2/all";

    const [countryData, setCountryData] = useState([]);
    
    useEffect(() => {
        getCountryDataWithFetch();
    }, [])

    const getCountryDataWithFetch = async () => {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setCountryData(jsonData);
    };

    function filterByRegion(regionName) {
        setRegionName(regionName);
    }

    const countriesListFiltered = countryData
        .filter(country => {
            return country.region.toLowerCase().indexOf(regionName.toLowerCase()) >= 0
        })

    function searchString(inputValue) {
        setSearchStringText(inputValue);
    }

    const countriesList = countriesListFiltered
        .filter(country => {
            return country.name.toLowerCase().indexOf(searchStringText.toLowerCase()) >= 0
        })
        .map(country => {
            return (                
                    <CountryCard
                        key={country.alpha3Code}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />                
            )
        })

    return (
            <Main id="main" className="main">
                <div className="my-container">
                    <div className="inputs-container">                    
                        <TopSearchComponent 
                            setInputSearch={searchString}
                        />
                        <TopFilterComponent
                            filterByRegion={filterByRegion}
                        />
                    </div>
                    
                    <div className="country-cards">            
                        {countriesList}
                    </div>
                </div>

            </Main>
        )
}

export default Home;