import { Row, Col, Typography, Input } from "antd";
const { Title } = Typography;
const { Search } = Input;
function Header() {
  return (
    <Row>
      <Col span={24} sm={14} offset={1}>
        <Title level={2}>Rick And Morty</Title>
      </Col>
      <Col span={24} sm={8} offset={1}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
        />
      </Col>
    </Row>
  );
}
export default Header;
