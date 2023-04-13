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
  const [isErrorApi, setIsErrorApi] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { setSchoolboyQuantity, setColumnWithMaxSumOfTitle } =
    mainSlise.actions;

  useEffect(() => {
    const fetchSchoolboyList = fetchJsonData<ISchoolboyList>(
      BASE_URL + ApiSettings.Schoolboy
    ).then((result) => {
      console.log(typeof result);

      if (typeof result === "object") {
        setSchoolboyList(result);
        dispatch(setSchoolboyQuantity(result.Quantity));
      } else if (!result) {
        setIsErrorApi(true);
      }
    });

    const fetchLessonColumns = fetchJsonData<ILessonColumns>(
      BASE_URL + ApiSettings.Column
    ).then((result) => {
      if (typeof result === "object") {
        dispatch(
          setColumnWithMaxSumOfTitle(getColumnWithMaxSumOfTitle(result.Items))
        );

        setLessonColumns(result);
      } else if (!result) {
        setIsErrorApi(true);
      }
    });

    const fetchClassVisits = fetchJsonData<IClassVisits>(
      BASE_URL + ApiSettings.Rate
    ).then((result) => {
      if (typeof result === "object") {
        setClassVisits(result);
      } else if (!result) {
        setIsErrorApi(true);
      }
    });

    void Promise.all([
      fetchSchoolboyList,
      fetchLessonColumns,
      fetchClassVisits,
    ]).then(
      (value) => {
        setIsPreloader(false);
      },
      (reason) => {
        console.error(reason);
      }
    );
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
      void fetchJsonData<IClassVisits>(BASE_URL + ApiSettings.Rate).then(
        (result) => {
          if (typeof result === "object") {
            setClassVisits(result);
          } else if (!result) {
            setIsErrorApi(true);
          }
        }
      );
    });
  };

  const RenderContent = (isError: boolean): JSX.Element =>
    isError ? (
      <h2>Response Error!</h2>
    ) : (
      <TableSchoolboyList
        schoolboyList={schoolboyList?.Items}
        lessonColumns={lessonColumns?.Items}
        classVisits={classVisits?.Items}
        onClickTableCell={handleClickTableCell}
      />
    );

  return isPreloader ? <CircularProgress /> : RenderContent(isErrorApi);
};
