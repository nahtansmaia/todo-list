import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content:space-between;

    div {
        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
            font-size: calc(0.75em + 1vmin);
        }

        input {
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            vert
        }
    }

    div {

        button { 
            background: red;
            border-radius: 15px;
            border: none;
            opacity: 1;
    
            span {
                color: #FFF;
                font-size: calc(1em + 1vmin);
            }
        }
    
        button:hover {
            background: red;
            border-radius: 15px;
            opacity: 0.8;
            cursor: pointer;
        }
    }
    
    
`));