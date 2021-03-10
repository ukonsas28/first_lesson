import React from "react";
import style from "./CustomCounter.module.scss";
import Button from "./Button";

interface IProps {
  title: string;
  limit: number;
}
interface IState {
  count: number;
  increment: number;
  decrement: number;
}

class CustomCounter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0, increment: 1, decrement: 1 };
  }

  incrementHandle = (increment: number): any => () => {
    const { count } = this.state;
    this.setState({ count: count + increment });
  };

  decrementHandle = (decrement: number): any => () => {
    const { count } = this.state;
    this.setState({ count: count - decrement });
  };

  render() {
    const { title, limit } = this.props;
    const { count, increment, decrement } = this.state;
    return (
      <>
        <div className={style.wrapper}>
          <h1>Выбранный товар {title}</h1>
          <div className={style.card}>
            <Button
              title={`Убрать ${decrement} ${title}`}
              count={count}
              handler={this.decrementHandle(decrement)}
              type="decrement"
              limit={limit}
            />
            <h1>{count}</h1>
            <Button
              title={`Добавить ${increment} ${title}`}
              count={count}
              handler={this.incrementHandle(increment)}
              type="increment"
              limit={limit}
            />
          </div>
        </div>
      </>
    );
  }
}
export default CustomCounter;