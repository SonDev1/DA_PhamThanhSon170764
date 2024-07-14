// import React, { useEffect, useState } from "react";
// import { AutoComplete, Input } from "antd";
// import axios from "axios";

// const { Search } = Input;

// const SearchComponent = () => {
//   const [options, setOptions] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     if (inputValue) {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('http://localhost:5000/api/products/get-all');
//           console.log("response :",response);
//           const products = response
//           const filteredProducts = response.filter(product =>
//             product.name.toLowerCase().includes(inputValue.toLowerCase())
//           );
//           const options = filteredProducts.map((product) => {
//             return {
//               value: product.name,
//               label: (
//                 <div>
//                   <img src={product.images[0]} alt={product.name} style={{ width: 50, marginRight: 10 }} />
//                   {product.name}
//                 </div>
//               ),
//             };
//           });
//           setOptions(options);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//       };

//       fetchProducts();
//     }
//   }, [inputValue]);

//   const handleSearch = (value) => {
//     setInputValue(value);
//   };

//   const handleSelect = (value, option) => {
//     console.log("Selected product:", value);
//     // Điều hướng đến trang chi tiết sản phẩm hoặc xử lý logic khác
//   };

//   return (
//     <AutoComplete
//       style={{ width: '100%' }}
//       options={options}
//       onSelect={handleSelect}
//       onSearch={handleSearch}
//     >
//       <Search
//         placeholder="Tìm kiếm sản phẩm"
//         enterButton
//       />
//     </AutoComplete>
//   );
// };

// export default SearchComponent;


//          TEST 2
//========================================================================================================================

// import React, { useEffect, useState } from "react";
// import { AutoComplete, Input } from "antd";
// import axios from "axios";

// const { Search } = Input;

// const SearchComponent = () => {
//   const [options, setOptions] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     if (inputValue) {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('http://localhost:5000/api/products/get-all');
//           const products = response.data;
//           console.log("products",products);

//           // Check if products is an array, otherwise handle it accordingly
//           if (Array.isArray(products)) {
//             const filteredProducts = products.filter(product =>
//               product.name.toLowerCase().includes(inputValue.toLowerCase())
//             );

//             const options = filteredProducts.map((product) => ({
//               value: product.name,
//               label: (
//                 <div>
//                   <img src={product.images[0]} alt={product.name} style={{ width: 50, marginRight: 10 ,background:'red' }} />
//                   {product.name}
//                 </div>
//               ),
//             }));

//             setOptions(options);
//           } else {
//             console.error("Products data format is not an array:", products);
//           }
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//       };

//       fetchProducts();
//     } else {
//       setOptions([]);
//     }
//   }, [inputValue]);

//   const handleSearch = (value) => {
//     setInputValue(value);
//   };

//   const handleSelect = (value, option) => {
//     console.log("Selected product:", value);
//     // Điều hướng đến trang chi tiết sản phẩm hoặc xử lý logic khác
//   };

//   return (
//     <AutoComplete
//       style={{ width: '100%' }}
//       options={options}
//       onSelect={handleSelect}
//       onSearch={handleSearch}
//     >
//       <Search
//         placeholder="Tìm kiếm sản phẩm"
//         enterButton
//       />
//     </AutoComplete>
//   );
// };

// export default SearchComponent;


//          TEST 3
//===================================================================================================================

import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Input } from "antd";
import axios from "axios";
import '../Search/style.scss'
import { Box } from "@material-ui/core";

const { Search } = Input;

const SearchComponent = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
    // navigate(`/products/${product._id}`);
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
