import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const { Panel } = Collapse;

const Wrapper = styled.div`
  &&& {
    height: calc(100% - 57px);

    .ant-collapse {
      height: 100%;

      &-content-box {
        overflow-y: auto;
        height: 100%;
      }

      &-header,
      p {
        color: white;
      }

      &-content-box {
        padding: 0 40px;

        @media screen and (max-width: 576px) {
          padding: 0 16px;
        }
      }

      &-item {
        height: 100%;
      }

      &-content {
        height: calc(100% - 46px);

        @media screen and (max-width: 576px) {
          height: calc(100% - 68px);
        }
      }
    }
  }
`;

const AddRoomStyled = styled(Button)`
  color: white;
  padding: 0;

  &:hover,
  &:focus,
  &:active {
    color: #cecece;
  }
`;
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const RoomList = () => {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Room List" key="1">
        {rooms.map((room) => (
          <LinkStyled onClick={() => setSelectedRoomId(room.id)} key={room.id}>
            {room.name}
          </LinkStyled>
        ))}
        <AddRoomStyled
          onClick={handleAddRoom}
          ghost
          style={{ color: "green" }}
          icon={<PlusSquareOutlined />}
        >
          Thêm phòng
        </AddRoomStyled>
      </Panel>
      <LinkStyled></LinkStyled>
    </Collapse>
  );
};

export default RoomList;
