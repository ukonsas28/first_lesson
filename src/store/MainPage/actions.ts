import { Dispatch } from "react";
import network from "../../network";
import { IPost } from "./types";

export enum MainPageActionType {
  getSliderData = "GET_SLIDER_DATA",
  fetchPosts = "FETCH_POSTS",
  fetchCharacters = "FETCH_CHARACTERS",
}

export const getSliderDataAction = (data: any) => {
  return {
    type: MainPageActionType.getSliderData,
    payload: data,
  };
};

export const fetchPostDataAction = () => {
  return async (dispatch: Dispatch<{ type: string; payload: IPost[] }>) => {
    const { data } = await network.getRequest("/posts");
    dispatch({
      type: MainPageActionType.fetchPosts,
      payload: data,
    });
  };
};

export const fetchCharactersDataAction = () => {
  return async (dispatch: Dispatch<{ type: string; payload: any }>) => {
    const { data } = await network.getRequest("/character");
    dispatch({
      type: MainPageActionType.fetchCharacters,
      payload: data.results,
    });
  };
};
