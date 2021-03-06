import styled from 'styled-components';
import { fadeIn } from '../../styles/animation.js'


export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hiddend;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    ${fadeIn()} 
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    padding-top: 8px;
    displat-items: center;
    padding-top: 8px;
    & svg{
        margin-right: 4px;  
    }
    background-color: transparent;
    border: 0px;
`
