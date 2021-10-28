import { Button, Avatar, Tooltip, Input, Form } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Messages from "./Messages";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0px 15px;
  aligin-item: center;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const MessageListStyled = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const ChatWindow = () => {
  return (
    <div style={{ height: "100vh" }}>
      <HeaderStyled>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>Room 1</p>
          <span style={{ fontSize: "12px" }}>Day la Room 1</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ color: "green" }}
            type="text"
            icon={<UserAddOutlined />}
          >
            Add
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </HeaderStyled>
      <div
        style={{
          height: "calc(100%-56px)",
          justifyContent: "flex-end",
          display: "flex",
          flexDirection: "column",
          padding: "11px",
        }}
      >
        <MessageListStyled>
          <Messages
            text="Ăn cơm chưa"
            createdAt="31-12-2002"
            displayName="Hoang Anh"
          />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
          <Messages text="chưa" createdAt="31-12-3033" displayName="Mo" />
        </MessageListStyled>
        <Form
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 2px 2px 0",
            border: "1px solid rgb(230, 230, 230)",
            borderRadius: "2px",
          }}
        >
          <Form.Item style={{ flex: 1, marginBottom: 0 }}>
            <Input
              placeholder="Nhập tin nhắn"
              autoComplete="off"
              bordered={false}
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </Form>
      </div>
    </div>
  );
};

export default ChatWindow;
