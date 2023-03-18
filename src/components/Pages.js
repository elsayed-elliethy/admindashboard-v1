import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingSpinner from "./loadingSpiner/LoadingSpinner";
import ScrollToTop from "./routesScrolTop/scrollToTop";



const Pages = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollToTop />
      {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
    </>
  );
};

export default Pages;
