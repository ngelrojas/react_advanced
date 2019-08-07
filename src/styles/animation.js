import { css, keyframes } from 'styled-components'


const fadeInkyframes = keyframes`
    from{
        filter: blur(5px);
        opacity: 0px;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({time = '1s', type = 'ease'} = {}) =>
    css`animation: ${time} ${fadeInkyframes} ${type};`
