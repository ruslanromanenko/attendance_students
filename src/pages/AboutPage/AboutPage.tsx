import React from "react";
import { useAppSelector } from "store/hooks";
import classes from "./AboutPage.module.scss";

export const AboutPage = (): JSX.Element => {
  const { schoolboyQuantity, columnWithMaxSumOfTitle } = useAppSelector(
    (state) => state.mainReducer
  );

  return (
    <div className={classes.aboutPageWrap}>
      <h1>About Page</h1>
      <p>
        Tracking attendance is an essential aspect of managing a school.
        Traditionally, attendance was taken manually, which is a time-consuming
        and error-prone process. However, with the advancement of technology,
        schools can now use digital tools to automate attendance tracking.
      </p>
      <p>
        An application for attendance schoolboy is a digital solution that
        enables teachers to quickly and accurately track the attendance of their
        students. With this application, teachers can record attendance
        electronically, reducing the need for manual data entry. Additionally,
        the application can generate attendance reports that provide valuable
        insights into student attendance patterns, helping teachers identify
        students who may be at risk of falling behind.
      </p>
      <p>
        The application can also be customized to fit the specific needs of a
        school, including setting attendance policies, managing student
        absences, and sending notifications to parents about their child`s
        attendance. Moreover, the application can be accessed from any device
        with an internet connection, making it convenient for teachers to take
        attendance on-the-go.
      </p>
      <p>
        Overall, an application for attendance schoolboy can greatly benefit
        schools by streamlining the attendance tracking process, reducing
        errors, and providing valuable insights into attendance patterns. By
        using digital tools to automate attendance tracking, teachers can focus
        on their core responsibilities of teaching and mentoring students.
      </p>

      <h4>Amount of students: {schoolboyQuantity}</h4>
      <h4>
        Object with max summ of title: {JSON.stringify(columnWithMaxSumOfTitle)}
      </h4>
    </div>
  );
};
