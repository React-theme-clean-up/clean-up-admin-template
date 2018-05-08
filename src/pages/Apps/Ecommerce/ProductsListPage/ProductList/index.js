import React from 'react'
import { Table, Icon, Input, Button } from 'antd'
import tableData from './data.json'
import './style.css'

const defaultPagination = {
  pageSizeOptions: ['10', '50', '100', '250'],
  showSizeChanger: true,
  current: 1,
  size: 'small',
  showTotal: (total: number) => `Total ${total} items`,
  total: 0,
}

class ProductsList extends React.Component {
  state = {
    tableData: tableData.data,
    data: tableData.data,
    pager: { ...defaultPagination },
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }

  onSearch = () => {
    const { searchText, tableData } = this.state
    let reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: tableData
        .map(record => {
          let match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name.split(reg).map(
                  (text, i) =>
                    i > 0
                      ? [
                          <span className="highlight">
                            {match[0]}
                          </span>,
                          text,
                        ]
                      : text,
                )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    if (this.state.pager) {
      const pager = { ...this.state.pager }
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
    let { pager, data } = this.state

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text =>
          <a className="utils__link--underlined" href="javascript: void(0);">
            {'#' + text}
          </a>,
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Thumbnail',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        render: text =>
          <a href="javascript: void(0);" className="productsList__thumbnail">
            <img src={text} alt="" />
          </a>,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        render: text =>
          <a className="utils__link--underlined" href="javascript: void(0);">
            {text}
          </a>,
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        ),
        filterIcon: (
          <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus(),
          )
        },
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a, b) => a.type.length - b.type.length,
      },
      {
        title: 'Attribute Set',
        dataIndex: 'attribute',
        key: 'attribute',
        sorter: (a, b) => a.attribute.length - b.attribute.length,
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
        sorter: (a, b) => a.sku.length - b.sku.length,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: text =>
          <span>
            {'$' + text}
          </span>,
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) =>
          <span>
            <a href="" className="mr-2">
              <i className="icmn-pencil mr-1" /> View
            </a>
            <a href="">
              <i className="icmn-cross mr-1" /> Remove
            </a>
          </span>,
      },
    ]

    return (
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 mr-3 d-inline-block text-black">
            <strong>Products List</strong>
          </h5>
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

export default ProductsList
