import {
  UserOutlined,
  SecurityScanOutlined,
  QqSquareFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export const SideBarItem = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
    },
  ];

  const ItemForStudents: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Class Notes",
      key: "classNotes",
      icon: <UserOutlined />,
    },
    {
      label: "MCQ Exam",
      key: "mcqexam",
      icon: <UserOutlined />,
    },
    {
      label: "Written Exam",
      key: "writtenExam",
      icon: <UserOutlined />,
    },
    {
      label: "Exam Result",
      key: "examResult",
      icon: <UserOutlined />,
    },

    {
      label: "Total Earning",
      key: "totalEarning",
      icon: <UserOutlined />,
    },
    {
      label: "Leaderboard",
      key: "leaderboard",
      icon: <UserOutlined />,
    },
    {
      label: "Reset-Password",
      key: "reset-password",
      icon: <SecurityScanOutlined />,
    },
    {
      label: "FAQ",
      key: "faq",
      icon: <QqSquareFilled />,
    },
  ];
  const itemForAdmin: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Student",
      key: "manageStudent",
      icon: <UserOutlined />,
    },
    {
      label: "Create Question",
      key: "attendance",
      icon: <UserOutlined />,
      children: [
        { label: "MCQ Question", key: "create-mcq" },
        { label: "Written Question", key: "create-cq" },
        { label: "Diploma Question", key: "diploma-question" },
      ],
    },
    {
      label: "Publish Course",
      key: "course",
      icon: <UserOutlined />,
    },
    {
      label: "Create Notification",
      key: "create-notification",
      icon: <UserOutlined />,
    },
    {
      label: "Reset Password",
      key: "course",
      icon: <UserOutlined />,
    },
  ];
  const itemForSuperAdmin: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Student",
      key: "manageStudent",
      icon: <UserOutlined />,
    },
    {
      label: "Manage Teachers",
      key: "manageStudent",
      icon: <UserOutlined />,
    },
    {
      label: "Create Question",
      key: "attendance",
      icon: <UserOutlined />,
      children: [
        { label: "MCQ Question", key: "create-mcq" },
        { label: "Written Question", key: "create-cq" },
        { label: "Diploma Question", key: "diploma-question" },
      ],
    },
    {
      label: "Publish Course",
      key: "course",
      icon: <UserOutlined />,
    },
    {
      label: "Create Notification",
      key: "create-notification",
      icon: <UserOutlined />,
    },
    {
      label: "Reset Password",
      key: "course",
      icon: <UserOutlined />,
    },
  ];
  if (role === "student") return ItemForStudents;
  else if (role === "admin") return itemForAdmin;
  else if (role === "super_admin") return itemForSuperAdmin;
  else return defaultSidebarItems;
};
