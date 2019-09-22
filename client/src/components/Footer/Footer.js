import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import email from "../images/socialMediaIcons/email.png"
import faceBook from "../images/socialMediaIcons/facebook.png"
import linkedIn from "../images/socialMediaIcons/linkedin.png"
import instagram from "../images/socialMediaIcons/instagram.png"
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <SocialRow>
                        <SocialDiv>
                            <ImgLink href="mailto:nfo@newageoilsllc.com"><Img src={email} alt="Email Us!" /></ImgLink>

                            <ImgLink href="https://www.facebook.com"><Img src={faceBook} alt="" /></ImgLink>

                            <ImgLink href="https://www.linkedin.com"><Img src={linkedIn} alt="" /></ImgLink>

                            <ImgLink href="https://www.instagram.com"><Img src={instagram} alt="" /></ImgLink>
                        </SocialDiv>
                    </SocialRow>
                    <hr />
                    <NavigateRow>
                        <LinkDiv>
                            <Link className="footerLink" to="/">Home</Link>
                            <Link className="footerLink" to="/work">Work</Link>
                            <Link className="footerLink" to="/contact">Contact</Link>
                        </LinkDiv>
                    </NavigateRow>
                </MainDiv>
            </MotherDiv>
        )
    }
}

export default Footer;

const MotherDiv = styled.div`
    max-height: 200px;
    background-color: #393f4d;
    border-top: solid 1px #879FFF;
`

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;

`

const SocialRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const NavigateRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const LinkDiv = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const SocialDiv = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const ImgLink = styled.div`
    height: 100;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;   
    margin-top: 0;
    margin-bottom: 0;
    align-self: center;
`

const Img = styled.img`
    height: auto;
    width: 65%;
    margin: 5%;
`
