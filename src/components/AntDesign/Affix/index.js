import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { Collapse, Icon } from 'antd';

import { default as renderAffixBasic } from './Basic/index.js';
import { default as renderAffixOnchange } from './Onchange/index.js';
import { default as renderAffixTarget } from './Target/index.js';


const Panel = Collapse.Panel;


class AffixItems extends React.Component {

  componentDidMount() {
    renderAffixBasic(ReactDOM, document.getElementById("AffixBasic"));
renderAffixOnchange(ReactDOM, document.getElementById("AffixOnchange"));
renderAffixTarget(ReactDOM, document.getElementById("AffixTarget"));

  }

  render() {
    return (
      <div className="AffixDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Affix</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-affix-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Basic</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>The simplest usage.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Affix, Button \} from 'antd';

ReactDOM.render(
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom=\{0\}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>,
  mountNode
);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="AffixBasic" />
  </div>
</div>
<div className="card" id="components-affix-demo-target">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Container to</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Set a <code>{'target'}</code> for 'Affix', which is listen to scroll event of target element (default is <code>{'window'}</code>).
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Affix, Button \} from 'antd';

class Demo extends React.Component \{
  render() \{
    return (
      <div className="scrollable-container" ref=\{(node) => \{ this.container = node; \}\}>
        <div className="background">
          <Affix target=\{() => this.container\}>
            <Button type="primary">
              Fixed at the top of container
            </Button>
          </Affix>
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
    <div id="AffixTarget" />
  </div>
</div>

                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-affix-demo-on-change">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Callback</strong>
    </h5>
  </div>
  <div className="cat__ant-component-collapse-descr">
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={<span><Icon style={{ fontSize: 16, color: '#9f9f9f' }} type="info-circle-o" /><span className="ml-2 text-primary">Description</span></span>} key="1" showArrow={false}>
        <div>Callback with affixed state.
</div>
      </Panel>
      <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
          {`import \{ Affix, Button \} from 'antd';

ReactDOM.render(
  <Affix offsetTop=\{120\} onChange=\{affixed => console.log(affixed)\}>
    <Button>120px to affix top</Button>
  </Affix>,
  mountNode
);
`}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  </div>
  <div className="card-body">
    <div id="AffixOnchange" />
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

export default AffixItems
