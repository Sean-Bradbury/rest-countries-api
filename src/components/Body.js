import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import CountryCard from "./CountryCard";
import TopSearchComponent from "./TopSearch.js";
import TopFilterComponent from "./TopFilter.js";

const Main = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
`;



const MainBody = styled.section`

`;


function Body(props){
    const [searchStringText, setSearchStringText] = useState("");

    const [regionName, setRegionName] = useState("");

    const apiUrl = "https://restcountries.eu/rest/v2/all";

    const [countryData, setCountryData] = useState([]);
    
    useEffect(() => {
        getCountryDataWithFetch();
    })

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
                <div className="container">
                    <TopSearchComponent 
                        setInputSearch={searchString}
                    />
                    <TopFilterComponent
                        filterByRegion={filterByRegion}
                    />
                </div>

                <MainBody>
                    {countriesList}
                </MainBody>
            </Main>
        )
}

export default Body;