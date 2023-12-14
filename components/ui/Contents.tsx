"use client";
import { Layout } from "antd";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return <Content style={{ minHeight: "100vh" }}>{children}</Content>;
};

export default Contents;
