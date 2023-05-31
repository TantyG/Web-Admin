import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";

const Navbar = () => {
    const logged =  useSelector((state) => state.auth);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <>
        <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <span>{logged.username}</span>
          </Header>
          
        </>
    )
}
export {Navbar}