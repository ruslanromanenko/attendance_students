export interface ILessonColumnItem {
  Id: number;
  Title: string;
}

export interface ILessonColumns {
  Items: ILessonColumnItem[];
  Quantity: number;
}
