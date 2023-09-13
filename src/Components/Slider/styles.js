import styled from "styled-components";

export const PosterGroup = styled.div`
    width: 100vw;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0, 0, 28, 0.00) 0%, #00001C 100%);
    position: absolute;
    left: 0;
    bottom: 0;

`
export const SliderDiv = styled.div`
    object-fit: cover;
`
export const Poster = styled.img`
    width: 187.5px;
    height: 250px;
    border-bottom: 6px solid transparent;
    cursor: pointer;
    transition: 1s;
    &:hover{
        border-bottom: 6px solid #fff;
    }
`