import React from "react";
import style from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";
import UserInfo from "./UserInfo";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <header className={style.header_wrapper}>
          <Logo />
          <HeaderNavigation />
          <UserInfo />
        </header>
      </>
    );
  }
}

export default Header;
