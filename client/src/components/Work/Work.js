import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "../Footer/Footer"
import "./Work.css"

class Work extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <HeadDiv>
                        <Header>My Work</Header>
                    </HeadDiv>
                    <hr />
                    <WorkWindows>
                        <WorkWindow >
                            <Background id="newAgeOilsDiv"></Background>
                            <WorkHead className="opaqueHead">New Age Oils</WorkHead>
                        </WorkWindow>
                        <WorkWindow >
                        <Background id="loneSoldierDiv"></Background>
                            <WorkHead className="opaqueHead">Lone Soldier Game</WorkHead>
                        </WorkWindow>
                        <WorkWindow >
                        <Background id="bikeGuessingDiv"></Background>
                            <WorkHead className="opaqueHead">Guess That Brand!</WorkHead>
                        </WorkWindow>
                        <WorkWindow>
                        <Background id="calculatorDiv"></Background>
                            <WorkHead className="opaqueHead">Calculator</WorkHead>
                        </WorkWindow>
                    </WorkWindows>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Work;

const MotherDiv = styled.div`
    height: 150vh;
    width: 100%;
`

const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeadDiv = styled.div`
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
`

const Header = styled.h2`
    font-size: 2rem;
    margin: 0;

`

const WorkWindows = styled.div`
    height: 95%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const WorkWindow = styled.div`
    height: 25%;
    width: 100%;
    display: flex;  
    flex-direction: column
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: lightgrey;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    margin: 5%;
    margin-left: 0;
    margin-right: 0;
    position: relative;
    max-width: 412px;
`

const WorkHead = styled.h3`
    color: white;
    position: absolute;
`

const Background = styled.div`
    height: 100%;
    width: 100%;
`
