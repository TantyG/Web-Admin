import { Breadcrumb, Layout, theme } from "antd";
import { Sidebar } from "../../component/Sider/Sider";
import { Navbar } from "../../component/Header/Header";
import { FooterBar } from "../../component/Footer/Footer";
import { TableProduct } from "../../component/Table/TableProduct";
const { Content } = Layout;

const Product = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <Layout>
          <Navbar />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb style={{margin: "16px 0"}}/>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <TableProduct />
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
    </>
  );
};
export default Product;
