import React from 'react'
import { Table, Dropdown, Button, Icon, Menu } from 'antd'
import './TaskTable.css'

const data = [{
  key: 1,
  name: 'Mark Stevenson',
  username: '@mdo'
}, {
  key: 2,
  name: 'Jacob Hoffman',
  username: '@fat'
}, {
  key: 3,
  name: 'Larry Page',
  username: '@twitter'
}, {
  key: 3,
  name: 'Mark Stevenson',
  username: '@mdo'
}];

class TaskTable extends React.Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  render() {
    const { selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Username',
      dataIndex: 'username',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Levels',
      dataIndex: 'levels',
      render: () =>
        <div className="cat__core__steps-inline d-block">
          <a href="javascript: void(0);" className="cat__core__step cat__core__step--primary">1</a>
          <a href="javascript: void(0);" className="cat__core__step">2</a>
        </div>
    }, {
      title: 'Actions',
      dataIndex: 'actions',
      render: () =>
        <div className="pull-right">
          <Dropdown overlay={dropdownMenu}>
            <Button style={{ marginLeft: 8 }} size="small">
              Action <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
    }];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          rowSelection={rowSelection}
          pagination={false}
        />

      </div>
    )
  }
}
export default TaskTable