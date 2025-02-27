import { Layout } from "antd";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { Divider } from "antd";
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#fff" }}>
      <Header />
    </AntHeader>
    <Divider />
    <Content style={{ minHeight: "70vh" }}>{children}</Content>
    <AntFooter style={{ backgroundColor: "#efefef" }}>
      <Footer />
    </AntFooter>
  </Layout>
);
export default MainLayout;