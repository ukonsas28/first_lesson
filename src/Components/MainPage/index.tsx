import React from "react";
import PageWrapper from "../Common/PageWrapper";
import CharactersList from "./CharactersList";
import Posts from "./Posts";

const MainPage = () => {
  return (
    <>
      <PageWrapper>
        {/* <Posts /> */}
        <CharactersList />
      </PageWrapper>
    </>
  );
};

export default MainPage;
