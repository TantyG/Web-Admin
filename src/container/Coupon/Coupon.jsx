import { Breadcrumb, Layout, theme } from "antd";
import { Sidebar } from "../../component/Sider/Sider";
import { Navbar } from "../../component/Header/Header";
import { FooterBar } from "../../component/Footer/Footer";
const { Content } = Layout;

const Coupon = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(
        <>
            <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar keyBar={"coupon"}/>
        <Layout>
          <Navbar />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              Coupon
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
        </>
    )
}
export default Coupon