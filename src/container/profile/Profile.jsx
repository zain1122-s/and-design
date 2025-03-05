import React from "react";
import Card from "../../component/card/card";
import {  Link as RouterLink } from "react-router";
import {Row , Col} from 'antd'

function profile() {
  return (
    <div style={{marginLeft:"750px", marginTop:"100px"}}>
      <button style={{ma}}>
        <RouterLink to="/">Go Back</RouterLink>
      </button>
      <Card
        hoverable
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
    
        }
      
      >

      </Card>


    </div>
  );
}


export default profile;
