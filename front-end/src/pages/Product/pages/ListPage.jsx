// // import React, { useEffect, useMemo, useState } from 'react'
// // import PropTypes from 'prop-types'
// // import ProductFilter from '../components/ProductFilter'
// // import ProductList from '../components/ProductList'
// // import './style.scss'
// // import FilterViewer from '../components/FilterViewer'
// // import productsApi from '../../../api/productApi'
// // import { useLocation, useNavigate } from 'react-router-dom'
// // import queryString from 'query-string';


// // function ListPage(props) {

// //   const [productList, setProductList] = useState([]);
// //   const navigate = useNavigate();
// //   const location = useLocation();


// //   const queryParams = useMemo(() => {
// //     const params = queryString.parse(location.search);

// //     return {
// //         ...params,
// //         _page: Number.parseInt(params._page) || 1,
// //         _limit: Number.parseInt(params._limit) || 9,
// //         _sort: params._sort || 'asc',
// //     };
// // }, [location.search]);

// // console.log("queryParams",queryParams);
// //   useEffect(() => {
// //     const fetchData = async () => {
// //         try {
// //             const  data  = await productsApi.getAll(queryParams);
// //             setProductList(data);
// //         } catch (error) {
// //             console.log('Failed to get all products:', error);
// //         }
// //     };

// //     fetchData();
// // }, [queryParams]);

// // const handleFiltersChange = (newFilters) => {
// //   const filters = {
// //       ...queryParams,
// //       ...newFilters,
// //   };

// //   navigate({
// //       pathname: history.location.pathname,
// //       search: queryString.stringify(filters),
// //   });
// // };

// //   return (
// //       <div className='wrapper__product'>
// //         <div className='wrapper__product__filter'>
// //           <ProductFilter filters={queryParams}
// //                         onChange={handleFiltersChange}
// //           />
// //         </div>
// //         <div className='wrapper__product__productList'>
// //           <div className='wrapper__product__productList__filterViewer '>
// //             <FilterViewer/>
// //           </div>
// //           <div className='wrapper__product__productList__products '>
// //             <ProductList data={productList}/>
// //           </div>
// //         </div>
// //       </div>
// //   )
// // }

// // ListPage.propTypes = {}

// // export default ListPage


// import React, { useEffect, useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
// import ProductFilter from '../components/ProductFilter';
// import ProductList from '../components/ProductList';
// import './style.scss';
// import FilterViewer from '../components/FilterViewer';
// import productsApi from '../../../api/productApi';
// import { useLocation, useNavigate } from 'react-router-dom';
// import queryString from 'query-string';
// import ProductSort from '../components/ProductSort';
// import FilterByType from '../components/Filters/FilterByType';
// import { Pagination } from 'antd';

// function ListPage(props) {
//   const [productList, setProductList] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const queryParams = useMemo(() => {
//     const params = queryString.parse(location.search);

//     return {
//       ...params,
//       _page: Number.parseInt(params._page) || 1,
//       _limit: Number.parseInt(params._limit) || 9,
//       _sort: params._sort || 'asc',
//       // _type: params._type || '',

//     };
//   }, [location.search]);

//   // console.log("queryParams :", queryParams);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await productsApi.getAll(queryParams);
//         console.log("data",data);
//         setProductList(data.rows);
//       } catch (error) {
//         console.log('Failed to get all products:', error);
//       }
//     };
//     fetchData();
//   }, [queryParams]);
//   const handleSortChange = (newSortValue) => {
//     const filters = {
//         ...queryParams,
//         _sort: newSortValue,
//     };

//     navigate({
//         pathname: location.pathname,
//         search: queryString.stringify(filters),
//     });
// };

//   const handleFiltersChange = (newFilters) => {
//     const filters = {
//       ...queryParams,
//       ...newFilters,
//     };

//     navigate({
//       pathname: location.pathname,
//       search: queryString.stringify(filters),
//     });
//   };
//   const handleTypeChange = (newFilters) => {
//     const filters = {
//       ...queryParams,
//       ...newFilters,
//     };

//     navigate({
//       pathname: location.pathname,
//       search: queryString.stringify(filters),
//     });
//   };


//   return (
//     <div className='wrapper__product'>
//       <div className='wrapper__product__filter'>
//         <ProductFilter filters={queryParams} onChange={handleFiltersChange} />
//       </div>
//       <div className='wrapper__product__productList'>
//         <div className='wrapper__product__productList__filterViewer' style={{marginBottom: "40px"}}>
//           <FilterViewer />
//           <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
//           {/* <FilterByType type = {queryParams.gender} onChange={handleTypeChange}/> */}
//         </div>
//         <div className='wrapper__product__productList__products'>
//           <ProductList data={productList} />
//           <Pagination align="center" defaultCurrent={Number.parseInt(queryParams._page)} total={data.totalProducts} />
//         </div>
//       </div>
//     </div>
//   );
// }

// ListPage.propTypes = {}

// export default ListPage;

import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import './style.scss';
import FilterViewer from '../components/FilterViewer';
import productsApi from '../../../api/productApi';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import ProductSort from '../components/ProductSort';
import { Pagination } from 'antd';

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0); // Added state for total products
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'asc',
    };
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsApi.getAll(queryParams);
        setProductList(data.rows);
        console.log("data :",data);
        setTotalProducts(data.totalProducts); // Setting the total products count
      } catch (error) {
        console.log('Failed to get all products:', error);
      }
    };
    fetchData();
  }, [queryParams]);

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <div className='wrapper__product'>
      <div className='wrapper__product__filter'>
        <ProductFilter filters={queryParams} onChange={handleFiltersChange} />
      </div>
      <div className='wrapper__product__productList'>
        <div className='wrapper__product__productList__filterViewer' style={{ marginBottom: "40px" }}>
          <FilterViewer />
          <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
        </div>
        <div className='wrapper__product__productList__products'>
          <ProductList data={productList} />
          <Pagination
            align="center"
            current={Number.parseInt(queryParams._page)}
            total={totalProducts}
            pageSize={queryParams._limit}
            onChange={(page) => handleFiltersChange({ _page: page })}
          />
        </div>
      </div>
    </div>
  );
}

ListPage.propTypes = {
  // Define prop types if any
};

export default ListPage;
