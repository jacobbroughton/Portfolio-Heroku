import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Resume from "../docs/myResume.pdf"
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <Offset></Offset>
                    <BannerDiv>
                        <Name>Jacob Broughton</Name>
                        <Statement>Full Stack Web Developer</Statement>
                        <Buttons>
                        <Link id="contactMeLink" to="/contact">
                            <ContactButton>Contact Me</ContactButton>
                        </Link>
                        <a id="downloadLink" href={Resume} download><DownloadResume><p id="downloadP">Resume</p></DownloadResume></a>
                        </Buttons>

                        
                    </BannerDiv>
                    <hr id="homeHr" />
                    <WindowsDiv>
                        <Window>
                            <WindowHead>Who am I?</WindowHead>
                            <WindowPara>Hi! My name is Jacob. i'm 20 years old, I live in Matthews, NC, I have 2 dogs and 2 cats, and I love mountain biking and hiking. I'm a full-stack web developer with about a year under my metaphorical belt...Thats what you're probably here for, right?</WindowPara>
                        </Window>
                        <Window>
                            <WindowHead>How can I help?</WindowHead>
                            <WindowPara>I'd love to be able to say that i'm contributing to something greater than myself. A company that idealistically serves people, if I could be one of the ones serving, I'd feel right at home.</WindowPara>
                        </Window>
                        <Window>
                            <WindowHead>Why me?</WindowHead>
                            <WindowPara>I absolutely love to learn. That sounds good right? Well in reality I just love to challenge myself to the point of crippling imposter-syndrome but with the ultimate end of being better than I was when I started. I care about the end result, always.</WindowPara>
                        </Window>
                    </WindowsDiv>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}


export default Home;

const MotherDiv = styled.div``

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
        min-height: 300px;
    }

    @media(max-width: 614px) {
        padding: 2.5%;
    }

    @media(max-width: 400px) {
        min-height: 200px;
    }

`

const Name = styled.h1`
    margin: 0;
    color: #d4d4dc;
    font-size: 3rem;
    margin-bottom: 25px;



    @media(max-width: 500px) {
        font-size: 2.8rem
    }

    @media(max-width: 450px) {
        font-size: 2.4rem
    }

    @media(max-width: 400px) {
        font-size: 2.1rem;
    }

    @media(max-width: 350px) {
        font-size: 2.0rem;
    }

    @media(max-width: 325px) {
        font-size: 1.8rem;
    }
`

const Statement = styled.h3`
    margin: 0;
    color: #d4d4dc;
    font-size: 1.5rem;
    margin-bottom: 25px;

    @media(max-width: 450px) {
        font-size: 1.4rem
    }

       @media(max-width: 400px) {
        font-size: 1.3rem;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 420px;
    
`

const ContactButton = styled.div`
    background-color: #feda6a;
    margin-top: 1%;
    padding: 20px;
    max-width: 132px
    max-height: 59px;

    @media(max-width: 615px) {
        padding: 15px;
    }

    @media(max-width: 500px) {
        padding: 12px;
    }
`

// Download Resume
const DownloadResume = styled.div`
    background-color: #feda6a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 102px;
    max-width: 132px
    max-height: 59px;

    @media(max-width: 615px) {
        padding: 15px;
    }

    @media(max-width: 500px) {
        padding: 12px;
    }
`

const WindowsDiv = styled.div`
    padding: 10%;
    padding-top: 0;
    padding-bottom: 2.5%;
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
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    color:#0f2027;
    background-color: #393f4d;
    max-width: 552px;
    max-height: 179px;
    padding: 30px;


    
`

const WindowHead = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
    font-size: 1.8rem;
    color: #d4d4dc;
    border-bottom: solid 1px #feda6a;
    padding-bottom: 5px;
    width: 80%;

    @media(max-width: 500px) {
        font-size: 1.65rem
    }

    @media(max-width: 450px) {
        font-size: 1.5rem
        width: 85%;
    }

    @media(max-width: 400px) {
        font-size: 1.45rem;
        width: 100%;
    }

    @media(max-width: 350px) {
        font-size: 1.4rem;
    }

    @media(max-width: 336px) {
        font-size: 1.35rem;
        min-width:210px;
    }
`

const WindowPara = styled.p`
    padding-top: 5px;
    margin: 0;
    font-size: 1rem;
    color: #d4d4dc;

    @media(max-width: 500px) {
        font-size: 0.95rem
    }

    @media(max-width: 450px) {
        font-size: 0.9rem
    }

    @media(max-width: 400px) {
        font-size: 0.85rem;
    }

    @media(max-width: 350px) {
        font-size: 0.8rem;
    }

    @media(max-width: 325px) {
        font-size: 0.75rem;
    }
`