import { Button, Avatar, Tooltip, Input, Form, Alert } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Messages from "./Messages";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { addDocument } from "../firebase/Services";
import { AuthContext } from "../context/AuthProvider";
import useFirestore from "../hooks/useFirestore";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      height: 56px;
    }

    &__title {
      margin: 0;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__description {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100%;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const InviteBtnStyled = styled(Button)`
  @media screen and (max-width: 576px) {
    span:nth-child(2) {
      display: none;
    }
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberModal } =
    useContext(AppContext);
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    addDocument("messages", {
      text: inputValue,
      uid,
      photoURL,
      roomId: selectedRoom.id,
      displayName,
    });
    form.resetFields(["message"]);
  };

  const conditionMessages = useMemo(
    () => ({
      fieldName: "roomId",
      operator: "==",
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id]
  );
  const messages = useFirestore("messages", conditionMessages);

  return (
    <WrapperStyled>
      {selectedRoom.id ? (
        <>
          <HeaderStyled>
            <div className="header__info">
              <p className="header__title">{selectedRoom.name}</p>
              <span className="header__description">
                {selectedRoom.description}
              </span>
            </div>
            <ButtonGroupStyled>
              <InviteBtnStyled
                style={{ color: "green" }}
                type="text"
                icon={<UserAddOutlined />}
                onClick={() => setIsInviteMemberModal(true)}
              >
                Add
              </InviteBtnStyled>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip
                    key={member.id}
                    title={member.displayName}
                    id={member.id}
                  >
                    <Avatar src={member.photoURL}>
                      {member.displayName
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </ButtonGroupStyled>
          </HeaderStyled>
          <ContentStyled>
            <MessageListStyled>
              {messages.map((mes) => (
                <Messages
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  createdAt={mes.createdAt}
                  displayName={mes.displayName}
                />
              ))}
            </MessageListStyled>
            <FormStyled form={form}>
              <Form.Item name="message" style={{ flex: 1, marginBottom: 0 }}>
                <Input
                  placeholder="Nhập tin nhắn"
                  autoComplete="off"
                  bordered={false}
                  onPressEnter={handleOnSubmit}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Button type="primary" onClick={handleOnSubmit}>
                Gửi
              </Button>
            </FormStyled>
          </ContentStyled>
        </>
      ) : (
        <Alert
          message="Hãy chọn phòng"
          type="info"
          showIcon
          style={{ margin: 5 }}
          closable
        />
      )}
    </WrapperStyled>
  );
};

export default ChatWindow;
