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
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="/crud" element={<Crud />} /> */}
          <Route path="/parent" element={<ParentComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
