import styled from 'styled-components';
import { keyframes } from 'styled-components';


const animate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div``
export const ImageWrapper = styled.div`
max-height: 700px;
min-height: 700px;
`
export const CurrentImage = styled.img`
max-height: 80%;
max-width: 100%;
`
export const LoadingImage = styled.div`
display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #A06CD5;
    border-color: #A06CD5 transparent #A06CD5 transparent;
    animation: ${animate} 8.2s linear infinite;
  }
`

export const Empty = styled.p`
`
export const Wait = styled.p``