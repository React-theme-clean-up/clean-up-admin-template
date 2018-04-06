import React from 'react'
import {Table, Icon, Input, Button} from 'antd';
import tableData from './data.json'

const defaultPagination = {
  pageSizeOptions: ['10', '50', '100', '250'],
  showSizeChanger: true,
  current: 1,
  size: 'small',
  showTotal: (total: number) => `Total ${total} items`,
  total: 0,
}

class Orders extends React.Component {
  state = {
    tableData: tableData.data,
    data: tableData.data,
    pager: {...defaultPagination},
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
  }

  onInputChange = (e) => {
    this.setState({searchText: e.target.value});
  }

  onSearch = () => {
    const {searchText, tableData} = this.state;
    let reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: tableData.map((record) => {
        let match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    if (this.state.pager) {
      const pager = {...this.state.pager}
      if (pager.pageSize !== pagination.pageSize) {
        this.pageSize = pagination.pageSize
        pager.pageSize = pagination.pageSize
        pager.current = 1
      } else {
        pager.current = pagination.current
      }
      this.setState({
        pager: pager,
      })
    }
  }

  render() {
    let {
      tableData,
      pager,
      data
    } = this.state

    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a className="cat__core__link--underlined" href="#">{'#' + text}</a>,
      sorter: (a, b) => a.id - b.id,
    }, {
      title: 'Purchase Date',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      sorter: (a, b) => a.name.length - b.name.length,
      render: text => <a className="cat__core__link--underlined" href="#">{text}</a>,
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{color: this.state.filtered ? '#108ee9' : '#aaa'}}/>,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    }, {
      title: 'Grand Total',
      dataIndex: 'total',
      key: 'total',
      render: text => <span>{'$' + text}</span>,
      sorter: (a, b) => a.total - b.total,
    }, {
      title: 'Tax',
      dataIndex: 'tax',
      key: 'tax',
      render: text => <span>{'$' + text}</span>,
      sorter: (a, b) => a.tax - b.tax,
    }, {
      title: 'Shipping',
      dataIndex: 'shipping',
      key: 'shipping',
      render: text => <span>{'$' + text}</span>,
      sorter: (a, b) => a.shipping - b.shipping,
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <span className={text === 'Processing' ? 'badge badge-primary' : 'badge badge-default'}>{text}</span>,
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a className="mr-2" href=""><i className="icmn-pencil mr-1"></i> View</a>
          <a href=""><i className="icmn-cross mr-1"></i> Remove</a>
        </span>),
    }]

    return (
      <div className="card">
        <div className="card-header">
          <span className="cat__core__title">
            <strong>Orders</strong>
          </span>
        </div>
        <div className="card-body">
          <Table
            columns={columns}
            dataSource={data}
            pagination={pager}
            onChange={this.handleTableChange}
          />
        </div>
      </div>
    )
  }
}

export default Orders


