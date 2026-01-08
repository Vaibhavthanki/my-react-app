import Axios from "./Axios";
import FormikBasicForm from "./FormikBasicForm";
import FormikHook from "./FormikHook";
import FormikWithValidation from "./FormikWithValidation";
import Product from "./Product";
import ProductList from "./ProductList";
import { Registration } from "./Registration";
import UserRegistration from "./userRegistration";
import PaginationWithMui from "./PaginationWithMui";
import DataGridWithMui from "./DataGridWithMui";
import Crud from "./Crud";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Navigation } from "./Navigation";
import { ParentComponent } from "./ParentComponent";
import { RenderCycle } from "./renderCycle";
import { Reducer } from "./Reducer";
import { Language } from "./Language";
import ReactUseCallback from "./ReactUseCallback";
import { ReactUseRef } from "./ReactUseRef";
import { ProductData } from "./ProductData";
import { ProductDesc } from "./ProductDesc";
import { UserList } from "./UserList";
import { UserDetails } from "./userDetails";
import { ErrorHandeling } from "./ErrorHandeling";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUi from "./FallbackUi";
import { ErrorBoundaryWrapper } from "./ErrorBoundaryWrapper";
import ReduxCounter from "./reduxCounter";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AxiosWithRedux } from "./AxiosWithRedux";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    // <>
    //   <h1>Hello, React!</h1>
    //   <h2>Welcome to my React App</h2>
    // </>
    // <ProductList />
    // <Counter />
    // <Product />
    // <Registration />
    // <UserRegistration />
    // <FormikBasicForm />
    // <FormikWithValidation />
    // <FormikHook />
    // <Axios />
    // <PaginationWithMui />
    // <DataGridWithMui />
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundaryWrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/crud" element={<Crud />} />
              <Route path="/parent" element={<ReactUseCallback />} />
              <Route path="/rendercycle" element={<RenderCycle />} />
              <Route path="/reducer" element={<Reducer />} />
              <Route path="/language" element={<Language />} />
              <Route path="/ref" element={<ReactUseRef />} />
              <Route path="/axios" element={<Axios />} />
              <Route path="/productData" element={<ProductData />} />
              <Route path="/productDesc/:id" element={<ProductDesc />} />
              <Route path="/userList" element={<UserList />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/errorHandeling" element={<ErrorHandeling />} />
              <Route path="/redux" element={<ReduxCounter />} />
              <Route path="/axiosWithRedux" element={<AxiosWithRedux />} />
            </Routes>
          </ErrorBoundaryWrapper>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
