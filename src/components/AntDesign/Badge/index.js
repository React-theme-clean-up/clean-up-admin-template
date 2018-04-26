import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { Collapse, Icon } from 'antd';

import { default as renderBadgeBasic } from './Basic/index.js';
import { default as renderBadgeChange } from './Change/index.js';
import { default as renderBadgeDot } from './Dot/index.js';
import { default as renderBadgeLink } from './Link/index.js';
import { default as renderBadgeNowrapper } from './Nowrapper/index.js';
import { default as renderBadgeOverflow } from './Overflow/index.js';
import { default as renderBadgeStatus } from './Status/index.js';


const Panel = Collapse.Panel;


class BadgeItems extends React.Component {

  componentDidMount() {
    renderBadgeBasic(ReactDOM, document.getElementById("BadgeBasic"));
renderBadgeChange(ReactDOM, document.getElementById("BadgeChange"));
renderBadgeDot(ReactDOM, document.getElementById("BadgeDot"));
renderBadgeLink(ReactDOM, document.getElementById("BadgeLink"));
renderBadgeNowrapper(ReactDOM, document.getElementById("BadgeNowrapper"));
renderBadgeOverflow(ReactDOM, document.getElementById("BadgeOverflow"));
renderBadgeStatus(ReactDOM, document.getElementById("BadgeStatus"));

  }

  render() {
    return (
      <div className="BadgeDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Badge</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-badge-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Basic</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Simplest Usage. Badge will be hidden when <code>{'count'}</code> is <code>{'0'}</code>, but we can use <code>{'showZero'}</code> to show it.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge \} from 'antd';

ReactDOM.render(
  <div>
    <Badge count=\{5\}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count=\{0\} showZero>
      <a href="#" className="head-example" />
    </Badge>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeBasic" />
  </div>
</div>
<div className="card" id="components-badge-demo-dot">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Red badge</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>This will simply display a red badge, without a specific count.
If count equals 0, it won't display the dot.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge, Icon \} from 'antd';

ReactDOM.render(
  <div>
    <Badge dot>
      <Icon type="notification" />
    </Badge>
    <Badge count=\{0\} dot>
      <Icon type="notification" />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeDot" />
  </div>
</div>
<div className="card" id="components-badge-demo-no-wrapper">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Standalone</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Used in standalone when children is empty.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge \} from 'antd';

ReactDOM.render(
  <div>
    <Badge count=\{25\} />
    <Badge count=\{4\} style=\{\{ backgroundColor\: '#fff', color\: '#999', boxShadow\: '0 0 0 1px #d9d9d9 inset' \}\} />
    <Badge count=\{109\} style=\{\{ backgroundColor\: '#52c41a' \}\} />
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeNowrapper" />
  </div>
</div>
<div className="card" id="components-badge-demo-status">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Status</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Standalone badge with status.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge \} from 'antd';

ReactDOM.render(
  <div>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeStatus" />
  </div>
</div>

                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-badge-demo-change">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Dynamic</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>The count will be animated as it changes.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge, Button, Icon, Switch \} from 'antd';
const ButtonGroup = Button.Group;

class Demo extends React.Component \{
  state = \{
    count\: 5,
    show\: true,
  \}

  increase = () => \{
    const count = this.state.count + 1;
    this.setState(\{ count \});
  \}

  decline = () => \{
    let count = this.state.count - 1;
    if (count < 0) \{
      count = 0;
    \}
    this.setState(\{ count \});
  \}

  onChange = (show) => \{
    this.setState(\{ show \});
  \}

  render() \{
    return (
      <div>
        <div>
          <Badge count=\{this.state.count\}>
            <a href="#" className="head-example" />
          </Badge>
          <ButtonGroup>
            <Button onClick=\{this.decline\}>
              <Icon type="minus" />
            </Button>
            <Button onClick=\{this.increase\}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
        </div>
        <div style=\{\{ marginTop\: 10 \}\}>
          <Badge dot=\{this.state.show\}>
            <a href="#" className="head-example" />
          </Badge>
          <Switch onChange=\{this.onChange\} checked=\{this.state.show\} />
        </div>
      </div>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeChange" />
  </div>
</div>
<div className="card" id="components-badge-demo-link">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Clickable</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>The badge can be wrapped with <code>{'a'}</code> tag to make it linkable.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge \} from 'antd';

ReactDOM.render(
  <a href="#">
    <Badge count=\{5\}>
      <span className="head-example" />
    </Badge>
  </a>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeLink" />
  </div>
</div>
<div className="card" id="components-badge-demo-overflow">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Overflow Count</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div><code>{'${overflowCount}+'}</code> is displayed when count is larger than <code>{'overflowCount'}</code>. The default value of <code>{'overflowCount'}</code> is <code>{'99'}</code>.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Badge \} from 'antd';

ReactDOM.render(
  <div>
    <Badge count=\{99\}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count=\{100\}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count=\{99\} overflowCount=\{10\}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count=\{1000\} overflowCount=\{999\}>
      <a href="#" className="head-example" />
    </Badge>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="BadgeOverflow" />
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

export default BadgeItems
