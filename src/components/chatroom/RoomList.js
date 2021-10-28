import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import { SmileOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const RoomList = () => {
  const TypographyStyled = styled(Typography.Link)`
    display: block;
    padding: 10px;
  `;
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Danh sách các phòng" key="1">
        <TypographyStyled>Room 1</TypographyStyled>
        <TypographyStyled>Room 2</TypographyStyled>
        <TypographyStyled>Room 3</TypographyStyled>
        <Button ghost style={{ color: "green" }} icon={<SmileOutlined />}>
          Thêm phòng chat
        </Button>
      </Panel>
    </Collapse>
  );
};

export default RoomList;
