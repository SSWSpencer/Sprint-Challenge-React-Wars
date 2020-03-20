import React from "react";
import styled from "styled-components";

const CardContent = (props) => {

    const ContentContainer = styled.div`
    text-align: left;
    margin: 5% auto 2% 2%;
    `

    return (
        <ContentContainer>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Birth Year: {props.birth_year}</p>
        </ContentContainer>

    )


}

export default CardContent;