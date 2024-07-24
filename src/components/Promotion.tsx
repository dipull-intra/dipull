"use client";

import Link from "next/link";
import React from "react";

import { useAuth, useUserInfo } from "@/hooks";

import Mover from "./Mover";

const Promotion = ({
  showLogin = false,
}: {
    showLogin?: boolean;
  }) => {
  const user = useUserInfo();
  const { login } = useAuth();

  return (
    <div className="flex flex-col gap-6 items-start justify-center h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <svg width="35" height="35" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1115_161)">
              <path className="fill-text dark:fill-text-dark" d="M26.8382 18.3641C27.7759 19.3018 29.0477 19.8286 30.3738 19.8286H55.1723C57.9338 19.8286 60.1724 22.0671 60.1724 24.8286V49.6272C60.1724 50.9533 60.6991 52.2251 61.6368 53.1628L71.4654 62.9913C74.6152 66.1411 80.0009 63.9103 80.0009 59.4558V5C80.0009 2.23857 77.7623 0 75.0009 0H20.5452C16.0907 0 13.8598 5.38571 17.0097 8.53553L26.8382 18.3641Z" />
              <path className="fill-text dark:fill-text-dark" d="M53.1628 61.6368C52.2251 60.6991 50.9533 60.1724 49.6272 60.1724H24.8286C22.0672 60.1724 19.8286 57.9338 19.8286 55.1724V30.3738C19.8286 29.0477 19.3018 27.7759 18.3641 26.8382L8.53554 17.0097C5.38572 13.8598 0 16.0907 0 20.5452V75.0009C0 77.7624 2.23858 80.0009 5 80.0009H59.4558C63.9103 80.0009 66.1412 74.6152 62.9913 71.4654L53.1628 61.6368Z" />
            </g>
            <defs>
              <clipPath id="clip0_1115_161">
                <rect width="80" height="80" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p className="text-5xl text-text dark:text-text-dark whitespace-nowrap font-bold">Dipull</p>
        </div>
        <p className="text-2xl text-text/60 dark:text-text-dark/65 font-medium break-words leading-normal animation-main">기상송, 세탁/건조, 잔류 신청까지 모두!</p>
        
      </div>
      <p className="text-xl text-text/60 dark:text-text-dark/65 font-normal break-words leading-normal animation-main">디풀과 함께 간편한 학교 생활을 즐겨봐요!</p>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start">
        {
          showLogin ? (
            <Mover
              className="bg-white dark:bg-text-dark/15 w-min px-8 py-4 rounded-2xl border border-text/5 dark:border-text-dark/20 cursor-pointer flex flex-row gap-2 items-center justify-center select-none"
              onClick={user.id ? () => { 
                window.open("https://auth.dimigo.net");
              } : login}
            >
              <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-text/60 dark:fill-text-dark/65" d="M2.63672 16.1709C2.08672 16.1709 1.61589 15.9751 1.22422 15.5834C0.832552 15.1917 0.636719 14.7209 0.636719 14.1709V13.3709C0.636719 12.8042 0.782552 12.2834 1.07422 11.8084C1.36589 11.3334 1.75339 10.9709 2.23672 10.7209C3.27005 10.2042 4.32005 9.81673 5.38672 9.5584C6.45339 9.30007 7.53672 9.1709 8.63672 9.1709C8.87005 9.1709 9.10339 9.17507 9.33672 9.1834C9.57005 9.19173 9.80339 9.21257 10.0367 9.2459C10.2201 9.26257 10.3659 9.3334 10.4742 9.4584C10.5826 9.5834 10.6367 9.73757 10.6367 9.9209C10.6701 10.7042 10.8617 11.4417 11.2117 12.1334C11.5617 12.8251 12.0284 13.4126 12.6117 13.8959C12.7284 13.9792 12.8201 14.0834 12.8867 14.2084C12.9534 14.3334 12.9867 14.4709 12.9867 14.6209V15.1709C12.9867 15.4542 12.8909 15.6917 12.6992 15.8834C12.5076 16.0751 12.2701 16.1709 11.9867 16.1709H2.63672ZM8.63672 8.1709C7.53672 8.1709 6.59505 7.77923 5.81172 6.9959C5.02839 6.21257 4.63672 5.2709 4.63672 4.1709C4.63672 3.0709 5.02839 2.12923 5.81172 1.3459C6.59505 0.562565 7.53672 0.170898 8.63672 0.170898C9.73672 0.170898 10.6784 0.562565 11.4617 1.3459C12.2451 2.12923 12.6367 3.0709 12.6367 4.1709C12.6367 5.2709 12.2451 6.21257 11.4617 6.9959C10.6784 7.77923 9.73672 8.1709 8.63672 8.1709ZM16.1367 10.1709C16.4201 10.1709 16.6576 10.0751 16.8492 9.8834C17.0409 9.69173 17.1367 9.45423 17.1367 9.1709C17.1367 8.88757 17.0409 8.65007 16.8492 8.4584C16.6576 8.26673 16.4201 8.1709 16.1367 8.1709C15.8534 8.1709 15.6159 8.26673 15.4242 8.4584C15.2326 8.65007 15.1367 8.88757 15.1367 9.1709C15.1367 9.45423 15.2326 9.69173 15.4242 9.8834C15.6159 10.0751 15.8534 10.1709 16.1367 10.1709ZM16.2867 18.8209L15.2867 17.8209C15.2534 17.7876 15.2034 17.6709 15.1367 17.4709V13.0209C14.4034 12.8042 13.8034 12.3917 13.3367 11.7834C12.8701 11.1751 12.6367 10.4709 12.6367 9.6709C12.6367 8.70423 12.9784 7.87923 13.6617 7.1959C14.3451 6.51257 15.1701 6.1709 16.1367 6.1709C17.1034 6.1709 17.9284 6.51257 18.6117 7.1959C19.2951 7.87923 19.6367 8.70423 19.6367 9.6709C19.6367 10.4209 19.4242 11.0876 18.9992 11.6709C18.5742 12.2542 18.0367 12.6709 17.3867 12.9209L18.2867 13.8209C18.3867 13.9209 18.4367 14.0376 18.4367 14.1709C18.4367 14.3042 18.3867 14.4209 18.2867 14.5209L17.4867 15.3209C17.3867 15.4209 17.3367 15.5376 17.3367 15.6709C17.3367 15.8042 17.3867 15.9209 17.4867 16.0209L18.2867 16.8209C18.3867 16.9209 18.4367 17.0376 18.4367 17.1709C18.4367 17.3042 18.3867 17.4209 18.2867 17.5209L16.9867 18.8209C16.8867 18.9209 16.7701 18.9709 16.6367 18.9709C16.5034 18.9709 16.3867 18.9209 16.2867 18.8209Z" />
              </svg>
              <p className="whitespace-nowrap text-base font-medium text-text/60 dark:text-text-dark/65">
                {
                  user.id ? `반가워요, ${user.name}님!` : "디풀 계정으로 로그인하기"
                }
              </p>
            </Mover>
          ) : null
        }
        <Link
          className="bg-white dark:border-text-dark/20 dark:bg-text-dark/15 w-min px-8 py-4 rounded-2xl border border-text/5 cursor-pointer flex flex-row gap-2 items-center justify-center select-none"
          href="https://github.com/jeamxn/dipull"
          target="_blank"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_476_120)"><path className="fill-text/60 dark:fill-text-dark/65" d="M6.79297 15.5234C6.79297 15.6016 6.70312 15.6641 6.58984 15.6641C6.46094 15.6758 6.37109 15.6133 6.37109 15.5234C6.37109 15.4453 6.46094 15.3828 6.57422 15.3828C6.69141 15.3711 6.79297 15.4336 6.79297 15.5234ZM5.57813 15.3477C5.55078 15.4258 5.62891 15.5156 5.74609 15.5391C5.84766 15.5781 5.96484 15.5391 5.98828 15.4609C6.01172 15.3828 5.9375 15.293 5.82031 15.2578C5.71875 15.2305 5.60547 15.2695 5.57813 15.3477ZM7.30469 15.2813C7.19141 15.3086 7.11328 15.3828 7.125 15.4727C7.13672 15.5508 7.23828 15.6016 7.35547 15.5742C7.46875 15.5469 7.54687 15.4727 7.53516 15.3945C7.52344 15.3203 7.41797 15.2695 7.30469 15.2813ZM9.875 0.3125C4.45703 0.3125 0.3125 4.42578 0.3125 9.84375C0.3125 14.1758 3.03906 17.8828 6.93359 19.1875C7.43359 19.2773 7.60938 18.9688 7.60938 18.7148C7.60938 18.4727 7.59766 17.1367 7.59766 16.3164C7.59766 16.3164 4.86328 16.9023 4.28906 15.1523C4.28906 15.1523 3.84375 14.0156 3.20312 13.7227C3.20312 13.7227 2.30859 13.1094 3.26562 13.1211C3.26562 13.1211 4.23828 13.1992 4.77344 14.1289C5.62891 15.6367 7.0625 15.2031 7.62109 14.9453C7.71094 14.3203 7.96484 13.8867 8.24609 13.6289C6.0625 13.3867 3.85938 13.0703 3.85938 9.3125C3.85938 8.23828 4.15625 7.69922 4.78125 7.01172C4.67969 6.75781 4.34766 5.71094 4.88281 4.35937C5.69922 4.10547 7.57812 5.41406 7.57812 5.41406C8.35938 5.19531 9.19922 5.08203 10.0313 5.08203C10.8633 5.08203 11.7031 5.19531 12.4844 5.41406C12.4844 5.41406 14.3633 4.10156 15.1797 4.35937C15.7148 5.71484 15.3828 6.75781 15.2813 7.01172C15.9063 7.70313 16.2891 8.24219 16.2891 9.3125C16.2891 13.082 13.9883 13.3828 11.8047 13.6289C12.1641 13.9375 12.4688 14.5234 12.4688 15.4414C12.4688 16.7578 12.457 18.3867 12.457 18.707C12.457 18.9609 12.6367 19.2695 13.1328 19.1797C17.0391 17.8828 19.6875 14.1758 19.6875 9.84375C19.6875 4.42578 15.293 0.3125 9.875 0.3125ZM4.10937 13.7852C4.05859 13.8242 4.07031 13.9141 4.13672 13.9883C4.19922 14.0508 4.28906 14.0781 4.33984 14.0273C4.39062 13.9883 4.37891 13.8984 4.3125 13.8242C4.25 13.7617 4.16016 13.7344 4.10937 13.7852ZM3.6875 13.4687C3.66016 13.5195 3.69922 13.582 3.77734 13.6211C3.83984 13.6602 3.91797 13.6484 3.94531 13.5938C3.97266 13.543 3.93359 13.4805 3.85547 13.4414C3.77734 13.418 3.71484 13.4297 3.6875 13.4687ZM4.95313 14.8594C4.89063 14.9102 4.91406 15.0273 5.00391 15.1016C5.09375 15.1914 5.20703 15.2031 5.25781 15.1406C5.30859 15.0898 5.28516 14.9727 5.20703 14.8984C5.12109 14.8086 5.00391 14.7969 4.95313 14.8594ZM4.50781 14.2852C4.44531 14.3242 4.44531 14.4258 4.50781 14.5156C4.57031 14.6055 4.67578 14.6445 4.72656 14.6055C4.78906 14.5547 4.78906 14.4531 4.72656 14.3633C4.67188 14.2734 4.57031 14.2344 4.50781 14.2852Z"></path></g><defs><clipPath id="clip0_476_120"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
          <p className="whitespace-nowrap text-base font-medium text-text/60 dark:text-text-dark/65">Github에 기여하기</p>
        </Link>
      </div>
    </div>
  );
};

export default Promotion;