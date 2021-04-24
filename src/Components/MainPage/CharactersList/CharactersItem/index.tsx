import React, { FC } from "react";
import style from "./CharactersItem.module.scss";

const CharactersItem: FC<any> = ({ data }: any) => {
  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <img src={data.image} alt={data.name} />
      </div>
    </>
  );
};

export default CharactersItem;
