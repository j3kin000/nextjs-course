import Link from "next/link";
import { FC, ReactNode } from "react";
import classes from "./button.module.css";
import { Url } from "next/dist/shared/lib/router/router";
export type ButtonType = {
  children: ReactNode;
  link?: Url | null;
  onClickHandler?: () => void;
};
const Button: FC<ButtonType> = ({ link, children, onClickHandler }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClickHandler} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
