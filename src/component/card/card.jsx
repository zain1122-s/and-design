import { Card } from "antd";
import Heading from "../heading";
import Link from "antd/es/typography/Link";
function CardComponent({ title, imageUrl }) {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Heading level={5} title={title} />
      <Link to={"/profile"} >See more</Link>
    </Card>
  );
}
export default CardComponent;
