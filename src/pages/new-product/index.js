import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import classNames from "classnames";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import { formatCurrency } from "../../common/utils";

export default function checkoutComplete() {
  return (
    <LayoutOne title="New Products">
      <Container>
      <div className="container">
        <div className="content-product">
          <h1>Đăng bài sản phẩm</h1>
  <form>
    <div className="form-group">
      <label>Tên sản phẩm:</label>
      <input type="text" placeholder="Nhập tiêu đề" />
    </div>
    <div className="form-group">
      <label>Loại sản phẩm:</label>
      <input type="text" placeholder="Nhập loại
      " />
    </div>
    <div className="form-group">
      <label>Hình ảnh sản phẩm:</label>
      <input type="file" />
    </div>
    <div className="form-group">
      <label>Giá sản phẩm:</label>
      <input type="number" placeholder="Giá sản phẩm" />
    </div>
    <div className="form-group">
      <label>Mô tả sản phẩm:</label>
      <textarea rows={5} placeholder="Mô tả sản phẩm" defaultValue={""} />
    </div>
    <Button className="dangbai">
                <Link href="/complate">
                 Đăng bài
                </Link>
              </Button>
  </form></div>
  
</div>
      </Container>
    </LayoutOne>
  );
}
