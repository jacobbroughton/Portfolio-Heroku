import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "../Footer/Footer"

class Home extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <Offset></Offset>
                    <BannerDiv>
                        <Name>Jacob Broughton</Name>
                        <Statement>Creative Solutions to age-old tasks</Statement>
                        <ContactButton>Contact Me</ContactButton>
                    </BannerDiv>
                    <WindowsDiv>
                        <Window>
                            <WindowHead>Who am I?</WindowHead>
                            <WindowPara> Exercitation ad ad aliquip reprehenderit.Qui ad sit culpa laboris aute.Quis esse adipisicing cupidatat deserunt qui excepteur velit reprehenderit mollit aliqua proident sit ad deserunt.</WindowPara>
                        </Window>
                        <Window>
                            <WindowHead>How can I help?</WindowHead>
                            <WindowPara>Ea velit deserunt magna aliqua ad reprehenderit incididunt esse exercitation.Est nostrud sit quis laboris mollit.Eiusmod ad occaecat dolore esse elit culpa qui minim.</WindowPara>
                        </Window>
                        <Window>
                            <WindowHead>Why me?</WindowHead>
                            <WindowPara>Nostrud exercitation eiusmod ullamco eu est eu laborum.Consequat reprehenderit est quis incididunt pariatur aliqua proident ut dolore fugiat Lorem amet enim occaecat.Officia deserunt esse labore ipsum ullamco eu eu consequat laboris ex consectetur culpa in est.</WindowPara>
                        </Window>
                    </WindowsDiv>
                </MainDiv>
                <Footer/>
            </MotherDiv>
        )
    }
}


export default Home;

const MotherDiv = styled.div`
    // height: 100%;
`

const MainDiv = styled.div`
    background-color: #1d1e22
    height: 100%;
`

const Offset = styled.div`
    height: 43px;
`

const BannerDiv = styled.div`
    min-height: 250px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1d1e22;
    

    @media(min-width: 615px) {
        min-height: 350px;
    }

    @media(max-width: 614px) {
        padding: 2.5%;
    }

    @media(max-width: 380px) {
        min-height: 200px;
    }

`

const Name = styled.h1`
    margin: 0;
    margin-bottom: 5%;
    color: #d4d4dc;
    font-size: 3rem;

    @media(max-width: 380px) {
        font-size: 2.1rem;
    }

    @media(min-width: 515px) {
        margin-bottom: 25px
    }

`

const Statement = styled.h3`
    margin: 0;
    margin-bottom: 5%;
    color: #d4d4dc;
    font-size: 1.5rem;

    @media(max-width: 380px) {
        font-size: 1rem;
    }

    @media(min-width: 515px) {
        margin-bottom: 25px
    }
`

const ContactButton = styled.div`
    background-color: #feda6a;
    margin-top: 1%;
    padding: 20px;
    max-width: 132px
    max-height: 59px;

`

const WindowsDiv = styled.div`
    padding: 10%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;

    @media(max-width: 614px) {
        margin-top: 5%;
    }
  
`

const Window = styled.div`
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    color:#0f2027;
    background-color: #393f4d;
    max-width: 712px;

        max-width: 562px;
        max-height: 179px;
        padding: 30px;


    
`

const WindowHead = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
    font-size: 1.8rem;
    color: #d4d4dc;
`

const WindowPara = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #d4d4dc;
`