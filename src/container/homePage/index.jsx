import React, { useEffect, useState } from "react";
import MainLayout from "../Layout";
import CardComponent from "../../component/card/card";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData, fetchData , selectPagination} from "../../app/features/characterSlice";
import Paginationcompo from "../../component/pagination";

function HomePage() {
  // const[query, setquery] = useState("")
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const pagination= useSelector(selectPagination)
  const status = useSelector((state) => state.characters.status);

  useEffect(() => {
    if (!data?.length){
    dispatch(fetchData({page:1}));
    }
  }, [dispatch, data]);

  const fetchCharacter= (page = 1, ) =>{
    if (pagination?.currentPage !== page){
    dispatch(fetchData({page}))
    }
  }

  return (
    <MainLayout>
      <Row justify="center" >
        {status === "loading" ? (
          <Spin size="large" />
        ) : status === "error" ? (
          <p>Failed to fetch</p>
        ) : (
          data?.map((item) => (
            <Col key={item.id} xs={24} md={5}>
              <CardComponent title={item.name} imageUrl={item.image} id={item.id} status={item.status} />
            </Col>
          ))
        )}
      </Row>
      <Row style={{ justifyContent: "end" }}>
        {pagination?.count > 20 && (
          <Col span={9}>
            <Paginationcompo
              onChange={(page) => {
                fetchCharacter(page);
              }}
              total={pagination.count ?? 0}
              pageSize={20}
            />
          </Col>
        )}
      </Row>
    </MainLayout>
  );
}
export default HomePage;