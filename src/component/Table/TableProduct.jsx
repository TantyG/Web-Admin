import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const TableProduct = () => {
  const navigate = useNavigate();
  const LoadDetail = (id) => {
    navigate("/detailsProduct/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/editProduct/" + id);
  };
  const RemoveFunction = (id) => {
    // if (window.confirm("Do you want to remove?")) {
    //   fetch("https://dummyjson.com/products/" + id, {
    //     method: "DELETE",
    //   })
    //     .then((res) => {
    //       alert("Remove success");
    //       window.location.reload();
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // }
    Modal.confirm({
      title: "Are you sure, you want to delete this user ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        fetch("https://dummyjson.com/products/" + id, {
          method: "DELETE",
        })
          .then((res) => {
            alert("Remove success");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message);
          });
      },
    });
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (record) => {
        return (
          <>
            <img
              src={record[0]}
              alt=""
              srcset=""
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: 80,
                height: 80,
              }}
            />
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                LoadEdit(record.id);
              }}
              style={{ color: "green" }}
            />
            <DeleteOutlined
              onClick={() => {
                RemoveFunction(record.id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
            <EyeOutlined
              onClick={() => {
                LoadDetail(record.id);
              }}
              style={{ color: "blue", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const productStore = useSelector((state) => state.product);
  const product = productStore.listProduct.products;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.product.fetchProduct();
  }, [dispatch]);
  return (
    <>
      <Button type="primary" style={{ background: "red" }}>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </Button>{" "}
      <Table columns={columns} dataSource={product} />
    </>
  );
};
export { TableProduct };
