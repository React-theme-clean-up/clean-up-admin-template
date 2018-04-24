import React from 'react'
import { Checkbox, Dropdown, Icon, Menu, Input, Button } from 'antd';
import Avatar from 'components/CleanComponents/Avatar/Avatar'
import './YouTubeView.css'
import data from './data.json'

const { TextArea } = Input

const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)


class YouTubeView extends React.Component {

  state = {
    viewData: data.viewData,
    upNext: data.upNext,
  }

  render() {
    let {
      viewData,
      upNext,
    } = this.state
    return (
      <section className="card">
        <div className="card-header">
        <span className="core__title">
            <strong>YouTube View</strong>
        </span>
        </div>
        <div className="card-block">
          <div className="video-page clearfix">
            <div className="video-page__main-content">
              <div className="mediatec-cleanvideoplayer">
                <ul data-theme="default">
                  <li data-title={viewData.title} data-type={viewData.type} data-url={viewData.url} data-poster={viewData.cover} data-free="true"></li>
                </ul>
              </div>
              <div className="video-page__descr">
                <div className="video-page__descr-wrapper card">
                  <div className="video-page__published mb-2">
                    <strong>Published on <span className="video-page__published-time">{viewData.date}</span></strong>
                    <div className="pull-right">
                      <Dropdown overlay={actions}>
                        <a className="ant-dropdown-link" href="#">
                          Actions <Icon type="down" />
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="video-page__descr-text mb-0">{viewData.description}</p>
                </div>
              </div>
              <div className="video-page__comments">
                <div className="video-page__comments-wrapper card">
                  <div className="video-page__add-comment">
                    <div className="video-page__comment-user">
                      <Avatar size="50" src={viewData.accountImg}/>
                    </div>
                    <div className="video-page__comment-form">
                      <TextArea rows={3} placeholder="Write a comment..."/>
                      <div className="mt-3">
                        <Button className="mr-2" type="primary" style={{ width: 200 }}>
                          <i className="fa fa-send mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="video-page__comments-content">
                    {viewData.comments.map((comment, index) =>
                      <div className="video-page__comment-item clearfix">
                        <div className="video-page__comment-avatar">
                          <Avatar src={comment.avatar} size="50" border="false"/>
                        </div>
                        <div className="video-page__comment-content">
                          <strong>{comment.name}
                            <span className="video-page__comment-time text-muted ml-2">{comment.date}</span>
                          </strong>
                          <p className="mb-0">{comment.content}</p>
                          <div className="video-page__comment-like">
                            <a className="mr-2" href="javascript: void(0);">
                              <i className="icmn-heart mr-2"></i>
                              {comment.likesCount > 0 &&
                                <span>{comment.likesCount + ' Likes'}</span>
                              }
                              {comment.likesCount === 0 &&
                                <span>{comment.likesCount + ' Like'}</span>
                              }
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="video-page__sidebar card">
              <div className="video-page__sidebar-head">
                <strong className="video-page__sidebar-title">Up next</strong>
                <div className="video-page__autoplay pull-right">
                  <Checkbox>Autoplay</Checkbox>
                </div>
              </div>
              <ul className="video-page__watch-next">
                {upNext.map((video, index) =>
                  <li className="video-page__next-item clearfix" key={index}>
                    <a href="#" className="video-page__next-item-link">
                      <div className="video-page__item-thumb">
                        <img className="video-page__item-thumb-img" src={video.cover} alt={video.name} />
                      </div>
                      <div className="video-page__item-descr">
                        <span className="video-page__item-name">{video.name}</span>
                        <span className="video-page__item-author">{video.author}</span>
                        <span class="cat__video-page__item-views text-muted">
                          <span class="cat__video-page__item-count">{video.views}</span>
                          views
                        </span>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default YouTubeView
