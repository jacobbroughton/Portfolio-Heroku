import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "../Footer/Footer"
import "./Work.css"

class Work extends Component {
    render() {
        return (
            <MotherDiv>
                <Offset></Offset>
                <MainDiv>
                    <HeadDiv>
                        <Header>My Work</Header>
                    </HeadDiv>
                    <hr />
                    <WorkWindowDiv>
                        <a className="workWindow" href="https://new-age-oils.herokuapp.com/" >
                                <WorkLinkDiv>
                                    <WorkPara>New Age Oils Website</WorkPara>
                                </WorkLinkDiv>
                        </a>
                        <a className="workWindow" href="https://jlbroughton88.github.io/Lone-Soldier-Game/">
                        <WorkLinkDiv>
                                <WorkPara>Lone Soldier Game</WorkPara>
                            </WorkLinkDiv>
                        </a>
    
                                
                        <a className="workWindow" href="https://jlbroughton88.github.io/Bike-Guessing-Game/">
                        <WorkLinkDiv>
                                <WorkPara>Bike Guessing Game</WorkPara>
                            </WorkLinkDiv>
                        </a>
                    </WorkWindowDiv>



                    {/* <WindowRows>
                        <RowOne>
                        <a href="https://new-age-oils.herokuapp.com/">
                            <WorkWindow >
                                <Background id="newAgeOilsDiv"></Background>
                                <WorkHead className="opaqueHead">New Age Oils</WorkHead>
                            </WorkWindow>
                        </a>
                        <a href="https://jlbroughton88.github.io/Lone-Soldier-Game/">
                            <WorkWindow >
                                <Background id="loneSoldierDiv"></Background>
                                <WorkHead className="opaqueHead">Lone Soldier Game</WorkHead>
                            </WorkWindow>
                        </a>
                    </RowOne>
                    <RowTwo>
                        <a href="https://jlbroughton88.github.io/Bike-Guessing-Game/">
                            <WorkWindow >
                                <Background id="bikeGuessingDiv"></Background>
                                <WorkHead className="opaqueHead">Guess That Brand!</WorkHead>
                            </WorkWindow>
                        </a>
                    </RowTwo>
                    </WindowRows> */}




                    {/* <WorkWindows>
                        <a href="https://new-age-oils.herokuapp.com/">
                            <WorkWindow >
                                <Background id="newAgeOilsDiv"></Background>
                                <WorkHead className="opaqueHead">New Age Oils</WorkHead>
                            </WorkWindow>
                        </a>
                        <a href="https://jlbroughton88.github.io/Lone-Soldier-Game/">
                            <WorkWindow >
                                <Background id="loneSoldierDiv"></Background>
                                <WorkHead className="opaqueHead">Lone Soldier Game</WorkHead>
                            </WorkWindow>
                        </a>
                        <a href="https://jlbroughton88.github.io/Bike-Guessing-Game/">
                            <WorkWindow >
                                <Background id="bikeGuessingDiv"></Background>
                                <WorkHead className="opaqueHead">Guess That Brand!</WorkHead>
                            </WorkWindow>
                        </a>
                        <a href="https://jlbroughton88.github.io/Calculator/">
                            <WorkWindow>
                                <Background id="calculatorDiv"></Background>
                                <WorkHead className="opaqueHead">Calculator</WorkHead>
                            </WorkWindow>
                        </a>
                    </WorkWindows> */}
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Work;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;

`

const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1d1e22;
`

const Offset = styled.div`
    height: 43px;
`

const HeadDiv = styled.div`
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5%;
    min-height: 105px;
    padding-bottom: 0;
`

const Header = styled.h2`
    font-size: 3rem;
    margin: 0;
    color: #d4d4dc;

    @media(max-width: 475px) { font-size: 2.75rem;}

`

const WorkWindowDiv = styled.div`
    width: 70%;
    height: 100%
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 2.5%;
`


const WorkLinkDiv = styled.div`
    width: 60%;
    border-bottom: solid 1px #feda6a;
    text-decoration: none;
    display: flex;
    justify-content: center;

    @media(max-width: 600px) { width: 65%; }
    @media(max-width: 530px) { width: 70%; }
    @media(max-width: 500px) { width: 75%; }
    @media(max-width: 415px) { width: 80%; }
    @media(max-width: 395px) { width: 85%; }
    
`

const WorkPara = styled.p`
    text-decoration: none;
    color: #d4d4dc;
    margin: 0;
    margin-bottom: 3px;
`
// const WindowRows = styled.div`
//     display: flex;
//     flex-direction: column
//     align-items: center;
//     justify-content: center;
//     width: 75%;
//     height: 90%;

//     @media(max-width: 1000px) { height: 80%; }
//     @media(max-width: 800px) { height: 75% }
//     @media(max-width: 700px) { height: 70% }
//     @media(max-width: 600px) { height: 65% }
// `

// const RowOne = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: space-evenly;
//     margin: 2.5%;
//     margin-left: 0;
//     margin-right: 0;

//     @media(max-width: 550px){ height:50%; flex-direction: column; justify-content: center;}
// `

// const RowTwo = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: space-evenly;
//     margin: 2.5%;
//     margin-left: 0;
//     margin-right: 0;

//     @media (max-width: 550px){ height:50%; flex-direction: column; justify-content: center;}
// `

// // const WorkWindows = styled.div`
// //     height: 95%;
// //     width: 65%;
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: space-evenly;
// //     align-items: center;

// //     @media(max-width: 400px) { margin-bottom: 35px }

// // `

// const WorkWindow = styled.div`
//     height:300px;
//     width: 300px;
//     display: flex;  
//     justify-content: center;
//     align-items: center;
//     align-self: center;
//     box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
//     z-index: 1;

//     @media(max-width: 550px){ height: 150px width: 300px}
//     @media(max-width: 1000px) { height: 200px; width: 250px; }
//     @media(max-width: 800px) { height: 225px; width: 225px; }
//     @media(max-width: 700px) { height: 200px; width: 200px; }
//     @media(max-width: 600px) { height: 175px; width: 175px; }
// `

// const WorkHead = styled.h3`
//     color: white;
//     position: absolute;
// `

// const Background = styled.div`
//     height: 100%;
//     width: 100%;
// `