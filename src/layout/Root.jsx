import React from "react";
import Nav from "../component/nav/Nav";
import { Outlet } from "react-router";
import Footer from "../component/nav/Footer";

const Root = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Root;
