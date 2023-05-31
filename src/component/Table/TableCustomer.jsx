import listCustomer from "./listCustomer";
import { Button, Table } from "antd";
import {CSVLink} from "react-csv";

const columns = [
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
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Button type="primary">Delete</Button>,
  },
];

const TableCustomer = () => {
  return (
    <>
      <CSVLink data={listCustomer} filename="CustomersData">
        <Button type="primary" ghost>Export Customer Data</Button>
        </CSVLink>
        
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => ( 
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={listCustomer}
      />
    </>
  );
};
export { TableCustomer };
