import React from 'react'
import { Slider, Calendar, Badge, Table, Input, Dropdown, Button, Icon, Menu } from 'antd'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import Donut from 'components/Clean/Donut'
import UserCard from 'components/Clean/UserCard'
import ProfileHeadCard from 'components/Clean/ProfileHeadCard'
import ProgressGroup from 'components/Clean/ProgressGroup'
import SliderCard from 'components/Clean/SliderCard'
import InfoCard from 'components/Clean/InfoCard'
import Chat from 'components/Clean/Chat'
import './styles.css'
import {
  rangeSlider,
  calendarData,
  weekChartistData,
  monthCartistData,
  taskTableData,
  tableData,
} from './data.json'

// Slider Range Settings //
const rangeMarks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
}

// Calendar Settings //
function getListData(value) {
  let date = value.date()
  let itemName = 'date_' + date
  let listData
  if (calendarData[itemName] !== undefined) {
    listData = calendarData[itemName]
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className="events">
      {listData.map(item =>
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>,
      )}
    </ul>
  )
}

// Week Chartist Settings //
const weekChartistOptions = {
  fullWidth: true,
  showArea: false,
  chartPadding: {
    right: 30,
    left: 0,
  },
  plugins: [
    Chartist.plugins.tooltip({
      seriesName: false,
    }),
  ],
}

// Month Chartist Settings //
const monthChartistOptions = {
  seriesBarDistance: 10,
}

class DashboardAlpha extends React.Component {
  state = {
    rangeMarks: rangeMarks,
    weekChartistData: weekChartistData,
    monthCartistData: monthCartistData,
    taskTableSelectedRowKeys: [],
    tableData: tableData,
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
    sortedInfo: null,
  }

  // Task Table Settings //
  onSelectChange = taskTableSelectedRowKeys => {
    this.setState({ taskTableSelectedRowKeys })
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter)
    this.setState({
      sortedInfo: sorter,
    })
  }

  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      tableData: tableData
        .map(record => {
          const match = record.name.match(reg)
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
                          <span style={{ backgroundColor: 'yellow' }}>
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

  render() {
    let {
      rangeMarks,
      weekChartistData,
      monthCartistData,
      taskTableSelectedRowKeys,
      // sortedInfo,
    } = this.state

    // Task Table Settings //
    const taskTableRowSelection = {
      taskTableSelectedRowKeys,
      onChange: this.onSelectChange,
    }

    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )

    const taskTableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text =>
          <a href={''}>
            {text}
          </a>,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        render: text =>
          <a href={''}>
            {text}
          </a>,
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: () =>
          <div className="pull-right">
            <Dropdown overlay={dropdownMenu}>
              <Button style={{ marginLeft: 8 }} size="small">
                Action <Icon type="down" />
              </Button>
            </Dropdown>
          </div>,
      },
    ]

    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
      },
    ]

    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Account Information</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-7">
                    <ProfileHeadCard />
                  </div>
                  <div className="col-xl-5">
                    <ProgressGroup />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Employees</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-4">
                    <UserCard />
                  </div>
                  <div className="col-xl-4">
                    <UserCard />
                  </div>
                  <div className="col-xl-4">
                    <UserCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Task Table</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <Table
                      columns={taskTableColumns}
                      dataSource={taskTableData}
                      rowSelection={taskTableRowSelection}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Chat</strong>
                </h5>
              </div>
              <div className="card-body">
                <Chat />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Information Cards</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="database" type="danger" />
                  </div>
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="users" type="danger" />
                  </div>
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="home" />
                  </div>
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="database" btnType="success" type="default" />
                  </div>
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="users" btnType="warning" />
                  </div>
                  <div className="col-lg-4">
                    <InfoCard form="interactive" icon="home" btnType="default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Server Info</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <SliderCard />
                  </div>
                  <div className="col-lg-6">
                    <SliderCard inverse={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Server Configuration</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-5">
                  <Slider marks={rangeMarks} defaultValue={rangeSlider.first} />
                </div>
                <div className="mb-4">
                  <Slider range marks={rangeMarks} defaultValue={rangeSlider.second} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Server Statistics</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="database" type="success" />
                  </div>
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="users" type="primary" />
                  </div>
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="bullhorn" type="warning" />
                  </div>
                  <div className="col-lg-6">
                    <InfoCard form="stats" icon="price-tags" type="danger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Week Revenue Statistics, Billions</strong>
                </h5>
                <Donut type="primary" name="Nuts" />
                <Donut type="success" name="Apples" />
                <Donut color="yellow" name="Peaches" />
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={weekChartistData}
                  options={weekChartistOptions}
                  type="Line"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Month Site Visits Growth, %</strong>
                </h5>
                <Donut type="primary" name="Income" />
                <Donut type="success" name="Outcome" />
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={monthCartistData}
                  options={monthChartistOptions}
                  type="Bar"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Calendar</strong>
                </h5>
              </div>
              <div className="card-body">
                <Calendar dateCellRender={dateCellRender} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="home" type="danger" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="key" type="primary" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="play2" type="warning" />
                  </div>
                  <div className="col-lg-3">
                    <InfoCard form="bordered" icon="database" type="sucess" />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Table
                  columns={tableColumns}
                  dataSource={this.state.tableData}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardAlpha
