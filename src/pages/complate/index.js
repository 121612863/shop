
import Link from "next/link";

import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import { formatCurrency } from "../../common/utils";

export default function checkoutComplete() {
  return (
    <LayoutOne title="New Products">
      <Container>
     <div className="complate-item">
        <div className="">
            Bạn đã đăng bài thành công
        </div>
        <div className="">
            Quản trị viên sẽ duyệt bài của bạn trong thời gian sớm nhất
        </div>
        
        <Link href="/">
           Quay về trang chủ
        </Link>
     </div>
      </Container>
    </LayoutOne>
  );
}
