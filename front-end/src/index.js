// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { store } from './redux/store';
// import { Provider, useSelector } from'react-redux';
// import { SnackbarProvider } from 'notistack';
// import { IntlProvider } from 'react-intl';


// const messages = locale === 'en-US'
// // const { locale } = useSelector(state => state.user);
// const  locale  = 'en-US'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//         <Provider store={store}>
//           <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top',horizontal: 'right'}}>
//           <IntlProvider locale={locale} messages={messages}>
//             <App />
//             </IntlProvider>,
//           </SnackbarProvider>
//         </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { IntlProvider } from 'react-intl';
import enUS from './locales/en-US'; // Import các tin nhắn
import zhCN from './locales/zh-CN'; // Import các tin nhắn

// Giả sử bạn lấy locale từ Redux store hoặc đặt nó một cách cố định
// const { locale } = useSelector(state => state.user); // Nếu sử dụng hook từ redux
const locale = 'en-US'; // Hoặc 'zh-CN', hoặc lấy từ Redux store

// Chọn các tin nhắn dựa trên locale
const messages = locale === 'en-US' ? enUS : zhCN;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <IntlProvider locale={locale} messages={messages}>
          <App />
        </IntlProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

// Nếu bạn muốn bắt đầu đo hiệu suất trong ứng dụng của mình, hãy chuyển một hàm
// để ghi lại kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một điểm cuối phân tích. Tìm hiểu thêm tại: https://bit.ly/CRA-vitals
reportWebVitals();
