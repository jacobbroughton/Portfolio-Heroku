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
                    <WorkWindows>
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
                    </WorkWindows>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Work;

const MotherDiv = styled.div`
    height: 190vh;
    width: 100%;

    @media(max-width: 525px) { height: 175vh }
    @media(max-width: 475px) { height: 160vh }
    @media(max-width: 425px) { height: 150vh }
    @media(max-width: 400px) { height: 147vh }
    @media(max-width: 350px) { height: 117vh }
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
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
    min-height: 105px;

    @media(max-width: 350px) {
        margin-top: 10%;
        padding-bottom: 2%;
    }
`

const Header = styled.h2`
    font-size: 2rem;
    margin: 0;
    color: #d4d4dc;

`

const WorkWindows = styled.div`
    height: 95%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 400px) { margin-bottom: 35px }

`

const WorkWindow = styled.div`
    height:250px;
    width: 400px;
    display: flex;  
    justify-content: center;
    align-items: center;
    align-self: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    margin: 2.5%;
    margin-left: 0;
    margin-right: 0;
    z-index: 1;

    @media(max-width: 525px) { width: 375px; height: 235px }
    @media(max-width: 475px) { width: 350px; height: 215px }
    @media(max-width: 425px) { width: 325px; height: 200px }
    @media(max-width: 400px) { width: 300px; height: 185px; margin-bottom: 3.5%}
    @media(max-width: 350px) { width: 275px; height: 170px }
`

const WorkHead = styled.h3`
    color: white;
    position: absolute;
`

const Background = styled.div`
    height: 100%;
    width: 100%;
`

const TopRow = styled.div``

const BottomRow = styled.div``