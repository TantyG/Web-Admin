import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import IconSearch from "../../asset/search-normal.png";
import styled from "styled-components";

const Navbarrr = styled.div`
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  height: 90px;
  padding: 10px 40px;
  .hearderNav {
    display: flex;
    justify-content: space-between;
  }
  .search-input {
    padding: 10px;
    height: 40px;
    width: 400px;
    border-radius: 35px;
    text-indent: 50px;
    border: 1px solid #ffffff;
  }
  .searchWrapper {
    position: relative;
  }
  .searchWrapper::before {
    content: "";
    width: 30px;
    height: 30px;
    background-image: url(${IconSearch});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    top: 20px;
    left: 20px;
  }
  .endNav {
    display: flex;
  }
  .imgAva {
    margin-left: 20px;
    border-radius: 50%;
  }
  .username {
    font-size: 28px;
    color: #ffffff;
    font-family: cursive;
    font-weight: 500;
  }
`;
const Navbar = () => {
  const logged = useSelector((state) => state.auth);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Navbarrr>
          <div className="hearderNav">
            <div className="searchWrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search Item, Collection and Account.."
              ></input>
            </div>
            <div className="endNav">
              <div className="userLogin">
                <div className="username">Hello, {logged.username}</div>
              </div>
            </div>
          </div>
        </Navbarrr>
      </Header>
    </>
  );
};
export { Navbar };
