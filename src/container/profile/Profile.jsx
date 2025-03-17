import { Link, useParams } from "react-router";
import { Layout, Divider, Spin, Card } from "antd";
import Footer from "../../component/footer/index";
import Header from "../../component/header/index";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Typography from "../../component/typography/typography";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCardData,
  selectSingleCharacter,
  setRecentProfiles,
} from "../../app/features/characterSlice";
import { useEffect } from "react";

const { Header: AntHeader, Footer: AntFooter } = Layout;

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(selectSingleCharacter);
  const recentVisitedProfiles = useSelector(
    (state) => state.characters.recentVisitedProfile
  );

  // Fetch character data when component mounts or ID changes
  useEffect(() => {
    if (id) {
      dispatch(fetchCardData({ id }));
    }
  }, [dispatch, id]);

  // Update recent profiles list when character data is available
  useEffect(() => {
    if (character && character.id) {
      let recentVisitedList = recentVisitedProfiles.filter(
        (item) => item.id !== character.id
      );

      dispatch(
        setRecentProfiles([
          ...recentVisitedList,
          {
            label: character.name,
            id: character.id,
            image: character.image,
          },
        ])
      );
    }
  }, [character, dispatch]);

  return (
    <Layout>
      <Header />
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "300px",
          margin: "10px auto",
          padding: "10px",
        }}
      >
        <div>
          <Link to="/">
            <ArrowLeftOutlined /> Back to Homepage
          </Link>
          <br /> <br />
          {character ? (
            <Card
              hoverable
              style={{
                width: 370,
                border: "1px solid ",
                borderColor: "#dcdee0",
              }}
              cover={<img alt={character.name} src={character.image} />}
            >
              <Typography
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location?.name}
              />
            </Card>
          ) : (
            <Spin size="large" />
          )}
        </div>
      </div>
      <Divider />
      <AntFooter style={{ backgroundColor: "#efefef" }}>
        <Footer />
      </AntFooter>
    </Layout>
  );
}

export default Profile;
