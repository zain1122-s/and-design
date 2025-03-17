import { Card , Badge} from "antd";
import Heading from "../heading";
import { Link } from "react-router";
function CardComponent({ title, imageUrl, id , status}) {
 const statusColor = {
  Alive:"success",
  Dead:"error",
  unknown:"default"
 };
  return (
    <Card
      hoverable
      style={{ width: 300,  }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Badge dot status={statusColor[status]} />
      <Heading level={5} title={title} />
      <Link to={`/Profile/${id}`} >View profile</Link>
    </Card>
  );
}
export default CardComponent;
