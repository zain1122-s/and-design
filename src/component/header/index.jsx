import { Row, Col, Typography, Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchQuery, fetchData, setCurrentPage } from "../../app/features/characterSlice";

const { Title } = Typography;
const { Search } = Input;

function Header({ onSearch: externalOnSearch }) {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    if (!value.trim()) return; // Prevent empty search
    dispatch(setSearchQuery(value));
    dispatch(setCurrentPage(1));
    dispatch(fetchData({ page: 1, query: value }));

    if (externalOnSearch) externalOnSearch(value);
  };

  return (
    <Row>
      <Col span={24} sm={14} offset={1}>
        <Title level={2}>Rick And Morty</Title>
      </Col>
      <Col span={24} sm={8} offset={1}>
        <Search
          placeholder="Search characters..."
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </Col>
    </Row>
  );
}

export default Header;
