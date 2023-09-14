import React, {Suspense} from 'react';
import './App.css';
const ProductPage = React.lazy(() => import("productpage/ProductPage"));
const ProductDetail = React.lazy(() => import("productdetail/ProductDetail"));
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const history = useHistory();
  const location = useLocation();

  const productDetailCLicked = (id) => {
    history.push(`details/${id}`);
  }
  return (
    <div className="App">
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
            <Navbar.Brand style={{"marginLeft":"10px"}}>Cake Artisry</Navbar.Brand>
        </Navbar>
      </div>
      <Switch>
         <Route path="/details/:id">
           <Suspense fallback={null}>
              <ProductDetail location={location}></ProductDetail>
            </Suspense>
         </Route>
         <Route path="/">
          <Suspense fallback={null}>
            <ProductPage productDetailCLicked={productDetailCLicked}></ProductPage>
          </Suspense>
          </Route>
      </Switch>
        
    </div>
  );
}

export default App;