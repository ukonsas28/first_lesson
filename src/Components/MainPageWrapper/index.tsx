import React from "react";
import Header from "../Header";
import style from "./MainPageWrapper.module.scss";

class MainPageWrapper extends React.PureComponent {
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

export default MainPageWrapper;
