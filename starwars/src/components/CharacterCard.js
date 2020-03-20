import React from "react";
import styled from "styled-components";
import CardContent from "./CardContent";


const CharacterCard = (props) => {

    const NewCard = styled.div`
    background: #AAC8E4;
    width: 20%;
    margin: 2%;
    border: 3px solid black;
    border-radius: 10px;
    text-transform: capitalize;
    `

    const CardName = styled.div`
    border-bottom: 3px solid black;
    `

  console.log(props);
  return(
    <NewCard>
        <CardName>
            <h3>{props.name}</h3>
        </CardName>
        <CardContent height={props.height} mass={props.mass} hair_color={props.hair_color} skin_color={props.skin_color} birth_year={props.birth_year}/>
    </NewCard>
  )
}

export default CharacterCard;


