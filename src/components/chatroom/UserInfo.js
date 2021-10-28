import { Avatar, Button, Typography } from "antd";
import { auth } from "../firebase/Config";

const UserInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 16px",
      }}
    >
      <div>
        <Avatar>A</Avatar>
        <Typography.Text style={{ marginLeft: "5px" }}>Abc</Typography.Text>
      </div>
      <Button onClick={() => auth.signOut()}>Đăng xuất</Button>
    </div>
  );
};

export default UserInfo;
