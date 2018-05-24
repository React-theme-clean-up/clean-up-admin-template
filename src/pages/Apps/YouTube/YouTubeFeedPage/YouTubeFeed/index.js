import React from 'react'
import { Pagination } from 'antd'
import './style.scss'
import data from './data.json'

class YouTubeFeed extends React.Component {
  state = {
    partitions: data.partitions,
  }

  render() {
    let { partitions } = this.state
    return (
      <section className="card">
        <div className="card-header">
          <h5 className="mb-0 mr-3 d-inline-block text-black">
            <strong>YouTube Feed</strong>
          </h5>
        </div>
        <div className="card-block video-page video-page--feed">
          <div className="video-page__feeds">
            {partitions.map((partition, index) => (
              <div className="video-page__feed-partition" key={index}>
                <div className="video-page__partition-head">
                  <h2 className="video-page__partition-title">
                    {partition.cover !== undefined && (
                      <img
                        className="video-page__partition-thumb mr-3"
                        src={partition.cover}
                        alt=""
                      />
                    )}
                    {partition.name}
                  </h2>
                </div>
                <ul className="video-page__partition-content">
                  {partition.videos.map((video, index) => (
                    <li className="video-page__next-item video-page__next-item--feed" key={index}>
                      <a href="javascript: void(0);" className="video-page__next-item-link">
                        <div className="video-page__item-thumb">
                          <img
                            className="video-page__item-thumb-img"
                            src={video.cover}
                            alt={video.name}
                          />
                        </div>
                        <div className="video-page__item-descr">
                          <span className="video-page__item-name">{video.name}</span>
                          <span className="video-page__item-author">{video.author}</span>
                          <span className="video-page__item-views text-muted">
                            <span className="video-page__item-count">{video.views}</span>
                            views
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </section>
    )
  }
}

export default YouTubeFeed
