import { MenuProps } from ".";

const auth: MenuProps[] = [
  {
    type: "teacher",
    groupName: "학생 대리 신청",
    list: [
      {
        icon: "Laundry",
        title: "세탁 & 건조",
        url: "/laundry",
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
    ]
  },
  {
    type: "teacher",
    groupName: "신청 관리",
    list: [
      {
        icon: "Hotel",
        title: "기상송",
        url: "/wakeup",
      },
      {
        icon: "Hardware",
        title: "시설 수리",
        url: "/fix",
      },
    ],
  }
];

export default auth;