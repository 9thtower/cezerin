import React from 'react'
import Helmet from 'react-helmet'
import text from '../lib/text'
import OrderSummary from '../components/orderSummary'

const CheckoutContainer = (props) => {
  const {pageData} = props.state;

  return (
    <div>
      <Helmet title={pageData.meta_title} meta={[
        {
          "name": "description",
          "content": pageData.meta_description
        }, {
          "property": "og:type",
          "content": "article"
        }
      ]} link={[{
          "rel": "canonical",
          "href": pageData.url
        }
      ]}/>
      <section className="section" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <OrderSummary {...props} />
            </div>
            <div className="column is-8">
              <div className="checkout-box">
                <h1 className="title is-4">{text.checkoutPageTitle}</h1>
                {props.checkoutForm}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutContainer