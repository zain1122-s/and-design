import { Link } from "react-router";
import { Row, Col } from "antd";
import ImageComp from "../image";
import Heading from "../heading";
// import img from "../../assets/2.png";
import { useSelector } from "react-redux";

function Footer() {
  const recentVisitedProfiles = useSelector(
    (state) => state.characters.recentVisitedProfile
  );
  return (
    <>
      <Heading level={4} title=" Recently visited profiles:" />
      <Row gutter={[24, 8]}>
        {recentVisitedProfiles.slice(0, 10).map((profile, index) => {
          return (
            <Col
              style={{
                margin: "12px 0",
              }}
              key={index}
            >
              <Link to={`/profile/${profile.id}`}>
                <ImageComp width={30} height={30} imageUrl={profile.image} />
                &nbsp;
                {profile.label}
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default Footer;