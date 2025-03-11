import { Link, useParams } from "react-router";
import { Layout } from "antd";
import { Divider, Spin } from "antd";

import Footer from "../../component/footer/index";
import Header from "../../component/header/index";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Typography from "../../component/typography/typography";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCardData,
  selectSingleCharacter,
  addRecentlyVisited,
} from "../../app/features/characterSlice";
import { useEffect } from "react";
const { Header: AntHeader, Footer: AntFooter } = Layout;
function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(selectSingleCharacter);
  useEffect(() => {
    if (id) {
      dispatch(fetchCardData({ id }));
    }
  }, [dispatch, id]);
  useEffect(() => {
    if (character?.id) {
      dispach(
        addRecentlyVisited({
          id: character.id,
          name: character.name,
          image: character.image,
        })
      );
    }
  }, [character.dispach]);
  return (
    <>
      <Layout>
        {/* <AntHeader style={{ backgroundColor: "#fff" }}>
    </AntHeader> */}
        <Header />
        <Divider />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Link to="/">
              <ArrowLeftOutlined /> Back to Homepage
            </Link>
            {/* <Cards /> */}
            <br /> <br />
            {character ? (
              <Card
                hoverable
                style={{
                  width: 300,
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
    </>
  );
}
export default Profile;
