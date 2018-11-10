import React from 'react';
import styled from 'styled-components'
import { Button as DefaultButton } from 'reactstrap';

const Button = ({ children, onClick }) => (
    <DefaultButton onClick={onClick}>
        { children }
    </DefaultButton>
);

export const ButtonPrimary = styled(DefaultButton)`
    color: #000;
    background-color: #fff;

    img {
        max-height: 25px;
        margin-right: 10px;
    }

    &:hover, &:active {
        color: #374854;
        border-color: #374854;
        background-color: #fff;
    }
`

export default Button;