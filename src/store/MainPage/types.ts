export interface IMainPage {
  data: any[];
  posts: IPost[];
}

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
