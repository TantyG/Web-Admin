import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    UserSwitchOutlined,
    ProfileOutlined,
    DashboardOutlined,
    HomeOutlined
  } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

  const items = [
    {
      label: <NavLink to="/">Home</NavLink>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
        label: <NavLink to="/user">User</NavLink>,
        key: "user",
        icon: <UserOutlined />,
    },
    {
        label: <NavLink to="/customer">Customer</NavLink>,
        key: "customer",
        icon: <UserSwitchOutlined />,
    },
    {
        label: <NavLink to="/product">Product</NavLink>,
        key: "product",
        icon: <ProfileOutlined />,
    },
    {
        label: <NavLink to="/orders">Orders</NavLink>,
        key: "orders",
        icon: <PieChartOutlined />,
    },
    {
        label: <NavLink to="/coupon">Coupon</NavLink>,
        key: "coupon",
        icon: <FileOutlined />,
    },
  ];
export default items