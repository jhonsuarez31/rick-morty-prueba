import React, { useContext, useEffect } from "react";
import { Navbar } from "../../UI/components/Navbar";
import { CardList } from "../components/CardList";
import { ApiContext } from "../context/ApiContext";

export const Home = () => {
  return (
    <>
      <h1 className="text-center mb-3"> Characters</h1>
      <div className="row">
        Filter component will be placed here
        <div className="col-lg-8 col-12">
          <div className="row">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};
