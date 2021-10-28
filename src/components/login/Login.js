import { Button, Col, Row, Typography } from "antd";
import firebase, { auth } from "../firebase/Config";
import { addDocument, generateKeywords } from "../firebase/Services";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keyword: generateKeywords(user.displayName),
      });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title>Chat App</Title>
          <Text
            style={{ textAlign: "center", display: "block", marginBottom: 5 }}
          >
            Đăng nhập
          </Text>
          <Button
            style={{ width: "100%", marginBottom: "5px" }}
            onClick={() => handleLogin(fbProvider)}
            icon={<FacebookOutlined />}
          >
            Facebook
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => handleLogin(googleProvider)}
            icon={<GoogleOutlined />}
          >
            Google
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
