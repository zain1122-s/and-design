import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Divider } from "antd";
const { Header: AntHeader, Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#gray" }}>
      <Header />
    </AntHeader>
    <Divider />
    <Content style={{ minHeight: "80vh" }}>{children}</Content>
    <Footer style={{ backgroundColor: "gray" }}>Footer</Footer>
  </Layout>
);
export default MainLayout;
