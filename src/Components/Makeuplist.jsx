import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MakeupCard from "./MakeupCard";
import "../CSS/MakeupCard.css";
import { NavLink } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMakeup } from "../Redux/AppReducer/action";
import { toast } from "react-hot-toast";
import { useState } from "react";
const Makeuplist = () => {
  const setToLocalStorage = (data) => {
    localStorage.setItem("cartitem", JSON.stringify(data));
  };

  let data = JSON.parse(localStorage.getItem("cartitem"));
  console.log(data);

  const [cartitem, setCart] = useState(data || []);

  const handleCart = (data) => {
    setCart([...cartitem, data.makeupData]);
    toast.success("Added to cart");
  };

  setToLocalStorage(cartitem);

  const makeup = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || makeup.length === 0) {
      const sortBy = searchParams.get("sort");
      const getBookParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      dispatch(getMakeup(getBookParams));
    }
  }, [makeup.length, dispatch, location.search]);

  return (
    <div className="mkdiv">
      {makeup.length > 0 &&
        makeup.map((singleMakeup) => {
          return (
            <div key={singleMakeup.id}>
              <MakeupCard makeupData={singleMakeup} handler={handleCart} />
            </div>
          );
        })}
    </div>
  );
};

export default Makeuplist;
