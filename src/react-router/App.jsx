import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { Cart } from "../pages/Cart";
import { Profile } from "../pages/Profile";
import { Header } from "../companents/Header";
import { ProuductDEtail } from "../pages/Product.Detail/ProductDetail";

function App() {
  
  return (
    <div>
     
      <BrowserRouter>
      < Header/>
      <hr />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Navigate to="settings" replace />} />
            <Route path="settings" element={<p>настройки профиля</p>} />
            <Route path="info" element={<p>личная информция</p>} />
          </Route>
          <Route path="/product/:id" element={<ProuductDEtail/>}></Route>
          <Route path="*" element={<h1>ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
