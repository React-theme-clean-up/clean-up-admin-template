import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderProgressCircledynamic } from './Circledynamic/index.js'
import { default as renderProgressCirclemini } from './Circlemini/index.js'
import { default as renderProgressCircle } from './Circle/index.js'
import { default as renderProgressDashboard } from './Dashboard/index.js'
import { default as renderProgressDynamic } from './Dynamic/index.js'
import { default as renderProgressFormat } from './Format/index.js'
import { default as renderProgressLinemini } from './Linemini/index.js'
import { default as renderProgressLine } from './Line/index.js'
import { default as renderProgressSegment } from './Segment/index.js'

const Panel = Collapse.Panel

class ProgressItems extends React.Component {
  componentDidMount() {
    renderProgressCircledynamic(ReactDOM, document.getElementById('ProgressCircledynamic'))
    renderProgressCirclemini(ReactDOM, document.getElementById('ProgressCirclemini'))
    renderProgressCircle(ReactDOM, document.getElementById('ProgressCircle'))
    renderProgressDashboard(ReactDOM, document.getElementById('ProgressDashboard'))
    renderProgressDynamic(ReactDOM, document.getElementById('ProgressDynamic'))
    renderProgressFormat(ReactDOM, document.getElementById('ProgressFormat'))
    renderProgressLinemini(ReactDOM, document.getElementById('ProgressLinemini'))
    renderProgressLine(ReactDOM, document.getElementById('ProgressLine'))
    renderProgressSegment(ReactDOM, document.getElementById('ProgressSegment'))
  }

  render() {
    return (
      <div className="ProgressDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Progress</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-progress-demo-circle-dynamic">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Dynamic circular progress bar</strong>
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
                            <div>A dynamic progress bar is better.</div>
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
                              {`import \{ Progress, Button \} from 'antd';
const ButtonGroup = Button.Group;

class App extends React.Component \{
  state = \{
    percent\: 0,
  \}
  increase = () => \{
    let percent = this.state.percent + 10;
    if (percent > 100) \{
      percent = 100;
    \}
    this.setState(\{ percent \});
  \}
  decline = () => \{
    let percent = this.state.percent - 10;
    if (percent < 0) \{
      percent = 0;
    \}
    this.setState(\{ percent \});
  \}
  render() \{
    return (
      <div>
        <Progress type="circle" percent=\{this.state.percent\} />
        <ButtonGroup>
          <Button onClick=\{this.decline\} icon="minus" />
          <Button onClick=\{this.increase\} icon="plus" />
        </ButtonGroup>
      </div>
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
                        <div id="ProgressCircledynamic" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-circle">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Circular progress bar</strong>
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
                            <div>A circular progress bar.</div>
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(
  <div>
    <Progress type="circle" percent=\{75\} />
    <Progress type="circle" percent=\{70\} status="exception" />
    <Progress type="circle" percent=\{100\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressCircle" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-dynamic">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Dynamic</strong>
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
                            <div>A dynamic progress bar is better.</div>
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
                              {`import \{ Progress, Button \} from 'antd';
const ButtonGroup = Button.Group;

class App extends React.Component \{
  state = \{
    percent\: 0,
  \}
  increase = () => \{
    let percent = this.state.percent + 10;
    if (percent > 100) \{
      percent = 100;
    \}
    this.setState(\{ percent \});
  \}
  decline = () => \{
    let percent = this.state.percent - 10;
    if (percent < 0) \{
      percent = 0;
    \}
    this.setState(\{ percent \});
  \}
  render() \{
    return (
      <div>
        <Progress percent=\{this.state.percent\} />
        <ButtonGroup>
          <Button onClick=\{this.decline\} icon="minus" />
          <Button onClick=\{this.increase\} icon="plus" />
        </ButtonGroup>
      </div>
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
                        <div id="ProgressDynamic" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-line-mini">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Mini size progress bar</strong>
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
                            <div>Appropriate for a narrow area.</div>
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(
  <div style=\{\{ width\: 170 \}\}>
    <Progress percent=\{30\} size="small" />
    <Progress percent=\{50\} size="small" status="active" />
    <Progress percent=\{70\} size="small" status="exception" />
    <Progress percent=\{100\} size="small" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressLinemini" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-segment">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">
                            Progress bar with success segment
                          </strong>
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
                            <div>A standard progress bar.</div>
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
                              {`import \{ Tooltip, Progress \} from 'antd';

ReactDOM.render(
  <Tooltip title="3 done / 3 in progress / 4 to do">
    <Progress percent=\{60\} successPercent=\{30\} />
  </Tooltip>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressSegment" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-progress-demo-circle-mini">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">
                            Mini size circular progress bar
                          </strong>
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
                            <div>A smaller circular progress bar.</div>
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(
  <div>
    <Progress type="circle" percent=\{30\} width=\{80\} />
    <Progress type="circle" percent=\{70\} width=\{80\} status="exception" />
    <Progress type="circle" percent=\{100\} width=\{80\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressCirclemini" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-dashboard">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Dashboard</strong>
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
                              By setting <code>{'type=dashboard'}</code>, you can get a dashboard
                              style of progress easily.
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(<Progress type="dashboard" percent=\{75\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressDashboard" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-format">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Custom text format</strong>
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
                              You can custom text format by setting <code>{'format'}</code>.
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(
  <div>
    <Progress type="circle" percent=\{75\} format=\{percent => \`\$\{percent\} Days\`\} />
    <Progress type="circle" percent=\{100\} format=\{() => 'Done'\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressFormat" />
                      </div>
                    </div>
                    <div className="card" id="components-progress-demo-line">
                      <div className="card-header">
                        <h5 className="mb-0 mr-3 d-inline-block text-black">
                          <strong className="text-capitalize">Progress bar</strong>
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
                            <div>A standard progress bar.</div>
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
                              {`import \{ Progress \} from 'antd';

ReactDOM.render(
  <div>
    <Progress percent=\{30\} />
    <Progress percent=\{50\} status="active" />
    <Progress percent=\{70\} status="exception" />
    <Progress percent=\{100\} />
    <Progress percent=\{50\} showInfo=\{false\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                      <div className="card-body">
                        <div id="ProgressLine" />
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

export default ProgressItems