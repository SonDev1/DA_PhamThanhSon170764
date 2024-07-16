import React, { useEffect, useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import categoryApi from '../../../../api/categoryApi'
import menuApi from "../../../../api/menuApi";

function MenuItemLeft() {
  const [data, setData]= useState([])
  useEffect(() => {
    (async () => {
      try {
        const data = await menuApi.getAll();
        setData(data);
      } catch (error) {
        console.log('Failed to fetch carts list', error);
      }
    })();
  }, [])
  const handleOnClick = (e) => {
    console.log("Clicked item:", e);
  };
  console.log("data :" , data);
// debugger
  const menuItem = data.map((menu) => {
    return {
      key: menu.menuId,
      icon: <AppstoreOutlined />,
      label: menu.name,
      children: menu.categories.map((category) => {
        return {
          key: category.categoryId,
          label: category.name,
          onTitleClick: handleOnClick,
          children: category.types.map((type) => {
            return {
              key: type.typeId,
              label: type.name,
            };
          }),
        };
      }),
    };
  });

  return <Menu mode="inline" style={{ width: '100%' , background:'#eaeaea' }} items={menuItem} onClick={handleOnClick} />;
};
export default MenuItemLeft
