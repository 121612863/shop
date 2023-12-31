import { useSelector, useDispatch } from "react-redux";
import { Empty, Button } from "antd";
import Link from "next/link";
import React from "react";

import CartSidebarItem from "./CartSidebarItem";
import { calculateTotalPrice } from "../../common/shopUtils";
import { formatCurrency } from "../../common/utils";

function CartSidebar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const globalState = useSelector((state) => state.globalReducer);
  const { currency, locales } = globalState.currency;
  return cartState.length === 0 ? (
    <Empty description="No products in cart" />
  ) : (
    <div className="cart-sidebar">
      <div className="cart-sidebar-products">
        {cartState.map((item, index) => (
          <CartSidebarItem key={index} data={item} />
        ))}
      </div>
      <div className="cart-sidebar-total">
        <h5>
          Total:{" "}
          <span>
            {formatCurrency(calculateTotalPrice(cartState), locales, currency)}
          </span>
        </h5>
        <div className="cart-sidebar-total__buttons">
          <Button type="primary" shape="round">
            <Link href={ "/shop/checkout"}>
              Checkout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CartSidebar);
