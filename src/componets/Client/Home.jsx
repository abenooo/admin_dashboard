import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { isEmpty } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import './dataTable.css';
import { Link } from "react-router-dom";
const DataTable = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [searchColText, setSearchColText] = useState("");
  const [searchedCol, setSearchedCol] = useState("");
  let [filteredInfo, setFilteredInfo] = useState({});
  let [filteredData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://localhost:1337/archives"
    );
    setGridData(response.data);
    setLoading(false);
  };

  const handleDelete = (value) => {
    const dataSource = [...modifiedData];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filteredData);
  };

  const modifiedData = gridData.map(({ index,body, ...item }) => ({
    ...item,
    key: item.id,
    number: item.index,
    // image: item.file[0].url,
    image:<img style={{height:"40px", width:"40px", borderRadius:"30px" }} src={`http://localhost:1337${item.file[0].url}`} />,
    // category:item.categories[0].title,
    // info: `My name is ${item.email.split("@")[0]} and i am ${
    //   Math.floor(Math.random() * 6) + 20
    // } year old`,
    // age: Math.floor(Math.random() * 6) + 20,
    // comment: isEmpty(body) ? item.comment : body,
  }));

  console.log("modifiedData", modifiedData);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 0, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleResetCol(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      searchedCol === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchColText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchColText(selectedKeys[0]);
    setSearchedCol(dataIndex);
  };

  const handleResetCol = (clearFilters) => {
    clearFilters();
    setSearchColText("");
  };

  const edit = (record) => {
    form.setFieldsValue({
      userId: "",
      email: "",
      comment: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const handleChange = (_, filters, sorter) => {
    console.log("sorter", sorter);
    console.log("filters", filters);
    const { order, field } = sorter;
    setFilteredInfo(filters);
    setSortedInfo({ columnKey: field, order });
  };

  console.log("filteredInfo", filteredInfo);

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...modifiedData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setGridData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  }) => {
    const input = <Input />;
    return (
      <>
      <td {...restProps}>
        {editing ? (
          <Form.Item
          userId={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please input ${title}`,
              },
            ]}
          >
            {input}
          </Form.Item>
        ) : (
          children
        )}
      </td>
      </>
    );
  };

  const columns = [
    {
      id: "ID",
      dataIndex: "id",
    },
    {
      id: "Number",
      dataIndex: "number",
    },
    {
      title: "image",
      dataIndex: "image",
      align: "center",
      width:"50px",
      height:"50px",
      type:"img",
      editable: true,
      sorter: (a, b) => a.userId.length - b.userId.length,
      sortOrder: sortedInfo.columnKey === "userId" && sortedInfo.order,
      ...getColumnSearchProps("userId"),
    },
    // {
    //   title: "category name",
    //   dataIndex: "category",
    //   align: "center",
    //   width:"50px",
    //   height:"50px",
    //   type:"img",
    //   editable: true,
    //   sorter: (a, b) => a.userId.length - b.userId.length,
    //   sortOrder: sortedInfo.columnKey === "userId" && sortedInfo.order,
    //   ...getColumnSearchProps("userId"),
    // },
    {
      title: "Date",
      dataIndex: "created_at",
      align: "center",
      editable: true,
      sorter: (a, b) => a.userId.length - b.userId.length,
      sortOrder: sortedInfo.columnKey === "userId" && sortedInfo.order,
      ...getColumnSearchProps("userId"),
    },
    {
      title: "Title",
      dataIndex: "title",
      align: "center",
      editable: true,
      sorter: (a, b) => a.userId.length - b.userId.length,
      sortOrder: sortedInfo.columnKey === "userId" && sortedInfo.order,
      ...getColumnSearchProps("userId"),
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "center",
      editable: true,
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
      ...getColumnSearchProps("email"),
    },
   
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return modifiedData.length >= 1 ? (
          <Space>
 <Link to={`/categoryDetails/${`item.id`}`}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                      />
                                    </svg>Details
                                  </Link>
          </Space>
          // <Space>
          //   <Popconfirm
          //     title="Sure to delete?"
          //     onConfirm={() => handleDelete(record)}
          //   >
          //     <Button type="primary" disabled={editable} danger>
          //       Delete
          //     </Button>
          //   </Popconfirm>
          //   {editable ? (
          //     <span>
          //       <Space size="middle">
          //         <Button
          //           onClick={(e) => save(record.key)}
          //           type="primary"
          //           style={{ marginRight: 8 }}
          //         >
          //           Save
          //         </Button>
          //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
          //           <Button>Cancel</Button>
          //         </Popconfirm>
          //       </Space>
          //     </span>
          //   ) : (
          //     <Button onClick={() => edit(record)} type="primary">
          //       Edit
          //     </Button>
          //   )}
          // </Space>
        ) : null;
      },
    },
  ];

  const isEditing = (record) => {
    return record.key === editingKey;
  };

  const clearAll = () => {
    setSortedInfo({});
    setFilteredInfo({});
    setSearchText("");
    loadData();
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };
  const globalSearch = () => {
    filteredData = modifiedData.filter((value) => {
      return (
        value.userId.toLowerCase().includes(searchText.toLowerCase()) ||
        value.email.toLowerCase().includes(searchText.toLowerCase()) ||
        value.comment.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setGridData(filteredData);
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Enter Search Text"
          onChange={handleSearch}
          type="text"
          allowClear
          value={searchText}
        />
        <Button type="primary" onClick={globalSearch}>
          Search
        </Button>
        <Button onClick={clearAll}>Clear All</Button>
      </Space>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={mergedColumns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.info}</p>
            ),
            rowExpandable: (record) => record.info !== "Not Expandable",
          }}
          dataSource={
            filteredData && filteredData.length ? filteredData : modifiedData
          }
          bordered
          loading={loading}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default DataTable;
