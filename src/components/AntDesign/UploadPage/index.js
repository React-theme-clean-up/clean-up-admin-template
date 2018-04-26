import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderUploadPageAvatar } from './avatar.js'
import { default as renderUploadPageBasic } from './basic.js'
import { default as renderUploadPageDefaultFileList } from './defaultFileList.js'
import { default as renderUploadPageDrag } from './drag.js'
import { default as renderUploadPageFileList } from './fileList.js'
import { default as renderUploadPagePicturecard } from './picture-card.js'
import { default as renderUploadPagePicturestyle } from './picture-style.js'
import { default as renderUploadPageUploadmanually } from './upload-manually.js'

class UploadPageItems extends React.Component {
  componentDidMount() {
    renderUploadPageAvatar(ReactDOM, document.getElementById('UploadPageAvatar'))
    renderUploadPageBasic(ReactDOM, document.getElementById('UploadPageBasic'))
    renderUploadPageDefaultFileList(ReactDOM, document.getElementById('UploadPageDefaultFileList'))
    renderUploadPageDrag(ReactDOM, document.getElementById('UploadPageDrag'))
    renderUploadPageFileList(ReactDOM, document.getElementById('UploadPageFileList'))
    renderUploadPagePicturecard(ReactDOM, document.getElementById('UploadPagePicturecard'))
    renderUploadPagePicturestyle(ReactDOM, document.getElementById('UploadPagePicturestyle'))
    renderUploadPageUploadmanually(ReactDOM, document.getElementById('UploadPageUploadmanually'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Upload</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-upload-demo-avatar">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Avatar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageAvatar" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-defaultFileList">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Default Files</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageDefaultFileList" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-fileList">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Complete control over file list</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageFileList" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-picture-style">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Pictures with list style</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPagePicturestyle" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-upload-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Upload by clicking</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-drag">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Drag and Drop</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageDrag" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-picture-card">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Pictures Wall</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPagePicturecard" />
                    </div>
                  </div>
                  <div className="card" id="components-upload-demo-upload-manually">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Upload manually</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="UploadPageUploadmanually" />
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

export default UploadPageItems
