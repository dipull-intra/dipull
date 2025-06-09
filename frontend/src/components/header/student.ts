import { MenuProps } from ".";

const student: MenuProps[] = [
  {
    type: "student",
    list: [
      {
        icon: "Home",
        title: "홈",
        url: "/",
      },
      {
        icon: "Laundry",
        title: "세탁 & 건조",
        url: "/laundry",
      },
      {
        icon: "Hotel",
        title: "기상송",
        url: "/wakeup",
      },
      {
        icon: "Nights",
        title: "휴일 잔류",
        url: "/stay",
      },
      {
        icon: "Nature",
        title: "잔류 외출 및 급식",
        url: "/out",
      },
      {
        icon: "Icecream",
        title: "조기귀가",
        url: "/early",
      },
      {
        icon: "Hardware",
        title: "시설 수리",
        url: "/fix",
      },
    ]
  },
];

export default student;