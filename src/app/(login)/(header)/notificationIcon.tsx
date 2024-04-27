import React from "react";

const NotificationIcon = ({
  isClicked,
  isRead,
  width = 14,
  height = 20,
}: {
  isClicked: boolean;
  isRead: boolean;
  width?: number;
  height?: number;
}) => {
  if(isClicked) {
    if(isRead)
      return (
        <svg width={width} height={height} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-text" d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20Z" />
        </svg>
      );
    else 
      return (
        <svg width={width} height={height} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-text" d="M8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V1.825C9.33333 2.15833 9.20833 2.50833 9.125 2.875C9.04167 3.24167 9 3.61667 9 4C9 5.38333 9.4875 6.5625 10.4625 7.5375C11.4375 8.5125 12.6167 9 14 9V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM14 7C13.1667 7 12.4583 6.70833 11.875 6.125C11.2917 5.54167 11 4.83333 11 4C11 3.16667 11.2917 2.45833 11.875 1.875C12.4583 1.29167 13.1667 1 14 1C14.8333 1 15.5417 1.29167 16.125 1.875C16.7083 2.45833 17 3.16667 17 4C17 4.83333 16.7083 5.54167 16.125 6.125C15.5417 6.70833 14.8333 7 14 7Z" />
        </svg>
      );
  }
  else {
    if(isRead)
      return (
        <svg width={width} height={height} viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-text/40 max-[500px]:fill-text" d="M1.02051 17.0408C0.737174 17.0408 0.499674 16.9449 0.308008 16.7533C0.116341 16.5616 0.0205078 16.3241 0.0205078 16.0408C0.0205078 15.7574 0.116341 15.5199 0.308008 15.3283C0.499674 15.1366 0.737174 15.0408 1.02051 15.0408H2.02051V8.04077C2.02051 6.65744 2.43717 5.42827 3.27051 4.35327C4.10384 3.27827 5.18717 2.5741 6.52051 2.24077V1.54077C6.52051 1.1241 6.66634 0.769938 6.95801 0.478271C7.24967 0.186605 7.60384 0.0407715 8.02051 0.0407715C8.43717 0.0407715 8.79134 0.186605 9.08301 0.478271C9.37467 0.769938 9.52051 1.1241 9.52051 1.54077V2.24077C10.8538 2.5741 11.9372 3.27827 12.7705 4.35327C13.6038 5.42827 14.0205 6.65744 14.0205 8.04077V15.0408H15.0205C15.3038 15.0408 15.5413 15.1366 15.733 15.3283C15.9247 15.5199 16.0205 15.7574 16.0205 16.0408C16.0205 16.3241 15.9247 16.5616 15.733 16.7533C15.5413 16.9449 15.3038 17.0408 15.0205 17.0408H1.02051ZM8.02051 20.0408C7.47051 20.0408 6.99967 19.8449 6.60801 19.4533C6.21634 19.0616 6.02051 18.5908 6.02051 18.0408H10.0205C10.0205 18.5908 9.82467 19.0616 9.43301 19.4533C9.04134 19.8449 8.57051 20.0408 8.02051 20.0408ZM4.02051 15.0408H12.0205V8.04077C12.0205 6.94077 11.6288 5.99911 10.8455 5.21577C10.0622 4.43244 9.12051 4.04077 8.02051 4.04077C6.92051 4.04077 5.97884 4.43244 5.19551 5.21577C4.41217 5.99911 4.02051 6.94077 4.02051 8.04077V15.0408Z" />
        </svg>
      );
    else
      return (
        <svg width={width} height={height} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-text/40 max-[500px]:fill-text" d="M8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V1.825C9.31667 2.19167 9.18333 2.56667 9.1 2.95C9.01667 3.33333 8.98333 3.725 9 4.125C8.83333 4.09167 8.67083 4.0625 8.5125 4.0375C8.35417 4.0125 8.18333 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15H12V8.575C12.3 8.70833 12.6208 8.8125 12.9625 8.8875C13.3042 8.9625 13.65 9 14 9V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM14 7C13.1667 7 12.4583 6.70833 11.875 6.125C11.2917 5.54167 11 4.83333 11 4C11 3.16667 11.2917 2.45833 11.875 1.875C12.4583 1.29167 13.1667 1 14 1C14.8333 1 15.5417 1.29167 16.125 1.875C16.7083 2.45833 17 3.16667 17 4C17 4.83333 16.7083 5.54167 16.125 6.125C15.5417 6.70833 14.8333 7 14 7Z" />
        </svg>
      );
  }
};

export default NotificationIcon;