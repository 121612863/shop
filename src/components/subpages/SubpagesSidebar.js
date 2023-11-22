import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";

import ClientOnlyPortal from "../../common/ClientOnlyPortal";

export default function SubpagesSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ClientOnlyPortal selector="#subpages-sidebar">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        forceRender={true}
        className="subpages-sidebar-main"
        width={445}
      >
        <Button onClick={showDrawer} className="subpages-sidebar-opener">
          <i className="fas fa-cog fa-spin" />
        </Button>
        <h2>
          <span>4</span>
          Demo
        </h2>
        <p>You can easily combine various features from different demos.</p>
        <div className="subpages-homepages-group">
          <Link href={ "/"}>
           
              <img
                src={
                   "/assets/images/subpages/home1.png"
                }
                alt="Homepage 01"
              />
              <span>Homepage 01</span>
            
          </Link>
          <Link href={ "/homepage2"}>
           
              <img
                src={
                   "/assets/images/subpages/home2.png"
                }
                alt="Homepage 02"
              />
              <span>Homepage 02</span>
            
          </Link>
          <Link href={ "/homepage3"}>
           
              <img
                src={
                   "/assets/images/subpages/home3.png"
                }
                alt="Homepage 03"
              />
              <span>Homepage 03</span>
            
          </Link>
          <Link href={ "/homepage4"}>
           
              <img
                src={
                   "/assets/images/subpages/home4.png"
                }
                alt="Homepage 04"
              />
              <span>Homepage 04</span>
            
          </Link>
        </div>
      </Drawer>
    </ClientOnlyPortal>
  );
}
