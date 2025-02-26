import React from 'react'
import { Row , Col} from 'antd'
import { Card } from 'antd';
const { Meta } = Card;
export default function Cards() {
  return (
    <div>
  <Row>
    <Col span={24} sm={6} offset={1} >
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={24} sm={6} offset={1}>
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={24} sm={6} offset={1}>
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={24} sm={6} offset={1}>
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
  </Row>
    </div>
  )
}
