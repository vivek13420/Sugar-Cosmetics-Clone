import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../CSS/FitlerComponent.css";

const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initalCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initalCategory || []);
  const initalSort = searchParams.getAll("sort");
  const [sort, setSort] = useState(initalSort[0] || "");

  const FilterCheckbox = (e) => {
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };


  const sortCheckbox = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);

  return (
    <div>
      <div>
        <ul id="accor-sort">
          <li>
            <label htmlFor="1st-sort" className="sorted">
              Sort By: Relevance{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </label>

            <input
              type="checkbox"
              name="according-sort"
              id="1st-sort"
            ></input>

            <div className="sorting_content" onChange={sortCheckbox}>
              <div>
                <input type="radio" />
                Relevance
              </div>
              <div>
                <input
                  type="radio"
                  value="desc"
                  name="sort"
                  defaultChecked={sort === "desc"}
                />
                Price: High To Low
              </div>
              <div>
                <input
                  type="radio"
                  value="asc"
                  name="sort"
                  defaultChecked={sort === "asc"}
                />
                Price: Low To High
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <ul id="accor">
          <div className="name">
            <label>Filters</label>
            <p className="reset">Reset</p>
          </div>
          <hr className="hr_tag" />
          <li>
            <label htmlFor="first" className="labeled">
              Product Type{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </label>
            <input type="radio" name="according" id="first"></input>
            <div className="contents">
              <div>
                <input
                  type="checkbox"
                  value="Face Mask"
                  onChange={FilterCheckbox}
                />
                Face Mask
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Cleansing Mask"
                  onChange={FilterCheckbox}
                />
                Cleansing Mask
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Clay Stick Mask"
                  onChange={FilterCheckbox}
                />
                Clay Stick Mask
              </div>
            </div>
          </li>
          <hr className="hr_tag" />
          <li>
            <label htmlFor="sec" className="labeled">
              Concern
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </label>
            <input type="radio" name="according" id="sec"></input>
            <div className="contents">
              <div>
                <input
                  type="checkbox"
                  value="Brightening"
                  onChange={FilterCheckbox}
                />
                Brightening
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Hydration"
                  onChange={FilterCheckbox}
                />
                Hydration
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Anti-Aging"
                  onChange={FilterCheckbox}
                />
                Anti-Aging
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
