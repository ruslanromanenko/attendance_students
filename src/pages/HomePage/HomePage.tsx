import React, { useEffect, useState } from "react";
import { fetchJsonData, postHTTP } from "utils/network";
import type { ISchoolboyList } from "src/types/interfaces/ISchoolBoyList";
import { TableSchoolboyList } from "components/TableSchoolboyList";
import type { ILessonColumns } from "types/interfaces/ILessonColumns";
import type {
  IClassVisits,
  IClassVisitsItem,
} from "types/interfaces/IClassVisits";
import { BASE_URL } from "utils/constants";
import { ApiSettings } from "types/enums/ApiSettings";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch } from "store/hooks";
import { mainSlise } from "store/reducers/MainSlice";
import { getColumnWithMaxSumOfTitle } from "utils/utils";

export const HomePage = (): JSX.Element => {
  const [schoolboyList, setSchoolboyList] = useState<ISchoolboyList>();
  const [lessonColumns, setLessonColumns] = useState<ILessonColumns>();
  const [classVisits, setClassVisits] = useState<IClassVisits>();
  const [isPreloader, setIsPreloader] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const { setSchoolboyQuantity, setColumnWithMaxSumOfTitle } =
    mainSlise.actions;

  useEffect(() => {
    const fetchSchoolboyList = fetchJsonData(
      BASE_URL + ApiSettings.Schoolboy
    ).then((result: ISchoolboyList) => {
      setSchoolboyList(result);
      dispatch(setSchoolboyQuantity(result.Quantity));
    });

    const fetchLessonColumns = fetchJsonData(
      BASE_URL + ApiSettings.Column
    ).then((result: ILessonColumns) => {
      dispatch(
        setColumnWithMaxSumOfTitle(getColumnWithMaxSumOfTitle(result.Items))
      );

      setLessonColumns(result);
    });

    const fetchClassVisits = fetchJsonData(BASE_URL + ApiSettings.Rate).then(
      (result) => {
        setClassVisits(result);
      }
    );

    void Promise.all([
      fetchSchoolboyList,
      fetchLessonColumns,
      fetchClassVisits,
    ]).then(() => {
      setIsPreloader(false);
    });
  }, []);

  const handleClickTableCell = (
    evt: React.MouseEvent<HTMLTableCellElement>,
    classVisitsItem: IClassVisitsItem
  ): void => {
    void postHTTP(
      `${BASE_URL}${
        classVisitsItem?.Title !== undefined
          ? ApiSettings.Rate
          : ApiSettings.UnRate
      }`,
      classVisitsItem
    ).then((result) => {
      void fetchJsonData(BASE_URL + ApiSettings.Rate).then((result) => {
        setClassVisits(result);
      });
    });
  };

  return isPreloader ? (
    <CircularProgress />
  ) : (
    <TableSchoolboyList
      schoolboyList={schoolboyList?.Items}
      lessonColumns={lessonColumns?.Items}
      classVisits={classVisits?.Items}
      onClickTableCell={handleClickTableCell}
    />
  );
};
