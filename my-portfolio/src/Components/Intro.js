import React from "react";
import styled from "styled-components";
import Chalkboard from "./Pics/Chalkboard.jpg";
import ProfilePic from "./Pics/ProfilePic.jpeg";

function Intro () {
    return (
        <>
        <Title id="home">
            <Image>
                <img class="banner" src={Chalkboard} />
            </Image>
            <Name> Athanasios Tommy Rigas </Name>
            <Para>
                Full-Stack Web Developer
            </Para>
        </Title>
        <AboutMe>
            <ImageMe>
                <img class="profilePic" src={ProfilePic} />
            </ImageMe>
            <Info>
                <AboutMeTitle id="aboutMe">
                    About Me
                </AboutMeTitle>
                <AboutMeParagraph>
                    I graduated from Concordia in December 2019 with a major in Urban Studies. 
                    While completing my major I became very interested in web development through 
                    online tutorials and classes. Once I graduated, I decided to pursue my interest 
                    in web development as a full time career by enrolling in Concordias Full-stack Web Development bootcamp. 
                    I’m a focused and goal oriented person 
                    that can work individually or in a team environment. I’m a very hardworking and able 
                    to organize and prioritize my work so I never miss a deadline. With the knowledge from 
                    the bootcamp, I can build and create full-stack websites and web applications and pursue my passion as a career. 
                </AboutMeParagraph>
            </Info>
        
        </AboutMe>
        <Skills>
            <SkillsTitle>
                My Skills
            </SkillsTitle>
            <MySkills>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React (Functional Components)</li>
                <li>Styled-Components</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
            </MySkills>
        </Skills>
        </>     
    );
};

const Title = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Image = styled.div``;

const Name = styled.p`
position: absolute;
  top: 10px;
  left: 50px;
  font-family: Chalkduster;
  font-size: 30px;
`;

const Para = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -75%);
font-family: Chalkduster;
font-size: 100px;

@media (min-width: 768px) and (max-width: 1024px) {
        /* TABLET CSS */
        width: 80%;
        top: 40%;
        left: 50%;
    }

`;

const AboutMe = styled.div`
display: flex;
justify-content: space-around;
margin-top: 50px;
margin-left: 50px;
margin-right: 50px;
`;

const ImageMe = styled.div`
`;

const Info = styled.div`
margin-top: -30px;
`;

const AboutMeTitle = styled.p`
font-size: 30px;
margin-left: 30px;
`;

const AboutMeParagraph = styled.p`
font-size: 20px;
margin-left: 30px;
margin-right: 30px;
line-height: 1.6;
`;

const Skills = styled.div``;

const SkillsTitle = styled.p`
font-size: 30px;
margin-left: 50px;
`;

const MySkills = styled.ul`
column-count: 3;
margin-left: 30px;
line-height: 1.6;
`;


export default Intro;