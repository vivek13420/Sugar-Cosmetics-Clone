import React from 'react'
import FilterComp from '../Components/FilterComp'
import Makeuplist from '../Components/Makeuplist'
import MakeupHero from './MakeupHero'
import styled from 'styled-components'

const Makeup = () => {
  return (
    <div>
    <MakeupHero/>
      <MakeupPageWrapper>
        <FilterWrapper>
        <FilterComp/>
        </FilterWrapper>
        
        <MakeupWrappers>
        <Makeuplist/>
        </MakeupWrappers>
        </MakeupPageWrapper>
    </div>
  )
}
const MakeupWrappers= styled.div`
${'' /* border: 1px solid blue; */}
width:100%;

`
const MakeupPageWrapper = styled.div `
border: 0px solid red;
display:flex;

`
const FilterWrapper= styled.div `
border: 0px solid green;
width: 500px;
@media all and (min-width:281px) and (max-width:1001px){
  display: none;

}
`

export default Makeup