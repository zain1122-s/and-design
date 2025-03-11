import { Col, Row } from "antd";
import Heading from "../heading";
function Typography({ name, status, species, gender, location }) {
    return (
        <>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={12}>
                    <Heading level={4} title={"Name:"} />
                </Col>
                <Col>
                    <Heading level={5} title={name} />
                </Col>
            </Row >
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={12}>
                    <Heading level={4} title={"Status:"} />
                </Col>
                <Col>
                    <Heading level={5} title={status} />
                </Col>
            </Row>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={12}>
                    <Heading level={4} title={"Species:"} />
                </Col>
                <Col>
                    <Heading level={5} title={species} />
                </Col>
            </Row>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={12}>
                    <Heading level={4} title={"Gender:"} />
                </Col>
                <Col>
                    <Heading level={5} title={gender} />
                </Col>
            </Row>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={12}>
                    <Heading level={4} title={"Location:"} />
                </Col>
                <Col>
                    <Heading level={5} title={location} />
                </Col>
            </Row>
        </>
    );
}
export default Typography;