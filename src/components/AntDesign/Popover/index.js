import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { Collapse, Icon } from 'antd';

import { default as renderPopoverArrowpointatcenter } from './Arrowpointatcenter/index.js';
import { default as renderPopoverBasic } from './Basic/index.js';
import { default as renderPopoverControl } from './Control/index.js';
import { default as renderPopoverPlacement } from './Placement/index.js';
import { default as renderPopoverTriggerType } from './TriggerType/index.js';


const Panel = Collapse.Panel;


class PopoverItems extends React.Component {

  componentDidMount() {
    renderPopoverArrowpointatcenter(ReactDOM, document.getElementById("PopoverArrowpointatcenter"));
renderPopoverBasic(ReactDOM, document.getElementById("PopoverBasic"));
renderPopoverControl(ReactDOM, document.getElementById("PopoverControl"));
renderPopoverPlacement(ReactDOM, document.getElementById("PopoverPlacement"));
renderPopoverTriggerType(ReactDOM, document.getElementById("PopoverTriggerType"));

  }

  render() {
    return (
      <div className="PopoverDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Popover</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-popover-demo-arrow-point-at-center">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Arrow pointing</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>The arrow points to the center of the target element, which set <code>{'arrowPointAtCenter'}</code>.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Popover, Button \} from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popover placement="topLeft" title=\{text\} content=\{content\}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title=\{text\} content=\{content\} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="PopoverArrowpointatcenter" />
  </div>
</div>
<div className="card" id="components-popover-demo-control">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Controlling the close of the dialog</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Use <code>{'visible'}</code> prop to control the display of the card.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Popover, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    visible\: false,
  \}
  hide = () => \{
    this.setState(\{
      visible\: false,
    \});
  \}
  handleVisibleChange = (visible) => \{
    this.setState(\{ visible \});
  \}
  render() \{
    return (
      <Popover
        content=\{<a onClick=\{this.hide\}>Close</a>\}
        title="Title"
        trigger="click"
        visible=\{this.state.visible\}
        onVisibleChange=\{this.handleVisibleChange\}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="PopoverControl" />
  </div>
</div>
<div className="card" id="components-popover-demo-triggerType">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Three ways to trigger</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Mouse to click, focus and move in.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Popover, Button \} from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popover content=\{content\} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content=\{content\} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content=\{content\} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="PopoverTriggerType" />
  </div>
</div>

                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-popover-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Basic</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>The most basic example. The size of the floating layer depends on the contents region.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Popover, Button \} from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <Popover content=\{content\} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="PopoverBasic" />
  </div>
</div>
<div className="card" id="components-popover-demo-placement">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Placement</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>There are 12 <code>{'placement'}</code> options available.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Popover, Button \} from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style=\{\{ marginLeft\: buttonWidth, whiteSpace\: 'nowrap' \}\}>
      <Popover placement="topLeft" title=\{text\} content=\{content\} trigger="click">
        <Button>TL</Button>
      </Popover>
      <Popover placement="top" title=\{text\} content=\{content\} trigger="click">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topRight" title=\{text\} content=\{content\} trigger="click">
        <Button>TR</Button>
      </Popover>
    </div>
    <div style=\{\{ width\: buttonWidth, float\: 'left' \}\}>
      <Popover placement="leftTop" title=\{text\} content=\{content\} trigger="click">
        <Button>LT</Button>
      </Popover>
      <Popover placement="left" title=\{text\} content=\{content\} trigger="click">
        <Button>Left</Button>
      </Popover>
      <Popover placement="leftBottom" title=\{text\} content=\{content\} trigger="click">
        <Button>LB</Button>
      </Popover>
    </div>
    <div style=\{\{ width\: buttonWidth, marginLeft\: (buttonWidth * 4) + 24 \}\}>
      <Popover placement="rightTop" title=\{text\} content=\{content\} trigger="click">
        <Button>RT</Button>
      </Popover>
      <Popover placement="right" title=\{text\} content=\{content\} trigger="click">
        <Button>Right</Button>
      </Popover>
      <Popover placement="rightBottom" title=\{text\} content=\{content\} trigger="click">
        <Button>RB</Button>
      </Popover>
    </div>
    <div style=\{\{ marginLeft\: buttonWidth, clear\: 'both', whiteSpace\: 'nowrap' \}\}>
      <Popover placement="bottomLeft" title=\{text\} content=\{content\} trigger="click">
        <Button>BL</Button>
      </Popover>
      <Popover placement="bottom" title=\{text\} content=\{content\} trigger="click">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomRight" title=\{text\} content=\{content\} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>
, mountNode);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="PopoverPlacement" />
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

export default PopoverItems
