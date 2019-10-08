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

                    <WorkLinkDiv className="workWindow">
                            <WorkPara>Pokedex</WorkPara>
                            <WorkBtnDiv >
                                <a href="https://pokedex-jb.herokuapp.com/">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/Pokedex">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                        <WorkLinkDiv className="workWindow">
                            <WorkPara>New Age Oils Website</WorkPara>
                            <WorkBtnDiv >
                                <a href="https://new-age-oils.herokuapp.com/">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/NewAgeOils">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                        <WorkLinkDiv className="workWindow">
                            <WorkPara>CRUD Car List</WorkPara>
                            <WorkBtnDiv>
                                <a href="https://crud-car-list.herokuapp.com">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/CRUD_Car_List">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                        <WorkLinkDiv className="workWindow">
                            <WorkPara>This Portfolio</WorkPara>
                            <WorkBtnDiv>
                                <a href="http://www.jlbroughton.com">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/Portfolio">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                        <WorkLinkDiv className="workWindow">
                            <WorkPara>Lone Soldier Game (Desktop)</WorkPara>
                            <WorkBtnDiv>
                                <a href="https://jlbroughton88.github.io/Lone-Soldier-Game/">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/Lone-Soldier-Game">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                        <WorkLinkDiv className="workWindow">
                            <WorkPara>Bike Guessing Game</WorkPara>
                            <WorkBtnDiv>
                                <a href="https://jlbroughton88.github.io/Bike-Guessing-Game/">
                                    <Website>Website</Website>
                                </a>
                                <a href="https://github.com/jlbroughton88/Bike-Guessing-Game">
                                    <GitHub>GitHub</GitHub>
                                </a>
                            </WorkBtnDiv>
                        </WorkLinkDiv>
                    </WorkWindowDiv>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Work;

const MotherDiv = styled.div`
    // height: 100%;
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

    @media(min-width: 800px) { margin-top:2%;  };
    @media(min-width: 950px) { margin-top:1.75%;  };
    @media(min-width: 1100px) { margin-top:1.25%;  };
`


const WorkLinkDiv = styled.div`
    width: 60%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 600px) { width: 65%; }
    @media(max-width: 530px) { width: 70%; }
    @media(max-width: 500px) { width: 75%; }
    @media(max-width: 415px) { width: 80%; }
    @media(max-width: 395px) { width: 85%; }
    
`

const WorkBtnDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;


    @media(max-width: 450px) { width: 80%; }
    @media(max-width: 350px) { width: 100%; }
`

const GitHub = styled.div`
    color: #d4d4dc;
    font-size: 0.95rem
    padding: 3px;    
    padding-left: 5px;
    padding-right: 5px;
    border-left: solid 1px #879FFF; 
    border-bottom: solid 1px #879FFF;
    display: flex;
    justify-content: center;
    transition: all .3s ease-out;
    :hover{ color: #feda6a }
`

const Website = styled.div`
    color: #d4d4d4;
    font-size: 0.95rem;
    padding: 3px;    
    padding-left: 5px;
    padding-right: 5px;
    border-right: solid 1px #879FFF; 
    border-bottom: solid 1px #879FFF;
    display: flex;
    justify-content: center;
    transition: all .2s ease-out;
    :hover{ color: #feda6a }
`

const WorkPara = styled.p`
    border-bottom: solid 1px #feda6a;
    text-decoration: none;
    color: #d4d4dc;
    margin: 0;
    margin-bottom: 6px;
    padding-bottom: 6px;
    text-align: center;

    @media(max-width: 800px) { font-size: 1.2rem }
`