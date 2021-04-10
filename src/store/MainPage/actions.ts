export enum MainPageActionType {
  getSliderData = "GET_SLIDER_DATA",
}

export const getSliderDataAction = (data: any) => {
  return {
    type: MainPageActionType.getSliderData,
    payload: data,
  };
};
