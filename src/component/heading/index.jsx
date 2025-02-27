import { Typography } from "antd";
const { Title } = Typography;

const Heading = ({ level, title }) => {
  return (
    <Title style={{ margin: "10px 0px" }} level={level}>
      {title}
    </Title>
  );
};

export default Heading