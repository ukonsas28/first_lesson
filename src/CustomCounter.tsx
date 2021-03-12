import React from "react";
import ProductCard from "./ProductCard";
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

  // static getDerivedStateFromProps(nextProps: IProps, prevState: IState): any {
  //   console.log(nextProps);
  //   console.log(prevState);
  //   if (prevState.count === 3) {
  //     return { increment: 2 };
  //   }
  //   return {};
  // }

  // shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
  //   console.log(nextProps);
  //   console.log(nextState);
  //   const { count } = this.state;
  //   if (nextState.count !== count) {
  //     return false;
  //   }
  //   return true;
  // }
  // componentDidUpdate(prevProps: IProps, prevState: IState) {
  //   console.log(prevProps);
  //   console.log(prevState);
  // }

  incrementHandle = (increment: number) => () => {
    const { count } = this.state;
    this.setState({ count: count + increment });
  };

  decrementHandle = (decrement: number) => () => {
    const { count } = this.state;
    this.setState({ count: count - decrement });
  };

  timer = () => {
    console.log("timer");
    const { title } = this.props;
    setTimeout(() => {
      console.log(title);
    }, 3000);
  };

  render() {
    console.log("render");
    const { title, limit } = this.props;
    const { count, increment, decrement } = this.state;

    return (
      <>
        {this.timer()}

        <ProductCard title={title} count={count}>
          <Button
            title={`Убрать ${decrement} ${title}`}
            count={count}
            handler={this.decrementHandle(decrement)}
            type="decrement"
            limit={limit}
          />
          <Button
            title={`Добавить ${increment} ${title}`}
            count={count}
            handler={this.incrementHandle(increment)}
            type="increment"
            limit={limit}
          />
        </ProductCard>
      </>
    );
  }
}
export default CustomCounter;
