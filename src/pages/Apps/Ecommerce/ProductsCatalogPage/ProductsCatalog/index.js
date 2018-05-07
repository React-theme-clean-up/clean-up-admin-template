import React from 'react'
import InfoCard from 'components/Clean/InfoCard'
import ProductCard from 'components/Clean/ProductCard'

class ProductsCatalog extends React.Component {
  static defaultProps = {
    pathName: 'Products Catalog',
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-lg-2">
              <InfoCard form="bordered" type="primary" icon={false} />
            </div>
            <div className="col-lg-2">
              <InfoCard form="bordered" type="default" icon={false} />
            </div>
            <div className="col-lg-2">
              <InfoCard form="bordered" type="danger" icon={false} />
            </div>
            <div className="col-lg-2">
              <InfoCard form="bordered" type="default" icon={false} />
            </div>
            <div className="col-lg-2">
              <InfoCard form="bordered" type="warning" icon={false} />
            </div>
            <div className="col-lg-2">
              <InfoCard form="bordered" type="success" icon={false} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="productsCatalog">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsCatalog
