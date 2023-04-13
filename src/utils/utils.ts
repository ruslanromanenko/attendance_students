import type { ILessonColumnItem } from "types/interfaces/ILessonColumns";

export const getColumnWithMaxSumOfTitle = (
  lessonColumns: ILessonColumnItem[]
): ILessonColumnItem => {
  return lessonColumns?.reduce(
    (acc, lessonColumn) => {
      const summTitle = calcStringValue(lessonColumn.Title);
      const summTitleAcc = calcStringValue(acc.Title);
      return summTitleAcc > summTitle ? acc : lessonColumn;
    },
    { Id: 0, Title: "" }
  );
};

const calcStringValue = (value: string): number =>
  value.split("/").reduce((acc, item) => acc + Number(item), 0);
