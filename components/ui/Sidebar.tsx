"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SideBarItem } from "@/constant/sideBarItem";
import { USER_ROLE } from "@/constant/user";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SideBarItem(role)}
      />
    </Sider>
  );
};

export default Sidebar;
