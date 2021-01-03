import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa"

const Main = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
    position: relative;
    font-size: 14px;
`;

const ButtonTop = styled.div`
        display: inline-flex;
        align-items: center;
        padding: 15px 20px;
        margin-bottom: 30px;
        margin-right: 10px;
        border-radius: 10px;
        font-size: inherit;
        font-family: inherit;
        color: #AFAFAF;
        background-color: ${props => props.theme.headBackground};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.theme.titleColor};
            .left-icon {
                margin-right: 5px;
            }
        }
        a:focus,
        a:active {
            text-decoration: none;
        }

`;

const CountryInfo = styled.div`
    display: grid;
    grid-gap: 30px;
    .country-flag{
        width: 100%;
    }

    .country-details {
        margin: 10px 0px;
    }

    .country-details-b {
        display: grid;
        grid-gap: 30px;
    }

    .country-details.name {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
    }

    .country-details.sub-title {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 20px;
    }

    .country-details-link {
        color: ${props => props.theme.titleColor};
    }

    .country-details-link:hover {
        text-decoration: none;
    }

    .country-details span {
        font-weight: 600;
    }

    span.language {
            font-weight: 400;
        }

    span.comma {
        font-weight: 400;
    }

    .languages {
        display: inline;
    }

    .language:nth-last-of-type(1) span {
        display: none;
    }

    @media (min-width: 1000px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 100px;
        .country-details.name {
            margin: 0;
            grid-area: name;
        }
        .main-info{
            grid-area: main;
        }
        .extra-info{
            grid-area: extra;
        }
        .border-countries{
            grid-area: borders;
        }
        .country-details-b {
            display: grid;    
            grid-gap: 10px;        
            grid-template-areas: 
            'name name'
            'main extra'
            'borders borders'
            ;
        }
    }

`;


function CountryDetail( { match }) {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItem();
    })   

    const fetchItem = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`);
        const jsonData = await response.json();
        setItem(jsonData);
    };

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



    const borders = item.map(country => { return country.borders});

    const borderCountriesList = [];
    
    borders.forEach(border => {
        countryData.filter(country => {
            if(border === country.alpha3Code) {
                return borderCountriesList.push(country.name);  
            }else if(country.alpha3Code === border[1]) {
                return borderCountriesList.push(country.name);  
            }else if(country.alpha3Code === border[2]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[3]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[4]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[5]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[6]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[8]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[9]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[10]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[11]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[12]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[13]) {
                return borderCountriesList.push(country.name);     
            }else if(country.alpha3Code === border[14]) {
                return borderCountriesList.push(country.name);     
            }
        })
    })

    const refreshPage = ()=>{
        setTimeout(function(){
            window.location.reload();
        }, 100)        
     }


    const chosenCountry = item
        .map(country => {
            return (
                    <CountryInfo>                                      
                        <div className="country-details-a">                        
                            <img className="country-flag" src={country.flag} alt="" srcset=""/>
                        </div>
                        <div className="country-details-b">

                            <div className="country-details name">{country.name}</div>

                            <div className="main-info">                                
                                <div className="country-details"><span>Native Name:</span> {country.nativeName}</div>
                                <div className="country-details"><span>Population:</span> {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div className="country-details"><span>Region:</span> {country.region}</div>
                                <div className="country-details"><span>Sub Region:</span> {country.subregion}</div>
                                <div className="country-details"><span>Capital:</span> {country.capital}</div>                            
                            </div>                        
                            <div className="extra-info">
                                <div className="country-details"><span>Top Level Domain:</span> {country.topLevelDomain}</div>                            
                                <div className="country-details"><span>Currencies:</span> {country.currencies[0].name}</div>                                               
                                <div className="country-details"><span>Languages:</span> <div className="languages">{country.languages.map(language => { return (<span className="language">{language.name}<span className="comma">, </span></span>)})}</div></div>                            
                            </div>                        
                                <div className="border-countries">
                                {borderCountriesList.length > 0 && <div className="country-details sub-title">Border Countries:</div>}
                                <div className="country-details">{borderCountriesList.map(border => { return(<Link className="country-details-link" to={`/country/${border}`}><ButtonTop onClick={refreshPage} className="country-btn">{border}</ButtonTop></Link>)})}</div>
                            </div>                        
                        </div>
                    </CountryInfo>                   
                    )
        })

    return (
        <Main>
            <div className="my-container">
            
                <ButtonTop><Link to="/"><FaAngleLeft className="left-icon" size={14}/> Back</Link></ButtonTop>       
                
                {chosenCountry}

            </div>
        </Main>
    );
}

export default CountryDetail;