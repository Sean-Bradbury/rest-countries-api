import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";

const Toggle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.theme.headBackground};
    color: ${props => props.theme.titleColor};
    border: none;
    &:focus {
        outline: none;
    }
    transition: 0.5s all ease;
`;

const HeadTop = styled.div`
    background-color: ${props => props.theme.headBackground};
    color: ${props => props.theme.titleColor};
    transition: 0.5s all ease;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
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
                    <div className="logo">Where in the world?</div>
                </div>
                <div className="head-content-b">
                        <Toggle onClick={changeTheme}>
                            {icon} {modeText}
                        </Toggle>
                </div>
            </div>
        </HeadTop>
        
    )
};

export default Head;