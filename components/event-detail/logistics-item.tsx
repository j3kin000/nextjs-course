import { FC, ReactElement, ReactNode } from "react";
import classes from "./logistics-item.module.css";

export type LogisticsItemType = {
  Icon: FC;
  children: ReactNode;
};
const LogisticsItem: FC<LogisticsItemType> = ({ Icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
