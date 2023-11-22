import React from "react";
import { Menu, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import {
  setGlobalLanguage,
  setGlobalCurrency,
} from "../../../redux/actions/globalActions";

function MenuSidebar() {
  const { SubMenu } = Menu;
  const { Option } = Select;
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.globalReducer);
  const onSelectLanguage = (value) => {
    dispatch(setGlobalLanguage(value));
  };
  const onSelectCurrency = (value) => {
    dispatch(setGlobalCurrency(value));
  };
  return (
    <div className="menu-sidebar">
      <Menu mode="inline">
        <SubMenu key="sub1" title="Homepages">
          <Menu.Item key="1">
            <Link href={ "/"}>
             Homepage 1
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href={ "/homepage2"}>
             Homepage 2
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href={ "/homepage3"}>
             Homepage 3
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href={ "/homepage4"}>
             Homepage 4
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Shop">
          <SubMenu key="sub2-1" title="Shop detail">
            <Menu.Item key="5">
              <Link
                href={
                  
                  "/shop/product-detail/product-detail-1"
                }
              >
               Product Detail 1
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link
                href={
                  
                  "/shop/product-detail/product-detail-2"
                }
              >
               Product Detail 2
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link
                href={
                  
                  "/shop/product-detail/product-detail-3"
                }
              >
               Product Detail 3
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="8">
            <Link href={ "/shop/checkout"}>
             Checkout
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link href={ "/shop/checkout-complete"}>
             Checkout Complete
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="10">
          <Link href={ "#"}>
           Help
          </Link>
        </Menu.Item>
        <Menu.Item key="11">
          <Link href={ "#"}>
           Offer
          </Link>
        </Menu.Item>
      </Menu>
      <div className="menu-sidebar-selects">
        <Select
          defaultValue={globalState.language}
          style={{ width: 120 }}
          bordered={false}
          onChange={onSelectLanguage}
        >
          <Option value="en">English</Option>
          <Option value="jp">Japanese</Option>
          <Option value="vi">Vietnamese</Option>
        </Select>
        <Select
          defaultValue={globalState.currency.currency}
          style={{ width: 150 }}
          bordered={false}
          onChange={onSelectCurrency}
        >
          <Option value="USD">USD - Dollar</Option>
          <Option value="JPY">JPY - Yen</Option>
          <Option value="VND">VND - Vietnam dong</Option>
        </Select>
      </div>
    </div>
  );
}

export default React.memo(MenuSidebar);
