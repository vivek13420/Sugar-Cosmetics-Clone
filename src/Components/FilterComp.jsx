// 1. ready ui
// 2. write value or onChange
// 3. store data in array help of useState
// 4. create local store and store in newCategories
// 5. check if prensent  data in array then remove data from array then
// else push the data in array [].




import React, { useState } from 'react'
import { useEffect } from 'react';
import {useSearchParams} from 'react-router-dom'
import "../CSS/FitlerComp.css"





const FilterComp = () => {
 
  
  const [searchParams, setSearchParams] =useSearchParams()
   const initalCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initalCategory || []);
  
  // 7. if page refresh or rerender the page data is not goese
  
  // console.log(initalCategory)
  
  
  const makeupFilerCheckbox =(e)=>{
      const newCategories = [...category];
      if(newCategories.includes(e.target.value)){
        newCategories.splice(newCategories.indexOf(e.target.value),1)
      }
      else {
        newCategories.push(e.target.value)
      }
      setCategory(newCategories)
  }
  // console.log(category)
//6. update url if click checkbox

useEffect(()=>{
  let params = {};
  params.category= category;
  setSearchParams(params)
},[category, setSearchParams])

  return (

    <div>
      {/* <h3>FilterComp</h3>
      <div>
        <div>
          <input type="checkbox" value="Novel" onChange={makeupFilerCheckbox} checked={category.includes("Novel")}/>
          <label>Novel</label>
        </div>
        <div>
          <input type="checkbox" value="Motivational" onChange={makeupFilerCheckbox} checked={category.includes("Motivational")}/>
          <label>Motivational</label>
        </div>
        <div>
          <input type="checkbox" value="Science_Fiction" onChange={makeupFilerCheckbox} checked={category.includes("Science_Fiction")}/>
          <label>Science</label>
        </div>
        <div>
          <input type="checkbox" value="Thriller" onChange={makeupFilerCheckbox} checked={category.includes("Thriller")}/>
          <label>Thriller</label>
        </div>
      </div> */}
      <div>
      <ul id='accordion-sort'>
       <li>
       <label htmlFor="first-sort" className='label-sort'>Sort By: Relevance <span><i className="fa-solid fa-angle-right"></i></span></label>
            
            <input type="checkbox" name="according-sort" id="first-sort"  ></input>
            
            <div className ="content-sort">
                <div>
                  <input  type="radio" />
                  Relevance
                </div>
                <div>
                  <input  type="radio" />
                  Price: High To Low
                </div>
                <div>
                  <input  type="radio" />
                  Price: Low To High
                </div>
                </div>
       </li>
      </ul>
      </div>
      
      <div>
      
        <ul id="accordion">
          <div className='filter-name'>
          <label >Filters</label>
          <p className='reset'>Reset</p>
          </div>
          <hr className='hr'/>
          <li>
            <label htmlFor="first" className='label'>Product Type <span><i className="fa-solid fa-angle-right"></i></span></label>
            <input type="radio" name="according" id="first"  ></input>
            <div className ="content">
                <div>
                  <input  type="checkbox" />
                  Kajal
                </div>
                <div>
                  <input  type="checkbox" />
                  Crayon Lipstick
                </div>
                <div>
                  <input  type="checkbox" />
                  Vivid Lipstick
                </div>
                <div>
                  <input  type="checkbox" />
                  Kohl
                </div><div>
                  <input  type="checkbox" />
                  Mascara
                </div>
                
                <div>
                  <input  type="checkbox" />
                  Liquid Lipstick
                </div>
                <div>
                  <input  type="checkbox" />
                  Eyeliner
                </div>
                <div>
                  <input  type="checkbox" />
                  Brow Definer
                </div>
                <div>
                  <input  type="checkbox" />
                  Blushes & Bronzers
                </div><div>
                  <input  type="checkbox" />
                  Blush
                </div>

                
            </div>
          </li>
          <hr className='hr'/>
          <li>
            <label htmlFor="second" className='label'>Feature<span><i className="fa-solid fa-angle-right"></i></span></label>
            <input type="radio" name="according" id="second"  ></input>
            <div className ="content">
                <div>
                  <input  type="checkbox" />
                  Purple
                </div>
                <div>
                  <input  type="checkbox" />
                  Smudge Free
                </div>
                <div>
                  <input  type="checkbox" />
                   Velvet
                </div>
                <div>
                  <input  type="checkbox" />
                  Waterproof
                </div>
                <div>
                  <input  type="checkbox" />
                  Black
                </div>
                <div>
                  <input  type="checkbox" />
                  Curling
                </div>
                <div>
                  <input  type="checkbox" />
                  Lengthening
                </div>
                <div>
                  <input  type="checkbox" />
                  Matte
                </div>
                <div>
                  <input  type="checkbox" />
                  Smudge Proof
                </div>
                
            </div>
          </li>
          <hr className='hr'/>
          <li>
            <label htmlFor="third" className='label'>Finish<span><i className="fa-solid fa-angle-right"></i></span></label>
            <input type="radio" name="according" id="third"  ></input>
            <div className ="content">
                <div>
                <input  type="checkbox" />
                  Matte
                </div>
                <div>
                  <input  type="checkbox" />
                  Bullet
                </div>
                <div>
                <input  type="checkbox" />
                Metallic
                </div>
                <div>
                  <input  type="checkbox" />
                   Natural
                </div>
                <div>
                <input  type="checkbox" />
                Creme
                </div>
                <div>
                  <input  type="checkbox" />
                  Double Matte
                </div>
            </div>
          </li>
          <hr className='hr'/>
          <li>
            <label htmlFor="fourth" className='label'>Formulation<span><i className="fa-solid fa-angle-right"></i></span></label>
            <input type="radio" name="according" id="fourth"  ></input>
            <div className ="content">
                <div>
                  <input  type="checkbox" />
                  Crayon
                </div>
                <div>
                  <input  type="checkbox" />
                  Bullet
                </div>
                <div>
                  <input  type="checkbox" />
                   Liquid
                </div>
                <div>
                  <input  type="checkbox" />
                   Pressed Powder
                </div>
                <div>
                  <input  type="checkbox" />
                  Gel
                </div>
                <div>
                  <input  type="checkbox" />
                  Cream
                </div>
            </div>
          </li>
          <hr className='hr'/>
          <li>
            <label htmlFor="fifth" className='label'>Concern<span><i className="fa-solid fa-angle-right"></i></span></label>
            <input type="radio" name="according" id="fifth"  ></input>
            <div className ="content">
                <div>
                  <input  type="checkbox" value="Blurring" onChange={makeupFilerCheckbox} checked={category.includes("Blurring")}/>
                  Blurring
                </div>
                <div>
                  <input  type="checkbox" />
                  Under eye
                </div>
                <div>
                  <input  type="checkbox" />
                  Brightening
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterComp