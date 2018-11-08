import React from 'react'
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

export const ContainerFluid = ({ children }) => (
    <Container fluid>
        {children}
    </Container>
)

export const Col = ({ children, xs = 12, ...props }) => (
    <DefaultCol xs={xs} {...props} >
        {children}
    </DefaultCol>
)

export default Container
