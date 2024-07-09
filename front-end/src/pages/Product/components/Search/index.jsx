// import React, { useEffect, useState } from "react";
// import { AutoComplete } from "antd";
// import axios from "axios";

// const optionsValue = [
//   { label: "Burns Bay Road", value: "1" },
//   { label: "Downing Street", value: "2" },
//   { label: "Wall Street", value: "3" },
// ];

// const TestPage = () => {
//   const [options, setOptions] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     if (inputValue) {
//       axios
//         .get(
//           `https://rsapi.goong.io/place/autocomplete?input=${inputValue}&api_key=TdpeykZUUxLdwjL0YR7ygbi0G8Jmk3TjBn8nkCuG`
//         )
//         .then((response) => {
//           const locations = response.data.predictions;
//           console.log("locations :", locations);
//           const options = locations.map((location) => {
//             return {
//               value: location.description,
//             };
//           });
//           setOptions(options);
//         })
//         .catch((error) => {
//           console.log("error :", error);
//         });
//     }
//   }, [inputValue]);

//   const handleOnChange = (value) => {
//     setInputValue(value);
//   };

//   const handleOnSelect = (value, option) => {
//     console.log("option :", option);
//     console.log("value :", value);
//   };

//   return (
//     <AutoComplete
//       style={{ width: 200 , marginTop:'120px'}}
//       options={options}
//       placeholder="input your place"
//       filterOption={(inputValue, option) =>
//         option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
//       }
//       onChange={handleOnChange}
//       onSelect={handleOnSelect}
//     />
//   );
// };

// export default TestPage;


import React, { useEffect, useState } from "react";
import { AutoComplete, Input } from "antd";
import axios from "axios";

const { Search } = Input;

const SearchComponent = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/products?_sort=asc&_page=4');
          console.log("response :",response);
          const products = response.data.rows;
          const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          const options = filteredProducts.map((product) => {
            return {
              value: product.name,
              label: (
                <div>
                  <img src={product.images[0]} alt={product.name} style={{ width: 50, marginRight: 10 }} />
                  {product.name}
                </div>
              ),
            };
          });
          setOptions(options);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [inputValue]);

  const handleSearch = (value) => {
    setInputValue(value);
  };

  const handleSelect = (value, option) => {
    console.log("Selected product:", value);
    // Điều hướng đến trang chi tiết sản phẩm hoặc xử lý logic khác
  };

  return (
    <AutoComplete
      style={{ width: '100%' }}
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
    >
      <Search
        placeholder="Tìm kiếm sản phẩm"
        enterButton
      />
    </AutoComplete>
  );
};

export default SearchComponent;
