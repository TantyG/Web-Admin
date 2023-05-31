import { Button, Modal, Input, Table, Form } from "antd";
import listUser from "./ListUser";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const TableUser = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [dataSource, setDataSource] = useState(listUser);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => editUser(record)} />
            <DeleteOutlined
              onClick={() => onDeleteUser(record)}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const [count, setCount] = useState(4);
  const onAddUser = () => {
    //const randomNumber = parseInt(Math.random()*1000)
    const newUser = {
      id: count,
      name: `Name ${count}`,
      age: `Age ${count}`,
      address: `Adddress ${count}`,
      gender: `Gender ${count}`,
    };
    setDataSource((pre) => {
      return [...pre, newUser];
    });
    setCount(count + 1);
  };
  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };
  const editUser = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (newValue) => {
    const newData = [
      ...dataSource,
      {
        id: Math.floor(Math.random() * 10000) + 1,
        name: newValue.name,
        age: newValue.age,
        address: newValue.address,
        gender: newValue.gender,
      },
    ];
    setDataSource(newData);
  };
  const formRef = React.useRef(null);
  return (
    <>
      <Button type="primary" ghost onClick={onAddUser}>
        Add User
      </Button>{" "}
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal title="Add User" open={isModalOpen} footer={false}>
        <Form
          {...layout}
          name="control-ref"
          ref={formRef}
          onFinish={handleSubmit}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>{" "}
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Edit User"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((user) => {
              if (user.id === editingUser.id) {
                return editingUser;
              } else {
                return user;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingUser?.name}
          onChange={(e) => {
            setEditingUser((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingUser?.age}
          onChange={(e) => {
            setEditingUser((pre) => {
              return { ...pre, age: e.target.value };
            });
          }}
        />
        <Input
          value={editingUser?.address}
          onChange={(e) => {
            setEditingUser((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
        <Input
          value={editingUser?.gender}
          onChange={(e) => {
            setEditingUser((pre) => {
              return { ...pre, gender: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
};
export { TableUser };
