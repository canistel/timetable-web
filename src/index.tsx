// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import store from './redux/store';
import App from "./App";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

// query client
const queryClient = new QueryClient();

// root element
const root = document.getElementById("root");

// render
ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
  root
);
