import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderAutocompleteBasic } from './Basic/index.js'
import { default as renderAutocompleteCertaincategory } from './Certaincategory/index.js'
import { default as renderAutocompleteCustom } from './Custom/index.js'
import { default as renderAutocompleteNoncasesensitive } from './Noncasesensitive/index.js'
import { default as renderAutocompleteOptions } from './Options/index.js'
import { default as renderAutocompleteUncertaincategory } from './Uncertaincategory/index.js'

const Panel = Collapse.Panel

class AutocompleteItems extends React.Component {
  componentDidMount() {
    renderAutocompleteBasic(ReactDOM, document.getElementById('AutocompleteBasic'))
    renderAutocompleteCertaincategory(
      ReactDOM,
      document.getElementById('AutocompleteCertaincategory'),
    )
    renderAutocompleteCustom(ReactDOM, document.getElementById('AutocompleteCustom'))
    renderAutocompleteNoncasesensitive(
      ReactDOM,
      document.getElementById('AutocompleteNoncasesensitive'),
    )
    renderAutocompleteOptions(ReactDOM, document.getElementById('AutocompleteOptions'))
    renderAutocompleteUncertaincategory(
      ReactDOM,
      document.getElementById('AutocompleteUncertaincategory'),
    )
  }

  render() {
    return (
      <div className="AutocompleteDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>AutoComplete</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-auto-complete-demo-basic">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Basic Usage</strong>
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>
                              Basic Usage, set datasource of autocomplete with{' '}
                              <code>{'dataSource'}</code> property.
                            </div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ AutoComplete \} from 'antd';

function onSelect(value) \{
  console.log('onSelect', value);
\}

class Complete extends React.Component \{
  state = \{
    dataSource\: [],
  \}

  handleSearch = (value) => \{
    this.setState(\{
      dataSource\: !value ? [] \: [
        value,
        value + value,
        value + value + value,
      ],
    \});
  \}

  render() \{
    const \{ dataSource \} = this.state;
    return (
      <AutoComplete
        dataSource=\{dataSource\}
        style=\{\{ width\: 200 \}\}
        onSelect=\{onSelect\}
        onSearch=\{this.handleSearch\}
        placeholder="input here"
      />
    );
  \}
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteBasic" />
                      </div>
                    </div>
                    <div className="card" id="components-auto-complete-demo-custom">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Customize Input Component</strong>
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>Customize Input Component</div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ AutoComplete, Input \} from 'antd';
const \{ TextArea \} = Input;

function onSelect(value) \{
  console.log('onSelect', value);
\}

class Complete extends React.Component \{
  state = \{
    dataSource\: [],
  \}

  handleSearch = (value) => \{
    this.setState(\{
      dataSource\: !value ? [] \: [
        value,
        value + value,
        value + value + value,
      ],
    \});
  \}

  handleKeyPress = (ev) => \{
    console.log('handleKeyPress', ev);
  \}

  render() \{
    const \{ dataSource \} = this.state;
    return (
      <AutoComplete
        dataSource=\{dataSource\}
        style=\{\{ width\: 200 \}\}
        onSelect=\{onSelect\}
        onSearch=\{this.handleSearch\}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style=\{\{ height\: 50 \}\}
          onKeyPress=\{this.handleKeyPress\}
        />
      </AutoComplete>
    );
  \}
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteCustom" />
                      </div>
                    </div>
                    <div className="card" id="components-auto-complete-demo-options">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Customized</strong>
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>
                              You could pass <code>{'AutoComplete.Option'}</code> as children of{' '}
                              <code>{'AutoComplete'}</code>, instead of using{' '}
                              <code>{'dataSource'}</code>。
                            </div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ AutoComplete \} from 'antd';

const Option = AutoComplete.Option;

class Complete extends React.Component \{
  state = \{
    result\: [],
  \}

  handleSearch = (value) => \{
    let result;
    if (!value || value.indexOf('@') >= 0) \{
      result = [];
    \} else \{
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => \`\$\{value\}@\$\{domain\}\`);
    \}
    this.setState(\{ result \});
  \}

  render() \{
    const \{ result \} = this.state;
    const children = result.map((email) => \{
      return <Option key=\{email\}>\{email\}</Option>;
    \});
    return (
      <AutoComplete
        style=\{\{ width\: 200 \}\}
        onSearch=\{this.handleSearch\}
        placeholder="input here"
      >
        \{children\}
      </AutoComplete>
    );
  \}
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteOptions" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-auto-complete-demo-certain-category">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>
                              Demonstration of [Lookup Patterns: Certain
                              Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).
                              Basic Usage, set datasource of autocomplete with{' '}
                              <code>{'dataSource'}</code> property.
                            </div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Icon, Input, AutoComplete \} from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [\{
  title\: '话题',
  children\: [\{
    title\: 'AntDesign',
    count\: 10000,
  \}, \{
    title\: 'AntDesign UI',
    count\: 10600,
  \}],
\}, \{
  title\: '问题',
  children\: [\{
    title\: 'AntDesign UI 有多好',
    count\: 60100,
  \}, \{
    title\: 'AntDesign 是啥',
    count\: 30010,
  \}],
\}, \{
  title\: '文章',
  children\: [\{
    title\: 'AntDesign 是一个设计语言',
    count\: 100000,
  \}],
\}];

function renderTitle(title) \{
  return (
    <span>
      \{title\}
      <a
        style=\{\{ float\: 'right' \}\}
        href="https\://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  );
\}

const options = dataSource.map(group => (
  <OptGroup
    key=\{group.title\}
    label=\{renderTitle(group.title)\}
  >
    \{group.children.map(opt => (
      <Option key=\{opt.title\} value=\{opt.title\}>
        \{opt.title\}
        <span className="certain-search-item-count">\{opt.count\} 人 关注</span>
      </Option>
    ))\}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https\://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </Option>,
]);

function Complete() \{
  return (
    <div className="certain-category-search-wrapper" style=\{\{ width\: 250 \}\}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth=\{false\}
        dropdownStyle=\{\{ width\: 300 \}\}
        size="large"
        style=\{\{ width\: '100%' \}\}
        dataSource=\{options\}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix=\{<Icon type="search" className="certain-category-icon" />\} />
      </AutoComplete>
    </div>
  );
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteCertaincategory" />
                      </div>
                    </div>
                    <div className="card" id="components-auto-complete-demo-non-case-sensitive">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>A non-case-sensitive AutoComplete</div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ AutoComplete \} from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function Complete() \{
  return (
    <AutoComplete
      style=\{\{ width\: 200 \}\}
      dataSource=\{dataSource\}
      placeholder="try to type \`b\`"
      filterOption=\{(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1\}
    />
  );
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteNoncasesensitive" />
                      </div>
                    </div>
                    <div className="card" id="components-auto-complete-demo-uncertain-category">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="cat__ant-component-collapse-descr">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <Icon
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                  type="info-circle-o"
                                />
                                <span className="ml-2 text-primary">Description</span>
                              </span>
                            }
                            key="1"
                            showArrow={false}
                          >
                            <div>
                              Demonstration of [Lookup Patterns: Uncertain
                              Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).
                              Basic Usage, set datasource of autocomplete with{' '}
                              <code>{'dataSource'}</code> property.
                            </div>
                          </Panel>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Icon, Button, Input, AutoComplete \} from 'antd';
const Option = AutoComplete.Option;

function onSelect(value) \{
  console.log('onSelect', value);
\}

function getRandomInt(max, min = 0) \{
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
\}

function searchResult(query) \{
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => (\{
      query,
      category\: \`\$\{query\}\$\{idx\}\`,
      count\: getRandomInt(200, 100),
    \}));
\}

function renderOption(item) \{
  return (
    <Option key=\{item.category\} text=\{item.category\}>
      \{item.query\} 在
      <a
        href=\{\`https\://s.taobao.com/search?q=\$\{item.query\}\`\}
        target="_blank"
        rel="noopener noreferrer"
      >
        \{item.category\}
      </a>
      区块中
      <span className="global-search-item-count">约 \{item.count\} 个结果</span>
    </Option>
  );
\}

class Complete extends React.Component \{
  state = \{
    dataSource\: [],
  \}

  handleSearch = (value) => \{
    this.setState(\{
      dataSource\: value ? searchResult(value) \: [],
    \});
  \}

  render() \{
    const \{ dataSource \} = this.state;
    return (
      <div className="global-search-wrapper" style=\{\{ width\: 300 \}\}>
        <AutoComplete
          className="global-search"
          size="large"
          style=\{\{ width\: '100%' \}\}
          dataSource=\{dataSource.map(renderOption)\}
          onSelect=\{onSelect\}
          onSearch=\{this.handleSearch\}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix=\{(
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            )\}
          />
        </AutoComplete>
      </div>
    );
  \}
\}

ReactDOM.render(<Complete />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="AutocompleteUncertaincategory" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AutocompleteItems