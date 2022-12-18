import React from "react";
import FilterComponent from "../Components/FilterComponents";
import Skincarelist from "../Components/Skincarelist";
import UpperHero from "./SkincareHero";
import styled from "styled-components";

const Skincare = () => {
  return (
    <div>
      <UpperHero />
      <MakeupPageWrapper>
        <FilterWrapper>
          <FilterComponent />
        </FilterWrapper>

        <MakeupWrappers>
          <Skincarelist />
        </MakeupWrappers>
      </MakeupPageWrapper>
    </div>
  );
};
const MakeupWrappers = styled.div`
  ${"" /* border: 1px solid blue; */}
  width:100%;
`;
const MakeupPageWrapper = styled.div`
  border: 0px solid red;
  display: flex;
`;
const FilterWrapper = styled.div`
  border: 0px solid green;
  width: 500px;
`;

export default Skincare;
