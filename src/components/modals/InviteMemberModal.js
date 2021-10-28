import { Modal, Form, Spin, Select, Avatar } from "antd";
import { debounce } from "lodash";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../firebase/Config";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value, props.currentMembers).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option key={opt.value} value={opt.value} title={opt.label}>
          <Avatar size="small" src={opt.photoURL}>
            {opt.photoURL ? "" : opt.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {`${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}

async function fetchUserList(search, currentMembers) {
  return db
    .collection("users")
    .get()
    .then((snapshot) => {
      return snapshot.docs
        .map((doc) => ({
          label: doc.data().displayName,
          value: doc.data().uid,
          photoURL: doc.data().photoURL,
        }))
        .filter((opt) => !currentMembers.includes(opt.value));
    });
}

const InviteMemberModal = () => {
  const {
    isInviteMemberModal,
    setIsInviteMemberModal,
    selectedRoomId,
    selectedRoom,
  } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [value, setValue] = useState([]);
  const [form] = Form.useForm();

  const handleOk = () => {
    const roomRef = db.collection("rooms").doc(selectedRoomId);
    roomRef.update({
      members: [...selectedRoom.members, ...value.map((val) => val.value)],
    });
    setIsInviteMemberModal(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsInviteMemberModal(false);
    form.resetFields();
  };

  console.log(value);

  return (
    <div>
      <Modal
        title="Mời thêm thành viên"
        visible={isInviteMemberModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <DebounceSelect
            mode="multiple"
            label="Tên các thành viên"
            value={value}
            placeholder="Tên thành viên"
            fetchOptions={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            currentMembers={selectedRoom.members}
            style={{ width: "100%" }}
          />
        </Form>
      </Modal>
    </div>
  );
};

export default InviteMemberModal;
