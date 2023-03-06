import React, { useContext, useEffect } from "react";

import { CardList } from "../components/CardList";


export const Home = () => {
  return (
    <>

      <h1 className="text-center mb-3"> Characters</h1>
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="row">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};
