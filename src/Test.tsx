import React from "react";
import style from "./test.module.scss";

interface IProps {
  data: {
    a: number;
    b: number;
  };
}
interface IState {
  result: number;
}

class Test extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { result: 0 };
    this.test = this.test.bind(this);
  }

  test2 = () => {
    const { result } = this.state;
    this.setState({ result: result - 1 });
  };

  test() {
    const { result } = this.state;
    this.setState({ result: result + 1 });
  }

  render() {
    const {
      data: { a, b },
    } = this.props;
    const { result } = this.state;
    return (
      <>
        <button
          type="button"
          onClick={this.test}
          style={{ width: "100px", height: "100px" }}>
          push me
        </button>
        <button
          type="button"
          onClick={this.test2}
          style={{ width: "100px", height: "100px" }}>
          touch me
        </button>
        <p>{a}</p>
        <p>{b}</p>
        <h1 className={style.test}>{result}</h1>
      </>
    );
  }
}

export default Test;
