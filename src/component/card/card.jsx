import { Card } from "antd";
import Heading from "../heading";
import { Link } from "react-router";
function CardComponent({ title, imageUrl, id }) {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Heading level={5} title={title} />
      <Link to={`/Profile/${id}`} >View profile</Link>
    </Card>
  );
}
export default CardComponent;
