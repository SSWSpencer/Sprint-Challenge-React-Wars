import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function MovieList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/?format=json')
    .then(response =>{
      console.log(response.data)
      setData(response.data.results);
      
    })
    .catch(error => {
      console.log("the data was not returned", error);
    })
  }, [])

  const CardContainer = styled.div`
  width: 80%;
  margin: 4% auto 1% auto;
  display: flex;
  flex-wrap: wrap;
  `

  return (
    <CardContainer>
      {data.map(item => {
        return (
          <CharacterCard 
          name={item.name}
          height={item.height}
          mass={item.mass}
          hair_color={item.hair_color}
          skin_color={item.skin_color}
          birth_year={item.birth_year}/>
        )
      })}
    </CardContainer>  
  );
}

