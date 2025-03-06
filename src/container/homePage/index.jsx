import React, { useEffect } from "react";
import MainLayout from "../Layout";
import CardComponent from "../../component/card/card";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData, fetchData } from "../../app/features/characterSlice";

function HomePage() {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.characters.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data, "data here!");

  return (
    <MainLayout>
      <Row justify="center">
        {status === "loading" ? (
          <Spin size="large" />
        ) : status === "error" ? (
          <p>Failed to fetch</p>
        ) : (
          data?.map((item) => (
            <Col key={item.id} xs={24} md={5}>
              <CardComponent title={item.name} imageUrl={item.image} />
            </Col>
          ))
        )}
      </Row>
    </MainLayout>
  );
}
export default HomePage;