import MainLayout from "../Layout";                                 
import CardComponent from "../../component/card/card";
import {  Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData , fetchData } from "../../app/features/characterSlice";
import { useEffect } from "react"


function HomePage() {

  const data = useSelector(selectData);
  const dispatch = useDispatch();
  console.log(data,"data here!");
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  
  return (
    <MainLayout>
  

  <MainLayout>
      <Row justify="center">
        {status === "loading" ? (
          <Spin size="large" />
        ) : status === "error" ? (
          <p>failed to fetch </p>
        ) : (
          data?.map((item) => (
            <Col key={item.id} xs={24} md={5}>
              <CardComponent
                title={item.name}
                imageUrl={item.image}
                id={item.id}
              />
            </Col>
          ))
        )}
        {/* {} */}
      </Row>
    </MainLayout>
  </MainLayout>
  );
}
export default HomePage;
