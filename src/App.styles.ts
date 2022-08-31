import styled from 'styled-components';
import banner from '../src/assets/img/todo-background.svg';

export const Container = styled.div`
    background-color: #222222;
    color: #797A81;
    min-height: 100vh;
`;

export const Area = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    max-width: 900px;
    padding: 10px;
    border-radius: 0px 0px 38px 38px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    font-size: 60px;
    text-align: center;
    border-bottom: 5px solid #444;
    border-radius: 0px 0px 5px 5px;
    padding-bottom: 20px;
    text-shadow: 1px 1px 1px #000,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #000,
        1px 18px 6px rgba(16,16,16,0.4),
        1px 22px 10px rgba(16,16,16,0.2),
        1px 25px 35px rgba(16,16,16,0.2),
        1px 30px 60px rgba(16,16,16,0.4);
`;