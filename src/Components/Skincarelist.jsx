import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./SkincareCard";
import "../CSS/SkicareCard.css";
import { useLocation, useSearchParams } from "react-router-dom";
import{getSkincare} from '../Redux/AppReducer/action'
const Skincarelist = () => {
  const skin1 = useSelector((store) => store.books1);
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || skin1.length === 0) {
      const sortBy=searchParams.get("sort");
      const getskinParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort:sortBy && "price",
          _order:sortBy,
        },
      };
      dispatch(getSkincare(getskinParams));
    }
  }, [skin1.length, dispatch, location.search]);

  return (
    <div className="div">
      {skin1.length > 0 &&
        skin1.map((single) => {
          return (
            <div key={single.id}>
              {" "}
              <Card skincareData={single} />
            </div>
          );
        })}
    </div>
  );
};

export default Skincarelist;
