import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa"

const TopFilter = styled.div`
    position: relative;
    margin-top: 30px;
    width: 70%;
    font-size: 14px;

    .region-filter {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 15px 20px;
        border-radius: 10px;
        font-size: inherit;
        font-family: inherit;
        color: #AFAFAF;
        background-color: ${props => props.theme.headBackground};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
        cursor: pointer;
    }

    .filter-active.region-filter {
        color: ${props => props.theme.titleColor};
        visibility: visible;
    }

    .choose-region {
        position: absolute;
        width: 100%;
        max-height: 0;
        padding: 15px 20px;
        margin-top: 5px;
        border-radius: 10px;
        overflow-y: hidden;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        font-size: inherit;
        color: #AFAFAF;
        opacity: 0;
        background-color: ${props => props.theme.headBackground};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
    }

    .filter-active.region-filter + .choose-region {
        visibility: visible;
        color: ${props => props.theme.titleColor};
        max-height: 500px;
        opacity: 1;
    }

    .radio {
        visibility: hidden;
        position: absolute;
    }

    .label {
        margin: 5px 0px;
        padding: 5px 0px;
        cursor: pointer;
    }

    /* Desktops and latops */

    @media (min-width: 1200px) {
        margin-top: 0;
        display: flex;
        justify-content: flex-end;

        .region-filter {
            width: auto;
            height: 50px;
            width: 200px;
        }

        .choose-region {
            width: 200px;
            top: 50px;
        }
    }

    /* Tablets */

    @media (min-width: 600px) and (max-width: 1199px) {
        .region-filter{
            display: inline-flex;
            width: auto;
        }
    }

`;

function TopFilterComponent(props){
    const filterClick = () => {
        const filter = document.querySelector(".region-filter");

        filter.classList.toggle("filter-active");
    }

    const filterRegion = (e => {
        const regionName = e.target.value;

        props.filterByRegion(regionName);

        filterClick();

    });

    return (
        <TopFilter>
            <div className="region-filter" onClick={filterClick}>
                <div className="region-filter-text">Filter by Region</div>           
                <div className="region-filter-icon"><FaAngleDown size={14}/></div>
            </div>
            <div className="choose-region">
                <input type="radio" className="radio" name="africa" id="africa" value="africa" onClick={filterRegion} />
                <label htmlFor="africa" className="africa-label label">Africa</label>

                <input type="radio" className="radio" name="america" id="america" value="america" onClick={filterRegion} />
                <label htmlFor="america" className="america-label label">America</label>
                
                <input type="radio" className="radio" name="asia" id="asia" value="asia" onClick={filterRegion} />
                <label htmlFor="asia" className="adia-label label">Asia</label>

                <input type="radio" className="radio" name="europe" id="europe" value="europe" onClick={filterRegion} />
                <label htmlFor="europe" className="europe-label label">Europe</label>

                <input type="radio" className="radio" name="oceania" id="oceania" value="oceania" onClick={filterRegion} />
                <label htmlFor="oceania" className="oceania-label label">Oceania</label>
            </div>
        </TopFilter>
    )

}

export default TopFilterComponent;
