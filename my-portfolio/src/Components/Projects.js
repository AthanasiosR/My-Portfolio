import React from "react";
import styled from "styled-components";
import EcommerceProject from "./Pics/EcommerceProject.png";
import WhatsTheWeather from "./Pics/WhatsTheWeather.png";
import HockeyTrivia from "./Pics/HockeyTrivia.png"
import TicTacToe from "./Pics/TicTacToe.png";
import CritterHome from "./Pics/CritterHome.png";

function MyProjects () {
    return (
        <>
        <Title id="projects">
            My Projects
        </Title>

        <RowOne>
            <ProjectOne>
                <img class="landscapePic" src={EcommerceProject} />
                <ProjectTitle>
                    E-commerce Website
                </ProjectTitle>
                <LanguagesUsed>
                    <span>HTML & CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Redux</span>
                    <span>Node.Js</span>
                </LanguagesUsed>
                <Info>
                    An E-commerce website that displays items that are for sale.
                    Features include multiple categories pages / an items detail page / a cart / 
                    a checkout modal for the customers information / an order confirmation page.
                </Info>
                <Link>
                <a href="https://github.com/AthanasiosR/project-GROUP-e-commerce" target="_blank">Link to source code</a>
                </Link>
                
            </ProjectOne>
            <ProjectTwo>
                <img class="weatherPic" src={WhatsTheWeather} />
                <ProjectTitle>
                    What's the Weather?
                </ProjectTitle>
                <LanguagesUsed>
                    <span>HTML & CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>OpenWeatherMap API</span>
                </LanguagesUsed>
                <Info>
                    What's the Weather? is a weather app that shows the current weather in the city that you searched  for 
                    Within the app the user can see information about: Current Temperature / Weather Description / Feels like / 
                    Temperature High/Low / Humidity / Future Forecast in three hour intervals
                </Info>
                <Link>
                    <a href="https://github.com/AthanasiosR/Whats-The-Weather" target="_blank">Link to source code</a>
                </Link>
            </ProjectTwo>
        </RowOne>

        <RowTwo>
             <ProjectThree>
                <img class="landscapePic" src={HockeyTrivia} />
                <ProjectTitle>
                    Hockey Trivia
                </ProjectTitle>
                <LanguagesUsed>
                    <span>HTML & CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                </LanguagesUsed>
                <Info>
                    Hockey Trivia is a quiz app to test your hockey knowledge and see how much you really know about the sport.
                    The app is created using React.Js and React hooks (useState) to keep track of the users score.
                </Info>
                <Link>
                    <a href="https://github.com/AthanasiosR/Hockey-Trivia" target="_blank">Link to source code</a>
                </Link>            
            </ProjectThree>
            <ProjectFour>
                <img class="landscapePic" src={TicTacToe} />
                <ProjectTitle>
                        Tic-Tac-Toe
                    </ProjectTitle>
                    <LanguagesUsed>
                        <span>HTML & CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </LanguagesUsed>
                    <Info>
                    Recreated the classic tic-tac-toe game that everyone loves. Features include: Game board / Shows whose turn 
                    it is / Shows who has won the game / Has a game/turn history at the bottom so that the players can go back to 
                    any move that they did.
                    </Info>
                    <Link>
                        <a href="https://github.com/AthanasiosR/TIC-TAC-TOE" target="_blank">Link to source code</a>
                    </Link>            
            </ProjectFour>
        </RowTwo>

        <RowThree>
            <ProjectFive>
                <img class="landscapePic" src={CritterHome} />
            <ProjectTitle>
                    Cricker (Twitter Clone)
                </ProjectTitle>
                <LanguagesUsed>
                    <span>HTML & CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node.Js</span>
                </LanguagesUsed>
                <Info>
                    Cricker is a Twitter clone project. The project fetches tweet data from database and displays all tweets 
                    on a homepage. Features include: A home page / A profile page for the user / Can post a tweet / 
                    Can also “like” a tweet
                </Info>
                <Link>
                    <a href="https://github.com/AthanasiosR/Hockey-Trivia" target="_blank">Link to source code</a>
                </Link>            
            </ProjectFive>
        </RowThree>
        </>
    );
};


const Title = styled.div`
font-size: 30px;
margin-left: 50px;
`;

const RowOne = styled.div`
display: flex;
justify-content: space-around;
margin-left: 20px;
margin-right: 20px;
`;

const ProjectOne = styled.div`
width: 45%;
border: black;
border-style: solid;
border-width: 2px;
border-color: black;
border-radius: 10px;
margin-top: 20px;
/* margin-left: 50px; */
padding-bottom: 20px;
background-color: lightgray;
box-shadow: 10px 10px 15px -2px rgba(0,0,0,0.78);
`;

const ProjectTitle = styled.div`
text-align: center;
font-size: 20px;
`;

const LanguagesUsed = styled.div`
margin-top: 10px;
margin-bottom: 10px;

@media (min-width: 768px) and (max-width: 1024px) {
        /* TABLET CSS */
        display: flex;
        flex-wrap: wrap;
    }

`;

const Info = styled.p`
margin-left: 10px;
margin-right: 10px;
`;

const Link = styled.div`
margin-left: 10px;
`;

const ProjectTwo = styled.div`
width: 45%;
border: black;
border-style: solid;
border-width: 2px;
border-color: black;
border-radius: 10px;
margin-top: 20px;
/* margin-left: 50px; */
padding-bottom: 20px;
background-color: lightgray;
box-shadow: 10px 10px 15px -2px rgba(0,0,0,0.78);
`;

const RowTwo = styled.div`
display: flex;
justify-content: space-around;
margin-left: 20px;
margin-right: 20px;
`;

const ProjectThree = styled.div`
width: 45%;
border: black;
border-style: solid;
border-width: 2px;
border-color: black;
border-radius: 10px;
margin-top: 20px;
/* margin-left: 50px; */
padding-bottom: 20px;
background-color: lightgray;
box-shadow: 10px 10px 15px -2px rgba(0,0,0,0.78);
`;

const ProjectFour = styled.div`
width: 45%;
border: black;
border-style: solid;
border-width: 2px;
border-color: black;
border-radius: 10px;
margin-top: 20px;
/* margin-left: 50px; */
padding-bottom: 20px;
background-color: lightgray;
box-shadow: 10px 10px 15px -2px rgba(0,0,0,0.78);
`;

const RowThree = styled.div`
display: flex;
justify-content: space-around;
`;

const ProjectFive = styled.div`
width: 45%;
border: black;
border-style: solid;
border-width: 2px;
border-color: black;
border-radius: 10px;
margin-top: 20px;
/* margin-left: 50px; */
padding-bottom: 20px;
background-color: lightgray;
box-shadow: 10px 10px 15px -2px rgba(0,0,0,0.78);
`;

export default MyProjects;