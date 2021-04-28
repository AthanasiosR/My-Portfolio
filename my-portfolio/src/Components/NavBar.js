import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function NavBar () {
    return (
        <HeaderWrapper>
            <RightNavBar>
                <StyledUL>
                    <StyledLI>
                        <Link style={{background: "none"}} to="home" spy={true} smooth={true} offset={-10} duration={500}>Home</Link>
                    </StyledLI>
                    <StyledLI>
                        <Link to="aboutMe" style={{background: "none"}} spy={true} smooth={true} offset={-10} duration={500}>About</Link>
                    </StyledLI>
                    <StyledLI>
                        <Link to="projects" style={{background: "none"}} spy={true} smooth={true} offset={-10} duration={500}>Projects</Link>
                    </StyledLI>
                    <StyledLI>
                        <Link to="contactMe" style={{background: "none"}} spy={true} smooth={true} offset={-10} duration={750}>Contact</Link>
                    </StyledLI>
                </StyledUL>
            </RightNavBar>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  background: linear-gradient(90deg, rgba(126,126,126,1) 0%, rgba(0,0,0,1) 100%);
  color: white;
  position: relative;
  align-items: right;

    @media (min-width: 768px) and (max-width: 1024px) {
        /* TABLET CSS */
        width: 100%;
    }

    @media (max-width: 480px) {
        /* MOBILE CSS */
        width: 100%;
    }


`;

const RightNavBar = styled.nav`
width: 40%;
position: absolute;
left: 65%;
font-size: 20px;
display: flex;
float: right;

@media (min-width: 768px) and (max-width: 1024px) {
        /* TABLET CSS */
        width: 40%;
        position: absolute;
        left: 47%;
        display: flex;
        float: left;
    }


    @media (max-width: 767px){
        /* MOBILE CSS */



    }

`;

const StyledUL = styled.ul`
list-style: none;
display: flex;

`;

const StyledLI = styled.li`
transition: all 0.2s ease-in-out;
padding: 15px;
margin-left: 10px;

@media (min-width: 768px) and (max-width: 1024px) {
        /* TABLET CSS */
        padding: 20px;
    }

&:hover {
  transform: scale(1.1);
  font-weight: bolder;
  cursor: pointer;
  text-decoration: underline;
}
`;




export default NavBar;
