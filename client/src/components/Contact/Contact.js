import React, { Component } from 'react'
import Footer from "../Footer/Footer"
import styled from "styled-components"

class Contact extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <ContactMeDiv>
                        <ContactHead>Contact Me!</ContactHead>
                        <ContactInfoDiv>
                            <NameDiv>
                                <Name>Jacob Broughton</Name>
                            </NameDiv>

                            <PhoneNumDiv>
                                <PhoneNum>(704)-770-8371</PhoneNum>
                            </PhoneNumDiv>
                            <EmailDiv>
                                <Email>Jlbroughton88@gmail.com</Email>
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

const MotherDiv = styled.div``

const MainDiv = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    padding: 10%;
`

const ContactHead = styled.h2``

const ContactInfoDiv = styled.div``

// Name
const NameDiv = styled.div``

const Name = styled.p``

// Phone Number
const PhoneNumDiv = styled.div``

const PhoneNum = styled.p``

// Email
const EmailDiv = styled.div``

const Email = styled.p``