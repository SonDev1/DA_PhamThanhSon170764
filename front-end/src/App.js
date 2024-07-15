// import React, { Fragment } from 'react'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import { routes } from './routes'
// import DefaultComponent from './components/DefaultComponent'

// export default function App() {

//   return (
//       <Router>
//         <Routes>
//           {routes.map((route) => {
//             const Page = route.page
//             const Layout = route.isShowHeader ? DefaultComponent : Fragment 
//             return (
//               <Route
//                 key={route.path}
//                 path={route.path}
//                 element={
//                   <>
//                     <Layout>
//                       <Page/>
//                     </Layout>
//                   </>
//                   }
//               />
//             )
//           })}
//         </Routes>
//       </Router>
//   )
// }


import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent';

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefaultComponent : Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.children && route.children.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={<child.page />}
                />
              ))}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}
