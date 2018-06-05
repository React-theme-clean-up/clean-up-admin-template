import React from 'react'
import { Input, TreeSelect, Select, Button, Upload, Icon, message } from 'antd'

const TreeNode = TreeSelect.TreeNode
const Option = Select.Option
const Dragger = Upload.Dragger
const { TextArea } = Input

const dragprop = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

class ProductEdit extends React.Component {
  state = {
    categoryValue: undefined,
  }

  onChangeCategory = value => {
    this.setState({
      categoryValue: value,
    })
  }

  render() {
    let { categoryValue } = this.state
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Product Edit</strong>
          </div>
        </div>
        <div className="card-body">
          <h4 className="text-black mb-3">
            <strong>Main Parameters</strong>
          </h4>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="product-edit-title">Title</label>
                    <Input id="product-edit-title" placeholder="Product title" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="product-edit-sku">SKU</label>
                    <Input id="product-edit-sku" placeholder="Product SKU" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="product-edit-category">Category</label>
                    <TreeSelect
                      id="product-edit-category"
                      showSearch
                      style={{ width: '100%', display: 'block' }}
                      value={categoryValue}
                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                      placeholder="Please select category"
                      allowClear
                      multiple
                      treeDefaultExpandAll
                      onChange={this.onChangeCategory}
                    >
                      <TreeNode value="furniture" title="Furniture" key="0">
                        <TreeNode value="tables" title="Tables" key="0-0" />
                        <TreeNode value="chairs" title="Chairs" key="0-1">
                          <TreeNode value="roundedchairs" title="Rounded Chairs" key="0-1-0" />
                          <TreeNode value="squaredchairs" title="Squared Chairs" key="0-1-1" />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode value="electronics" title="Electronics" key="1">
                        <TreeNode value="tv" title="TV" key="1-0" />
                        <TreeNode value="chairs" title="Consoles" key="1-1">
                          <TreeNode value="playstation" title="Playstation" key="1-1-0" />
                          <TreeNode value="xbox" title="Xbox" key="1-1-1" />
                        </TreeNode>
                      </TreeNode>
                    </TreeSelect>
                  </div>
                  <div className="form-group">
                    <label htmlFor="product-edit-shordescr">Short description</label>
                    <TextArea rows={3} id="product-edit-shordescr" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="product-edit-fulldescr">Full description</label>
                    <TextArea rows={3} id="product-edit-fulldescr" />
                  </div>
                  <h4 className="text-black mt-2 mb-3">
                    <strong>Pricing</strong>
                  </h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="product-edit-totalprice">Total Price</label>
                        <Input id="product-edit-totalprice" placeholder="Total Price" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="product-edit-discountprice">Discount Price</label>
                        <Input id="product-edit-discountprice" placeholder="Discount Price" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-black mt-2 mb-3">
                    <strong>Attributes</strong>
                  </h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="product-edit-colors">Colors</label>
                        <Select
                          id="product-edit-colors"
                          showSearch
                          style={{ width: '100%' }}
                          placeholder="Select a color"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="blue">Blue</Option>
                          <Option value="red">Red</Option>
                          <Option value="green">Green</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="product-edit-size">Size</label>
                        <Select
                          id="product-edit-size"
                          showSearch
                          style={{ width: '100%' }}
                          placeholder="Select a size"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="s">Small</Option>
                          <Option value="m">Middle</Option>
                          <Option value="xl">Extra large</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-actions">
                        <Button type="primary" className="mr-2">
                          Save Product
                        </Button>
                        <Button type="default">Cancel</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Dragger {...dragprop} className="height-300 d-block mb-3">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data
                  or other band files
                </p>
              </Dragger>
              <div>
                <Upload>
                  <Button>
                    <Icon type="upload" /> Select File
                  </Button>
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductEdit
