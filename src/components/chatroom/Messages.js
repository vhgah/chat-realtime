import { Avatar, Typography } from "antd";

const Messages = ({ text, displayName, createdAt, photoURL }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div>
        <Avatar size="small" src={photoURL}>
          A
        </Avatar>
        <Typography.Text style={{ marginLeft: "5px", fontWeight: "bold" }}>
          {displayName}
        </Typography.Text>
        <Typography.Text
          style={{ marginLeft: "10px", fontSize: "11px", color: "#a7a7a7" }}
        >
          {createdAt}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text style={{ marginLeft: "5px" }}>{text}</Typography.Text>
      </div>
    </div>
  );
};

export default Messages;
