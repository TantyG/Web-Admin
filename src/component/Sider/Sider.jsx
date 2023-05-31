import { Menu, Layout } from 'antd';
import { useState } from 'react';
import items from '../../items';
const { Sider } = Layout;
const Sidebar = (keyBar) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={keyBar}
            mode="inline"
            items={items}
          />
        </Sider>
        </>
    )
}
export {Sidebar} 