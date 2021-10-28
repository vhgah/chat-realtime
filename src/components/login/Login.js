import { Button, Col, Row, Typography } from "antd";
import firebase, { auth, db } from "../firebase/Config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const handleLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      googleProvider
    );

    if (additionalUserInfo?.isNewUser) {
      db.collection("users").add({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title>Bo em hut</Title>
          <Button
            style={{ width: "100%", marginBottom: "5px" }}
            onClick={handleLogin}
          >
            Đăng nhập bằng Facebook
          </Button>
          <Button style={{ width: "100%" }} onClick={handleLogin}>
            Đăng nhập bằng Google
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
