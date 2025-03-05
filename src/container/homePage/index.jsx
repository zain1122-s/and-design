import MainLayout from "../Layout";                                 
import Cards from "../../component/card/card";
import Heading from "../../component/typography/typography";
import {  Row, Col } from "antd";
function HomePage() {
  return (
    <MainLayout>
      <Row gutter={[16, 16]}>
        <Col span={24} sm={5} offset={1}>
        <Cards/>
        </Col>

        <Col span={24} sm={5} offset={1}>
        <Cards/>
        </Col>
        <Col span={24} sm={5} offset={1}>
        <Cards/>
        </Col>
        <Col span={24} sm={5} offset={1}>
        <Cards/>
        </Col>
      </Row>
      <Heading />
    </MainLayout>
  );
}
export default HomePage;
