import React from 'react'
import { Progress } from 'antd';
import { progressGroup } from './data.json'

class ProgressGroup extends React.Component {
  render() {
    return (
      <div>
        <strong>{progressGroup.first.name}</strong>
        <p className="text-muted">{progressGroup.first.description}</p>
        <div className="mb-3">
          <Progress percent={progressGroup.first.progress} status={progressGroup.first.status} />
        </div>
        <strong>{progressGroup.second.name}</strong>
        <p className="text-muted">{progressGroup.second.description}</p>
        <div className="mb-3">
          <Progress percent={progressGroup.second.progress} status={progressGroup.second.status} />
        </div>
        <strong>{progressGroup.third.name}</strong>
        <p className="text-muted">{progressGroup.third.description}</p>
        <div className="mb-3">
          <Progress percent={progressGroup.third.progress} status={progressGroup.third.status} />
        </div>
        <strong>{progressGroup.fourth.name}</strong>
        <p className="text-muted">{progressGroup.fourth.description}</p>
        <div className="mb-3">
          <Progress percent={progressGroup.fourth.progress} status={progressGroup.fourth.status} />
        </div>
        <strong>{progressGroup.fives.name}</strong>
        <p className="text-muted">{progressGroup.fives.description}</p>
        <div className="mb-3">
          <Progress percent={progressGroup.fives.progress} />
        </div>
      </div>
    )
  }
}
export default ProgressGroup