import React from 'react'
import styled from 'styled-components'
import {
    Container as DefaultContainer,
    Row,
    Col as DefaultCol
} from 'reactstrap'

const Container = ({ fluid = false, children }) => (
    <DefaultContainer fluid={fluid}>
        <Row className='py-3'>
            {children}
        </Row>
    </DefaultContainer>
)

export const ContainerFluid = ({ children, ...props }) => (
    <Container fluid {...props}>
        {children}
    </Container>
)

export const Col = ({ children, xs = 12, ...props }) => (
    <DefaultCol xs={xs} {...props} >
        {children}
    </DefaultCol>
)

export const VideoContainer = styled.div`
    max-width: 100%;
    overflow-x: scroll;
    flex-direction: row;
    display: flex;
`

export default Container
