import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8%;
    border-radius: 5px;
    background-color: ${props => props.theme.headBackground};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .country-flag {
        width: 100%;
    }
    .card-bottom {
        padding: 30px 20px;
        padding-bottom: 50px;
    }
    
    .country-details.name {
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 20px;
    }

    .country-details span {
        font-weight: 600;
    }


`;

function CountryCard(props){
    return (
        <div className="container">        
            <Card>
                <div className="card-top">
                    <img className="country-flag" src={props.flag} alt="" srcset=""/>
                </div>
                <div className="card-bottom">
                    <div className="country-details name">{props.name}</div>
                    <div className="country-details"><span>Population:</span> {props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div className="country-details"><span>Region:</span> {props.region}</div>
                    <div className="country-details"><span>Capital:</span> {props.capital}</div>
                </div>
            </Card>
        </div>
    )
}

export default CountryCard;