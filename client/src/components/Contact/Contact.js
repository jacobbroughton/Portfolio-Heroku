import React, { Component } from 'react'
import Footer from "../Footer/Footer"
import styled from "styled-components"

class Contact extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <ContactHeadDiv>
                        <ContactHead>Contact Me!</ContactHead>
                    </ContactHeadDiv>
                    <hr/>
                    <ContactMeDiv>

                        <ContactInfoDiv>
                            <NameDiv>
                                <Name>Jacob Broughton</Name>
                            </NameDiv>
                            {/* <GitHubDiv>
                                <Github href="https://github.com/jlbroughton88">My Github</Github>
                            </GitHubDiv> */}
                            <PhoneNumDiv>
                                <PhoneNum>(704)-770-8371</PhoneNum>
                            </PhoneNumDiv>
                            <EmailDiv>
                                <Email href="mailto:jlbroughton88@gmail.com">Jlbroughtondev@gmail.com</Email>
                            </EmailDiv>

                        </ContactInfoDiv>
                    </ContactMeDiv>

                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Contact

const MotherDiv = styled.div`
    height: 100%;
`

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #1d1e22;

`

const ContactMeDiv = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 250px;
    width: 400px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    background-color: #393f4d;
    color: #d4d4dc;
    border-radius: 5px;

    @media(min-width: 550px) {
        height: 350px
        width: 440px;
    }

    @media(max-width: 475px) {
        height: 215px;        
        width: 375px;
    }

    @media(max-width: 435px) {
        justify-content: space-evenly
        // height: 190px; 
        width: 365px;
    }

    @media(max-width: 414px) {
        justify-content: space-evenly;
        // height: 155px; 
        width: 325px;
    }

`

const ContactHeadDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    min-height: 110px;

`

const ContactHead = styled.h2`
    font-size: 3rem;
    margin: 0;
    @media(max-width: 475px) { font-size: 2.75rem;}
    @media(max-width: 415px) { font-size: 2.50rem;}
    color: #d4d4dc;
`

const ContactInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 70%;

    
`

// Name
const NameDiv = styled.div``

const Name = styled.p`
    font-size: 1.5rem;
    margin: 0;
    @media(min-width: 550px) { font-size: 2.35rem; }
    @media(max-width: 549px) { font-size: 2.15rem }
    @media(max-width: 435px) { font-size: 2.05rem }
`

// Phone Number
const PhoneNumDiv = styled.div``

const PhoneNum = styled.p`
    font-size: 1.25rem;
    margin: 0;
    @media(min-width: 550px) { font-size: 1.85rem; }
    @media(max-width: 549px) { font-size: 1.6rem }
    @media(max-width: 435px) { font-size:  1.45rem }
`

// Email
const EmailDiv = styled.div``

const Email = styled.a`
    font-size: 1.25rem;
    margin: 0;
    text-decoration: none;
    color: #feda6a;
    transition: all .3s ease-out;
    :hover{ color: #879FFF; }
    @media(min-width: 550px) { font-size: 1.5rem; }
    @media(max-width: 549px) { font-size: 1.4rem }
    @media(max-width: 435px) { font-size:  1.25rem }
`
