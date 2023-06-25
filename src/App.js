import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoutes from "./layouts/PrivateRoutes";
import { useEffect } from "react";
import { checkSession } from "./utils/axios/axios";
import Home from "./pages/Home";


function App() {
  useEffect(function () {

    if (!localStorage.getItem("storage_type")) {
      localStorage.setItem("storage_type", "session")
    }

    checkSession().then(response => {
      if (response === true) {
        if (localStorage.getItem("storage_type") === "session") {
          console.log("session from session")
        } else if (localStorage.getItem("storage_type" === "local")) {
          console.log("local session")
        }
      }
    })
  })

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<AuthLayout />} />
          <Route path="/auth/register" element={<AuthLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
