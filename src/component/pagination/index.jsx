import React from "react";
import { Pagination } from "antd";
 

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};
const Paginationn = () => <Pagination total={500} itemRender={itemRender} />;
export default Paginationn;
