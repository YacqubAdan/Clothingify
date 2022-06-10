import React, { useState } from "react";
import Logo from "../assets/Logo.JPG";
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Nav = () => {
  return (
    <div className="h-14 ">
      <div className="py-3 px-5 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <span className="cursor-pointer text-sm">EN</span>
          <div className="border  border-slate ml-6 p-1">
            <input />
            <Search
              style={{
                color: "gray",
                fontSize: 16,
              }}
            />
          </div>
        </div>
        <div className=" text-center flex-1">
          <div className="font-bold text-6xl">CLOTHINGIFY</div>
        </div>
        <div className="flex items-center flex-1 justify-end">
          <div className="ml-6 cursor-pointer">REGISTER</div>
          <div className="ml-6 cursor-pointer">SIGN IN</div>
          <div className="ml-6 cursor-pointer">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
