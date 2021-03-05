import React from "react";

export default class Test2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { func }: any = this.props;
    return (
      <>
        <input type="text" onChange={(e: any) => func(e.currentTarget.value)} />
      </>
    );
  }
}
