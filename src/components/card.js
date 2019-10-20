import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

const CardContainer = styled.div`
min-width: 260px;
width:390px;
height: 300px;
background-color:rgba(0, 0, 0, 0.5);
background: linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
background: url(${props => props.image}) ; /*pass the image in the props*/
color: white;   
background-size: cover;
border-radius:4px;
padding: 20px;
margin: 10px;
cursor: pointer;
font-family: 'Raleway', sans-serif;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
&:hover {
    transform: scale(1.1,1.1);
    box-shadow: 0 10px 20px rgba (0,0,0, 0.5);

    h3 {
        transform: translateY(-10px)
    }

    p {
        opacity: 0.5;
    }
}

@media (max-width: 768px) {
/* width: 280px; */
}

@media (max-width: 640px) {
/* width: 100%; */
}

`

const Title = styled.h3 `
text-transform: uppercase;
font-size: 26px;
text-align: left;
color: #f5f5f5;
margin-bottom: 4px;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
text-shadow: rgba(0, 0, 0, 0.85) 0px 10px 20px;
font-family: 'Raleway', sans-serif;
`

const Text = styled.p  `
font-size: 20px;
font-weight: 400;
text-align: left;
position: relative;
text-shadow: rgba(0, 0, 0, 0.85) 0px 10px 20px;
color: white;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
font-family: 'Raleway', sans-serif;
`

const Card = props => (
    <Link to={props.link}>
        <CardContainer image={props.image}>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </CardContainer>
    </Link>
)

export default Card 