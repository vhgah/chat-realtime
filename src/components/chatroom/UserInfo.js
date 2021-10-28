import { Avatar, Button, Typography } from "antd";
import { useContext } from "react";
import { auth } from "../firebase/Config";
import { AuthContext } from "../context/AuthProvider";
import styled from "styled-components";
import { LogoutOutlined } from "@ant-design/icons";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  .username {
    color: white;
    margin-left: 5px;
  }
`;
const UserInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.chatAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text style={{ marginLeft: "5px" }}>
          {displayName}
        </Typography.Text>
      </div>
      <Button
        type="text"
        onClick={() => auth.signOut()}
        icon={<LogoutOutlined />}
      ></Button>
    </WrapperStyled>
  );
};

export default UserInfo;
