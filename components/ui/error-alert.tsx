import { FC, ReactNode } from "react";
import classes from "./error-alert.module.css";

export type ErrorAlertType = {
  children: ReactNode;
};
const ErrorAlert: FC<ErrorAlertType> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
