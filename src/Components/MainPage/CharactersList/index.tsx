import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCharactersData } from "../../../store/MainPage/selectors";
import CharactersItem from "./CharactersItem";

const CharactersList: FC = () => {
  const hero = useSelector(getCharactersData);
  return (
    <>
      <h1>Герои</h1>
      {hero.map((el: any) => (
        <CharactersItem data={el} key={el.id} />
      ))}
    </>
  );
};

export default CharactersList;
