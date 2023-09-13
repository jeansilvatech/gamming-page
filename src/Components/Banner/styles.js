import styled from "styled-components";
import image from '../../assets/lol.png'
export const BannerBg = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
`
export const ContentGame = styled.div`
    width: 50%;
    height: 65%;
    position: absolute;
    left: 0;
    top:0;
    padding:100px 0 0 130px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    background: linear-gradient(180deg, #00001C 0%, rgba(0, 0, 28, 0.65) 57.29%, rgba(0, 0, 28, 0.00) 100%);
`
export const NameGame = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 1.2px;
`
export const TagGroup = styled.div`
    display: flex;
`
export const Tag = styled.p`
    height: 30px;
    padding: 5px 10px;
    border-radius: 20px;
    background: #00001C;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 0.45px;
    margin: 5px;
`