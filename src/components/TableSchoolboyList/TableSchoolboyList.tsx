import React from "react";
import type { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { ISchoolboyItem } from "src/types/interfaces/ISchoolBoyItem";
import type { ILessonColumnItem } from "types/interfaces/ILessonColumns";
import type { IClassVisitsItem } from "src/types/interfaces/IClassVisits";

export const TableSchoolboyList: FC<ITableSchoolboyListProps> = ({
  schoolboyList,
  lessonColumns,
  classVisits,
  onClickTableCell,
}): JSX.Element => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "450px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                size="small"
                sx={{
                  border: 1,
                  width: 15,
                  padding: "6px 10px",
                  fontWeight: "bold",
                }}
              >
                №
              </TableCell>
              <TableCell sx={{ border: 1, fontWeight: "bold" }}>
                Ученик
              </TableCell>

              {lessonColumns?.map(({ Title, Id }) => (
                <TableCell
                  key={Id}
                  sx={{
                    border: 1,
                    width: 15,
                    padding: "6px 10px",
                    fontWeight: "bold",
                  }}
                >
                  {Title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {schoolboyList?.map((schoolBoy: ISchoolboyItem, index) => (
              <TableRow key={schoolBoy.Id}>
                <TableCell
                  size="small"
                  sx={{
                    border: 1,
                    width: 15,
                    padding: "6px 10px",
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell sx={{ border: 1 }}>
                  {schoolBoy.LastName}&nbsp;
                  {schoolBoy.FirstName}&nbsp;
                  {schoolBoy.SecondName}
                </TableCell>
                {lessonColumns?.map(({ Title, Id }) => {
                  const title = classVisits?.find(
                    ({ ColumnId, SchoolboyId }) =>
                      SchoolboyId === schoolBoy.Id && ColumnId === Id
                  )?.Title;

                  return (
                    <TableCell
                      key={Id}
                      sx={{
                        border: 1,
                        width: 15,
                        padding: "6px 10px",
                        textAlign: "center",
                      }}
                      onClick={(evt) => {
                        onClickTableCell(evt, {
                          Title: title !== undefined ? undefined : "H",
                          SchoolboyId: schoolBoy.Id,
                          ColumnId: Id,
                        });
                      }}
                    >
                      {title}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

interface ITableSchoolboyListProps {
  schoolboyList: ISchoolboyItem[] | undefined;
  lessonColumns: ILessonColumnItem[] | undefined;
  classVisits: IClassVisitsItem[] | undefined;
  onClickTableCell: (
    e: React.MouseEvent<HTMLTableCellElement>,
    issuingPasse: IClassVisitsItem
  ) => void;
}
