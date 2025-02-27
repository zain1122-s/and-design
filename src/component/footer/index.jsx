import Heading from "../heading";
import { Row, Col } from "antd";
import Image from "../image";
import { Typography } from "antd";
const { Link } = Typography;
const Footer = () => {
  return (
    <>
      <Heading level={4} title=" Recently visited profiles:" />
      <Row gutter={[24, 8]}>
        <Col
          style={{
            margin: "12px 0",
          }}
        >
       
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Footer;