import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

const CardContainer = styled.div`
min-width: 260px;
width:320px;
height: 300px;
text-decoration: none;
background-color:rgba(0, 0, 0, 0.5);
background: linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
background: url(${props => props.image}) ; /*pass the image in the props*/
color: white; 
background-size: cover;
border-radius:4px;
padding: 15px;
// margin: 10px;
cursor: pointer;
font-family: 'Raleway', sans-serif;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
&:hover {
    transform: scale(1.1,1.1);
    box-shadow: 0 10px 20px rgba (0,0,0, 0.5);

    h3 {
        transform: translateY(-6px)
    }

    p {
        opacity: 0.5;
    }
}

@media (max-width: 768px) {
/* width: 280px; */
}

@media (max-width: 640px) {
/* width: 80%; */
}

`

const Title = styled.h3 `
font-size: 22px;
text-transform: uppercase;
text-decoration: none;
text-align: left;
color: #ffffff;
font-weight: 800;
margin-bottom: 4px;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
font-family: 'Raleway', sans-serif;
`

const Text = styled.h6  `
text-transform: uppercase;
text-decoration: none;
font-size: 14x;
font-weight: 700;
text-align: left;
position: relative;
color: #ffffff;
opacity: 0.8;
transition: 0.8s cubic-bezier(0.1, 1, 0.22, 1);
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