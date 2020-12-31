import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import CountryDetail from "./CountryDetail";
import TopSearchComponent from "./TopSearch.js";
import TopFilterComponent from "./TopFilter.js";

const Main = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
    .country-details-link {
        color: ${props => props.theme.titleColor};
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
                <Link className="country-details-link" to={`/country/${country.name}`}>
                    <CountryCard
                        key={country.alpha3Code}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                </Link>
            )
        })

    return (
            <Main id="main" className="main">
                <div className="container">
                    <TopSearchComponent 
                        setInputSearch={searchString}
                    />
                    <TopFilterComponent
                        filterByRegion={filterByRegion}
                    />
                </div>

                    {countriesList}
            </Main>
        )
}

export default Home;