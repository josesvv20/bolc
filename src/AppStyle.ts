import styled from 'styled-components';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

export const SVVLogo = styled(Logo)`
    height: 20px
    width: 20px
`;

export const Nav = styled.nav`
    display: flex;
    padding: 2rem;
    color: #ccc;
    background-color: #45515A; 
`;

export const UL = styled.ul`
    display: flex;
    width: 50%;
    margin: auto;
    list-style: none;
`;

export const LINK = styled(Link)`
    color: #ccc;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #ccc;
    text-transform: uppercase;
    text-decoration: none;
    
    &:hover {
        color: #ff9600;
    }
`;

export const PageLayout = styled.div`
    padding: 2rem;
`;

export const ElementLayout = styled.div`
    display: flex;
`;

export const Element = styled.div`
    padding: 1rem;
    margin: 1rem 1rem 1rem 0;
    border-radius: 1rem;
    background-color: #eee;
`;

export const MainTitle = styled.h1`
    font-size: 2rem;
`;
export const SecondaryTitle = styled.h2`
    font-size: 1rem;
    font-weight: 100;
`;


