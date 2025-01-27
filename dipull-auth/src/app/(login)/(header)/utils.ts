export type MenuItem = {
  url: string;
  name: string;
  showname?: string;
  order?: {
    teacher?: number;
    student?: number;
  };
}
export const mainMenu: MenuItem[] = [
  {
    url: "/",
    name: "정보",
    order: {
      teacher: 0,
      student: 0,
    },
  },
  {
    url: "/developers/main",
    name: "개발",
    showname: "개발자용 메뉴",
    order: {
      teacher: 1,
      student: 1,
    },
  },
];

export const teachersMenu: MenuItem[] = [
  {
    url: "/teacher/authority/list",
    name: "권한",
    showname: "선생님 권한 관리",
    order: {
      teacher: 2,
    },
  },
];
export const studentsMenu: MenuItem[] = [
];