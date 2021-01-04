import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Toggle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    background-color: ${props => props.theme.headBackground};
    color: ${props => props.theme.titleColor};
    border: none;
    &:focus {
        outline: none;
        background: none;
    }
    transition: 0.5s all ease;
`;

const HeadTop = styled.div`
    background-color: ${props => props.theme.headBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    
    /* Head */
    .head-content {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        padding: 30px 20px;        
    }

    .head-content-a {
        font-weight: 800;
        font-size: 16px;
    }

    .logo .logo-link {
        color: ${props => props.theme.titleColor};
    }

    .logo .logo-link:hover {
        text-decoration: none;
    }

    /* Tablet and above */

    @media (min-width: 1000px){
        .head-content {
            padding: 30px 80px;
        }
    }

`;

function Head(props) {    
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <IoMoonOutline style={{paddingRight:"5px"}} size={20} /> : <CgSun style={{paddingRight:"5px"}} size={20} />;
    const modeText = props.theme === "light" ? "Dark Mode" : "Light Mode";
    
    return (
        <HeadTop>
            <div className="head-content">            
                <div className="head-content-a">
                    <div className="logo"><Link className="logo-link" to="/">Where in the world?</Link></div>
                </div>
                <div className="head-content-b">
                        <Toggle onClick={changeTheme}>
                            {icon} {modeText}
                        </Toggle>
                </div>
            </div>
        </HeadTop>        
    );
};

export default Head;