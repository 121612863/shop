import { Tabs } from "antd";

import Container from "../../other/Container";
import ProductDetailReviewItem from "../elements/ProductDetailReviewItem";

const { TabPane } = Tabs;

export default function ProductDetailTabOne({data}) {
  return (
    <div className="product-detail-tab-one">
      <Container>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Description" key="1">
            <div className="product-detail-tab-item -description">
              <p className="tab-des--bold">
                {data.name}
              </p>
              <h5 className="tab-title">Products Infomation</h5>
              <p className="tab-des">
                {data.description}
              </p>
              <h5 className="tab-title">Material used</h5>
              <p className="tab-des">
                
              </p>
            </div>
          </TabPane>
          <TabPane tab="Customer Reviews(5)" key="2">
            <div className="product-detail-tab-item -review">
              <ProductDetailReviewItem />
              <ProductDetailReviewItem />
            </div>
          </TabPane>
          <TabPane tab="Additional information" key="3">
            <div className="product-detail-tab-item -info">
              <table>
                <tr>
                  <td>Outer Shell</td>
                  <td>100% polyester</td>
                </tr>
                <tr>
                  <td>Lining</td>
                  <td>100% polyurethane</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>S, M, L, XL</td>
                </tr>
                <tr>
                  <td>Colors</td>
                  <td>Grey, Red, Blue, Black</td>
                </tr>
                <tr>
                  <td>Care</td>
                  <td>
                    <img
                      src={
                        
                        "/assets/images/shop/shop-detail/care-icons.png"
                      }
                      alt="Care icon"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </TabPane>
        </Tabs>
      </Container>
    </div>
  );
}
