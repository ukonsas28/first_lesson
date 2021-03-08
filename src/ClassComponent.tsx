import React from "react";
import style from "./ClassComponent.module.scss";

interface IProps {
  data?: string;
  count: number;
}
interface IState {
  click: number;
  name: string;
}

class ClassComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { click: 0, name: "Alex" };
    this.secondHandle = this.secondHandle.bind(this);
  }

  handleClick = (a: number): any => () => {
    console.log(a);
    const { click } = this.state;
    this.setState({ click: click + a });
  };

  secondHandle() {
    const { click } = this.state;
    this.setState({ click: click - 1, name: "Ivan" });
  }

  render() {
    const { data, count } = this.props;
    const { click, name } = this.state;

    return (
      <>
        <h1>Привет, я классовый компонент</h1>
        {data}
        {count}
        <br />
        <button
          type="button"
          onClick={this.handleClick(3)}
          style={{ width: "200px", backgroundColor: "red" }}>
          push me
        </button>
        <h1>{click}</h1>
        <h1>{name}</h1>
        <button
          type="button"
          onClick={this.secondHandle}
          className={style.wrapper}>
          touch me
        </button>
      </>
    );
  }
}
export default ClassComponent;
