// @flow
import React from 'react'
import { Slider, Calendar, Badge, Table, Input, Button, Icon, Carousel } from 'antd'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import UserCard from 'components/CleanComponents/UserCard/UserCard'
import AccountInformation from 'components/CleanComponents/AccountInformation/AccountInformation'
import ProgressGroup from 'components/CleanComponents/ProgressGroup/ProgressGroup'
import TaskTable from 'components/CleanComponents/TaskTable/TaskTable'
import InfoCard from 'components/CleanComponents/InfoCard/InfoCard'

import './Dashboard.css'

// Slider Data //
const sliderMarks = {
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

// Calendar Data //
function getListData(value) {
  let listData
  switch (value.date()) {
    case 3:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ]
      break
    case 6:
      listData = [
        { type: 'success', content: 'This is usual event.' },
        { type: 'warning', content: 'This is warning event.' },
      ]
      break
    case 14:
      listData = [
        { type: 'success', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
      ]
      break
    default:
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

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394
  }
}

function monthCellRender(value) {
  const num = getMonthData(value)
  return num
    ? <div className="notes-month">
        <section>
          {num}
        </section>
        <span>Backlog number</span>
      </div>
    : null
}

// Chartist Line Data //
const chartistData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [[5, 2, 4, 2, 5], [3, 1, 5, 4, 2], [0, 4, 3, 5, 1]],
}

const chartistOptions = {
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

// Chartist Bar Data //
const chartistBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]],
}

const chartistBarOptions = {
  seriesBarDistance: 10,
}

// Table Data //
const tableData = [
  {
    key: '1',
    name: 'Damon',
    position: '5516 Adolfo Green',
    office: 'Littelhaven',
    age: 18,
    date: '2014/06/13',
    salary: 553.536,
  },
  {
    key: '2',
    name: 'Miracle',
    position: '176 Hirthe Squares',
    office: 'Ryleetown',
    age: 35,
    date: '2013/09/27',
    salary: 784.802,
  },
  {
    key: '3',
    name: 'Torrey',
    position: '1995 Richie Neck',
    office: 'West Sedrickstad',
    age: 15,
    date: '2014/09/12',
    salary: 344.302,
  },
]

class Dashboard extends React.Component {
  state = {
    filterDropdownVisible: false,
    tableData,
    searchText: '',
    filtered: false,
    sortedInfo: null,
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
    let { sortedInfo } = this.state
    const columns = [
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
        // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
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
        // sortOrder: sortedInfo.columnKey === 'salary' && sortedInfo.order,
      },
    ]

    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            <section className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Server Configuration</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-5">
                  <Slider marks={sliderMarks} defaultValue={24} />
                </div>
                <div className="mb-4">
                  <Slider range marks={sliderMarks} defaultValue={[18, 25]} />
                </div>
              </div>
            </section>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Calendar</strong>
                </h5>
              </div>
              <div className="card-body">
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Revenue Statistics, Billions</strong>
                </h5>
                <span className="mr-2 nowrap">
                  <span className="cat__core__donut cat__core__donut--primary" />
                  Girls
                </span>
                <span className="mr-2 nowrap">
                  <span className="cat__core__donut cat__core__donut--success" />
                  Guns
                </span>
                <span className="mr-2 nowrap">
                  <span className="cat__core__donut cat__core__donut--yellow" />
                  Drugs
                </span>
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={chartistData}
                  options={chartistOptions}
                  type="Line"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Site Visits Growth, %</strong>
                </h5>
                <span className="mr-2 nowrap">
                  <span className="cat__core__donut cat__core__donut--primary" />
                  Income
                </span>
                <span className="mr-2 nowrap">
                  <span className="cat__core__donut cat__core__donut--success" />
                  Outcome
                </span>
              </div>
              <div className="card-body">
                <ChartistGraph
                  data={chartistBarData}
                  options={chartistBarOptions}
                  type="Bar"
                  className="chart-area height-300 mt-4 chartist"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
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
                  <strong>Account Information</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-7">
                    <AccountInformation />
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
                  <strong>Task Table</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <TaskTable />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Resent Works</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-4">
                    <InfoCard />
                  </div>
                  <div className="col-xl-4">
                    <InfoCard />
                  </div>
                  <div className="col-xl-4">
                    <InfoCard />
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
                <div className="row">
                  <div className="col-lg-6">
                    <Carousel effect="scrollx" autoplay="true">
                      <div className="bg-default">
                        <a
                          href="javascript: void(0);"
                          className="cat__core__widget__3__body text-white"
                        >
                          <div className="cat__core__widget__3__icon">
                            <i className="icmn-accessibility" />
                          </div>
                          <h2>Sales Growth</h2>
                          <p>View Report</p>
                        </a>
                      </div>
                      <div className="bg-default">
                        <a
                          href="javascript: void(0);"
                          className="cat__core__widget__3__body text-white"
                        >
                          <div className="cat__core__widget__3__icon">
                            <i className="icmn-download" />
                          </div>
                          <h2>All Reports</h2>
                          <p>Pdf Download</p>
                        </a>
                      </div>
                    </Carousel>
                  </div>
                </div>
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
                    <div className="cat__core__step cat__core__step--squared cat__core__step--success">
                      <span className="cat__core__step__digit">
                        <i className="icmn-home" />
                      </span>
                      <div className="cat__core__step__desc">
                        <span className="cat__core__step__title">Block Title</span>
                        <p>Waiting for review</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cat__core__step cat__core__step--squared cat__core__step--primary">
                      <span className="cat__core__step__digit">
                        <i className="icmn-key" />
                      </span>
                      <div className="cat__core__step__desc">
                        <span className="cat__core__step__title">Block Title</span>
                        <p>Waiting for review</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cat__core__step cat__core__step--squared cat__core__step--warning">
                      <span className="cat__core__step__digit">
                        <i className="icmn-play2" />
                      </span>
                      <div className="cat__core__step__desc">
                        <span className="cat__core__step__title">Block Title</span>
                        <p>Waiting for review</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cat__core__step cat__core__step--disabled">
                      <span className="cat__core__step__digit">
                        <i className="icmn-database" />
                      </span>
                      <div className="cat__core__step__desc">
                        <span className="cat__core__step__title">Block Title</span>
                        <p>Waiting for review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Table
                  columns={columns}
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

export default Dashboard
