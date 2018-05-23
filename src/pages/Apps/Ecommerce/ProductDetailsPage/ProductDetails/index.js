import React from 'react'
import { Carousel, Breadcrumb, Rate, Select, Tooltip, Button, Icon, Tabs } from 'antd'
import './style.scss'
import data from './data.json'
const TabPane = Tabs.TabPane
const Option = Select.Option

class ProductDetails extends React.Component {
  state = {
    imgActiveStatus: [],
    images: data.images,
    sku: data.sku,
    name: data.name,
    rate: data.rate,
    price: data.price,
    oldPrice: data.oldPrice,
    shortDescr: data.shortDescr,
    description: data.description,
    properties: data.properties,
  }

  generateImgStatus = () => {
    let { imgActiveStatus, images } = this.state
    images.forEach((img, index) => {
      imgActiveStatus[index] = 'not-active'
      if (index === 0) {
        imgActiveStatus[0] = 'active'
      }
    })
  }

  setActiveImg = imgNumber => {
    let { imgActiveStatus } = this.state
    imgActiveStatus.forEach((imgStatus, index) => {
      imgActiveStatus[index] = 'not-active'
      if (imgNumber === index) {
        imgActiveStatus[index] = 'active'
      }
    })
    this.setState({
      imgActiveStatus: imgActiveStatus,
    })
  }

  componentWillMount() {
    this.generateImgStatus()
  }

  render() {
    let {
      imgActiveStatus,
      images,
      sku,
      name,
      rate,
      price,
      oldPrice,
      shortDescr,
      description,
      properties,
    } = this.state

    return (
      <div>
        <section className="card">
          <div className="card-header">
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>Product Details</strong>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="productDetails__item">
                  <div className="productDetails__item__img">
                    <div className="productDetails__item__status">
                      <span className="productDetails__item__status__title">New</span>
                    </div>
                    <div className="productDetails__item__like productDetails__item__like--selected">
                      <i className="icmn-heart" />
                    </div>
                    <Carousel
                      ref={node => (this.slider = node)}
                      autoplay={false}
                      dots={false}
                      effect="fade"
                    >
                      {images.map((image, index) =>
                        <div key={index}>
                          <img className="productDetails__item__img-item" src={image} alt="" />
                        </div>,
                      )}
                    </Carousel>
                  </div>
                </div>
                <div className="productDetails__photos clearfix">
                  {images.map((image, index) =>
                    <div
                      key={index}
                      onClick={e =>
                        this.slider.slick.innerSlider.slickGoTo(index) & this.setActiveImg(index)}
                      className={
                        imgActiveStatus[index] === 'active'
                          ? 'productDetails__photos-item productDetails__photos-item--active'
                          : 'productDetails__photos-item'
                      }
                    >
                      <img src={image} alt="" />
                    </div>,
                  )}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="productDetails__breadcrumbs">
                  <Breadcrumb separator="">
                    <Breadcrumb.Item>
                      <span className="productDetails__breadcrumb-item">
                        <a href="javascript: void(0);">Catalog</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className="productDetails__breadcrumb-item">
                        <a href="javascript: void(0);">Chairs</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className="productDetails__breadcrumb-item">
                        <a href="javascript: void(0);">With background</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className="productDetails__breadcrumb-item">
                        <a href="javascript: void(0);">White</a>
                      </span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="productDetails__sku">
                  {'SKU: #' + sku}
                  <br />
                  <div className="productDetails__rating">
                    <Rate value={rate} disabled={true} allowHalf={true} />
                  </div>
                </div>
                <h4 className="productDetails__main-title">
                  <strong>
                    {name}
                  </strong>
                </h4>
                <div className="productDetails__price">
                  {'$' + price}
                  {oldPrice &&
                    <div className="productDetails__price-before">
                      {'$' + oldPrice}
                    </div>}
                </div>
                <hr />
                <div className="productDetails__descr mb-1">
                  <p>
                    {shortDescr}
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="productDetails__option_title">Color</div>
                    <div className="productDetails__option">
                      <Select defaultValue="Red" size="small" style={{ width: 120 }}>
                        <Option value="red">Red</Option>
                        <Option value="black">Black</Option>
                        <Option value="cyan">Cyan</Option>
                        <Option value="blue">Blue</Option>
                      </Select>
                    </div>
                    <div className="productDetails__option_title">Available Size</div>
                    <div className="productDetails__option">
                      <div className="productDetails__item__descr__sizes">
                        <Tooltip placement="top" title="Size S">
                          <span>S</span>
                        </Tooltip>
                        <Tooltip placement="top" title="Size M">
                          <span title="Size M">M</span>
                        </Tooltip>
                        <Tooltip placement="top" title="Size XL">
                          <span>XL</span>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="productDetails__controls">
                  <Button type="primary" size="large">
                    <Icon type="shopping-cart" />Buy now
                  </Button>
                  <a href="javascript: void(0);" className="btn btn-link">
                    <i className="icmn-heart mr-1" />
                    Add to Wishlist
                  </a>
                  <a href="javascript: void(0);" className="btn btn-link">
                    <i className="icmn-stats-bars mr-1" />
                    Add to Compare
                  </a>
                </div>
                <div className="productDetails__info">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Information" key="1">
                      {properties.map((property, index) =>
                        <div className="productDetails__property mb-1" key={index}>
                          <strong className="mr-1">
                            {property.name + ': '}
                          </strong>
                          {property.value}
                        </div>,
                      )}
                    </TabPane>
                    <TabPane tab="Description" key="2">
                      <p>
                        {description}
                      </p>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ProductDetails
