import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

 class Navbar extends Component {
    render() {
        return (
            <div>
                <MotherDiv>
                    <NameColumn>
                        <NameDiv>JB</NameDiv>
                    </NameColumn>
                    <NavigationColumn>
                        <LinksDiv>
                            <Link to="/">Home</Link>
                            <Link to="/Work">Work</Link>
                            <Link to="/contact">Contact</Link>
                        </LinksDiv>
                    </NavigationColumn>
                </MotherDiv>
            </div>
        )
    }
}

export default Navbar;

const MotherDiv = styled.div`
    width: 100%;
    background-color: lightblue;
    max-height: 55px;
`

const NameColumn = styled.div``

const NameDiv = styled.div``

const NavigationColumn = styled.div``

const LinksDiv = styled.div``