import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const data = [
  {
    menuId: "2462",
    name: "Nam",
    categories: [
      {
        categoryId: "category 23323",
        name: "Dong ho nam",
        types: [
          {
            typeId: "type 8822",
            name: "Weimar",
          },
          {
            typeId: "type 9781",
            name: "Weimar",
          },
        ],
      },
      {
        categoryId: "category 23393",
        name: "Trang suc nam",
        types: [
          {
            typeId: "type 8824",
            name: "Weimar",
          },
          {
            typeId: "type 9785",
            name: "Weimar",
          },
        ],
      },
    ],
  },
  {
    menuId: "2464",
    name: "Nu",
    categories: [
      {
        categoryId: "category 23353",
        name: "Dong ho nu",
        types: [
          {
            typeId: "type 845622",
            name: "Weimar",
          },
        ],
      },
      {
        categoryId: "category 2334593",
        name: "Trang suc nu",
        types: [
          {
            typeId: "type 88724",
            name: "Weimar",
          },
        ],
      },
    ],
  },
];

function MenuItemLeft() {
    console.log("test");
  const handleOnClick = (e) => {
    console.log("Clicked item:", e);
  };

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
