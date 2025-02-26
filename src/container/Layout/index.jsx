import { Layout } from "antd";
import Header from "../../component/header";
import { Divider } from "antd";
const { Header: AntHeader, Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#fff" }}>
      <Header />
    </AntHeader>
    <Divider />
    <Content style={{ minHeight: "80vh" }}>{children}</Content>
    <Footer style={{ backgroundColor: "#efefef" }}>Footer</Footer>
  </Layout>
);
export default MainLayout;
