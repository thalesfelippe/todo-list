import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #1F1C00;
    padding: 10px;
    border: 2px solid #111;
    border-radius: 20px;
    margin: 10px 0;
    align-items: flex-start;

    input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    `
));