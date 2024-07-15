//          TEST 3
//===================================================================================================================

import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Input } from "antd";
import axios from "axios";
import '../Search/style.scss'
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const SearchComponent = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate  = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/get-all');
        const products = response.data;
        setOptions([]);
  
        if (Array.isArray(products)) {
          let filteredProducts = [];
          if (inputValue.trim() !== "") {
            filteredProducts = products.filter(product =>
              product.name.toLowerCase().startsWith(inputValue.toLowerCase())
            );
          }
  
          const options = filteredProducts.map((product) => ({
            value: product.name,
            key: product._id,
            label: (
              <div>
                <img src={product.images[0]} alt={product.name} style={{ width: 50, marginRight: 10 }} />
                {product.name}
              </div>
            ),
          }));
  
          setOptions(options);
          console.log("setOptions",setOptions);
        } else {
          console.error("Products data format is not an array:", products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    if (inputValue.trim() === "") {
      setOptions([]);
    } else {
      fetchProducts();
    }
  }, [inputValue]);
  

  const handleSearch = (value) => {
    setInputValue(value);
  };

  const handleSelect = (value, option) => {
    console.log("Selected product:", value);
    console.log(" option :", option);
    navigate(`/products/${option.key}`);
  };

  return (
    <Box className="wrapper__search">
      <AutoComplete
      style={{  justifyContent: 'center' , width:"802px", height:"42px",borderRadius: "0px"}}
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
      className="autocomplete-custom"
    >
      <Search
        placeholder="Tìm kiếm sản phẩm"
        enterButton
        className="search-input-custom"
        style={{borderRadius: "0px",}}
      />
    </AutoComplete>
    <Button 
      style={{borderRadius: "0px", background:'black',color:'white', marginTop:20,height:'47px',width:'150px'}}
    >Tim kiem</Button>
    </Box>
  );
};

export default SearchComponent;

