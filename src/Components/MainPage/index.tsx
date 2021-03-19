import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import style from "./MainPage.module.scss";
import Slider from "./Slider";
import TestComponent from "./TestComponent";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: true };
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div className={style.main_page_wrapper}>
          <Header />
          <button
            type="button"
            onClick={() => this.setState({ value: !value })}>
            TOUCH
          </button>
          {value && <TestComponent />}
          {/* <Slider /> */}
          <Footer />
        </div>
      </>
    );
  }
}

export default MainPage;
