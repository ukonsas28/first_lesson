import React from "react";
import style from "./test.module.scss";
import Test2 from "./Test2";

interface IProps {
  data: {
    a: number;
    b: number;
  };
}
interface IState {
  result: number;
  value: string;
}

class Test extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { result: 0, value: "" };
    this.test = this.test.bind(this);
  }

  test2 = (a: any) => {
    console.log(a, "1");
    const { result } = this.state;
    this.setState({ value: a });
  };

  test(a: any) {
    console.log(a, "2");
    const { result } = this.state;
    this.setState({ value: a });
  }

  render() {
    const {
      data: { a, b },
    } = this.props;
    const { result, value } = this.state;
    return (
      <>
        <Test2 func={this.test} />
        <Test2 func={this.test2} />
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
        <h2>{value}</h2>
      </>
    );
  }
}

export default Test;
