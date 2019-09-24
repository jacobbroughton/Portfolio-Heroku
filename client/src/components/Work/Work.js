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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
