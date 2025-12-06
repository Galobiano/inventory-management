interface UserDetails {
  no: number;
  name: string;
  username: string;
  userrole: string;
  status: string;
  lastlogin?: string;
}
export const userLists: UserDetails[] = [
  {
    no: 1,
    name: "Alvin",
    username: "Admin",
    userrole: "Admin",
    status: "Active",
    lastlogin: "November 30, 2023, 2:03:29 pm",
  },
  {
    no: 2,
    name: "Gerelyn",
    username: "user",
    userrole: "user",
    status: "Active",
    lastlogin: "",
  },
  {
    no: 3,
    name: "Hapin",
    username: "User",
    userrole: "User",
    status: "Active",
    lastlogin: "",
  },
  {
    no: 4,
    name: "Nacef",
    username: "Admin",
    userrole: "Admin",
    status: "Active",
    lastlogin: "",
  },
  {
    no: 5,
    name: "Alvin",
    username: "Admin",
    userrole: "Admin",
    status: "Active",
    lastlogin: "November 30, 2023, 2:03:29 pm",
  },
];
