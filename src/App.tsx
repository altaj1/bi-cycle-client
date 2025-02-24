import { Suspense } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import FragmentLayout from "./components/shared/FragmentLayout";
import HomeLayout from "./components/home/HomeLayout";
import Panel from "./dashboard/layout/Panel";
import AuthProvider from "./components/auth/AuthProvider";
import AllBicycles from "./components/bikes/AllBikes";

import AdminProvider from "./components/auth/AdminProvider";
import AllUssers from "./dashboard/components/admin/users/AllUssers";
import AllProduct from "./dashboard/components/admin/AllProduct";
import AddProduct from "./dashboard/components/admin/AddProduct";
import EditProduct from "./dashboard/components/admin/EditProduct";
import Cards from "./components/bikes/Cards";
// https://preview.themeforest.net/item/cyclecity-bicycle-store-html-template/full_screen_preview/55536284?_ga=2.23808250.1529216479.1739637541-1460017237.1739637541
function App() {
  return (
    <Suspense
      fallback={
        <section className="h-screen w-full bg-white">
          <div
            className="h-full"
            style={{
              background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%233A81FF" stroke="%233A81FF" stroke-width="15" width="30" height="30" x="25" y="50" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: %23ff6dff; --darkreader-inline-fill: %23ff6dff;" data-darkreader-inline-fill=""><animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="%233A81FF" stroke="%233A81FF" stroke-width="15" width="30" height="30" x="85" y="50" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: %23ff6dff; --darkreader-inline-fill: %23ff6dff;" data-darkreader-inline-fill=""><animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="%233A81FF" stroke="%233A81FF" stroke-width="15" width="30" height="30" x="145" y="50" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: %23ff6dff; --darkreader-inline-fill: %23ff6dff;" data-darkreader-inline-fill=""><animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect></svg>') no-repeat center center / contain`,
            }}
          />
        </section>
      }
    >
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="all-bicycle" element={<AllBicycles />} />
          <Route path="cards" element={<Cards />} />
        </Route>
        {/* Auth Pages */}
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />
        </Route>
        <Route
          path="dashboard"
          element={
            // <Panel />
            <AuthProvider>
              <Panel />
            </AuthProvider>
          }
        >
          <Route path="project" element={<FragmentLayout />}>
            <Route
              index
              element={
                <AdminProvider>
                  <AllProduct />
                </AdminProvider>
              }
            />
            <Route
              path="add-product"
              element={
                <AdminProvider>
                  <AddProduct />
                </AdminProvider>
              }
            />
            <Route
              path="edit-product/:id"
              element={
                <AdminProvider>
                  <EditProduct />
                </AdminProvider>
              }
            />
          </Route>
          <Route path="user" element={<FragmentLayout />}>
            <Route index element={<AllUssers />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
