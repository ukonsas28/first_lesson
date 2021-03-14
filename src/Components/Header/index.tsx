import React from "react";
import style from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <header className={style.header_wrapper}>
          <div>logo</div>
          <HeaderNavigation />
          <div>userinfo</div>
        </header>
      </>
    );
  }
}

export default Header;
