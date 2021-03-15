import React from "react";
import Header from "../Common/Header";
import style from "./MainPage.module.scss";

class MainPage extends React.PureComponent {
  render() {
    return (
      <>
        <div className={style.main_page_wrapper}>
          <Header />
        </div>
      </>
    );
  }
}

export default MainPage;
