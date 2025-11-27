import React from "react";
import Nav from "../component/nav/Nav";
import { Outlet } from "react-router";
import Footer from "../component/nav/Footer";
import Categories from "../Pages/Categories";
import Fatured from "../Pages/Fatured";

const Root = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section>
        <Outlet />
        <Categories />
        <Fatured />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Root;
