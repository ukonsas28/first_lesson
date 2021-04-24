export interface IMainPage {
  data: any[];
  posts: IPost[];
  characters: any[];
}

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
