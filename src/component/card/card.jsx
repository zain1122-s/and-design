import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import Link from "antd/es/typography/Link";
import Heading from "../heading";
import { Link } from "react-router";
const { Meta } = Card;
export default function Cards() {
  return (
    <div>
      
        
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
            <Heading level={4} title="Card Title" link="https://example.com" />
          
          </Card>
        
    </div>
  );
}
