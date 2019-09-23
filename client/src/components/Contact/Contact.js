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

                            <PhoneNumDiv>
                                <PhoneNum>(704)-770-8371</PhoneNum>
                            </PhoneNumDiv>
                            <EmailDiv>
                                <Email href="mailto:jlbroughton88@gmail.com">Jlbroughton88@gmail.com</Email>
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
    height: 100vh;

    @media(max-width: 450px) {
        height: 85vh;        
    }


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
    margin-top: 40px;
    height: 250px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    background-color: #393f4d;
    color: #d4d4dc;

    @media(max-width: 475px) {
        height: 215px;        
        width: 375px;
    }

    @media(max-width: 435px) {
        height: 190px; 
        width: 365px;
    }

    @media(max-width: 400px) {
        height: 155px; 
        width: 325px;
    }

`

const ContactHeadDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    
`

const ContactHead = styled.h2`
    font-size: 3rem;
    margin: 0;
    @media(max-width: 475px) { font-size: 2.75rem;}
    color: #d4d4dc;
`

const ContactInfoDiv = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    
`

// Name
const NameDiv = styled.div``

const Name = styled.p`
    font-size: 1.5rem;
    margin: 0;
`

// Phone Number
const PhoneNumDiv = styled.div``

const PhoneNum = styled.p`
    font-size: 1.25rem;
    margin: 0;
`

// Email
const EmailDiv = styled.div``

const Email = styled.a`
    font-size: 1.25rem;
    margin: 0;
    text-decoration: none;
    color: #feda6a;

    :hover{
        color: #879FFF;
    }
`