import network from "../../network";

export enum MainPageActionType {
  getPostData = "GET_SLIDER_DATA",
}

export const getPostDataAction = () => {
  return async (dispatch: any) => {
    const data = await network.getRequest("posts");
    dispatch({
      type: MainPageActionType.getPostData,
      payload: data,
    });
  };
};
