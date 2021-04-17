import TState from "../rootType";

// eslint-disable-next-line import/prefer-default-export
export const getSliderData = (state: TState) => state.main.data;

export const getPostData = (state: TState) => state.main.posts;
