import ReactDOM from "react-dom";

import classes from "./notification.module.css";

function Notification(props: any) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  // Check if the element exists before creating a portal
  const notificationsElement = document.getElementById("notifications");
  if (!notificationsElement) {
    // Handle the case where the element with the specified ID was not found.
    return null; // or display an error message
  }

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationsElement
  );
}

export default Notification;
