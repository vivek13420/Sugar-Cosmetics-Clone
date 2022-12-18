import React from "react";
// import { render } from "react-dom";
import Carousel from "./Carousel";
import '../Styles/body.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousal2 from "./Carousal2";

const Body = ()=>{

    return <div id="main_box">
        <div className="sliderBig">
            <Carousel />
        </div>
        <div className="sliderSmall">
            <Carousal2 />
        </div>
        {/* <a href="https://in.sugarcosmetics.com/collections/sugarnew"></a> */}
        <div className="hot_deals">
            <div className="hot_deals_child">
                <div className="pink_hr">___</div>
                <div><h3>HOT DEALS</h3></div>
                <div className="pink_hr">___</div>
            </div>
            <div className="hot_cards">
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F2db90f13-ccff-4706-90b3-85b024aa6020.jpg&w=1920&q=75" alt="1" width={'32%'}/>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F90a0f8b4-0ae4-4f0c-853d-ca54522fb509.jpg&w=1920&q=75" alt="2" width={'32%'}/>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fd9560110-40f7-4d14-a98d-5599b45a84ef.jpg&w=1920&q=75" alt="3" width={'32%'}/>
            </div>
        </div>
        
        <div className="sugar_hai">
            <div className="hot_deals_child" style={{'width':'400px'}}>
                <div className="pink_hr">___</div>
                <div><h3>SHUKAR HAI, SUGAR HAI</h3></div>
                <div className="pink_hr">___</div>
            </div>
            <div>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg&w=1920&q=75" alt="shukar hai" />
            </div>
        </div>

        <div className="top_picks">
            <div className="hot_deals_child" style={{'width':'400px'}}>
                <div className="pink_hr">___</div>
                <div><h3>TOP PICKS OF THE WEEK</h3></div>
                <div className="pink_hr">___</div>
            </div>
            
            <div className="hot_cards">
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4849cf44-c55c-4224-ba06-9dd0a5f48b67.gif&w=1920&q=75" alt="1" width={'32%'}/>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75" alt="2" width={'32%'}/>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9f9d2095-f019-4bb5-b961-db87fab439f6.jpg&w=1920&q=75" alt="3" width={'32%'}/>
            </div>
        </div>

        <div className="sugar_hai">
            <div className="hot_deals_child" style={{'width':'350px'}}>
                <div className="pink_hr">___</div>
                <div><h3>REFER YOUR FRIENDS</h3></div>
                <div className="pink_hr">___</div>
            </div>
            
            <div>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bfe8bb4-002d-4097-a773-6af33325a594.jpg&w=1920&q=75" alt="shukar hai" width={'100%'}/>
            </div>
        </div>

        <div className="sugar_hai">
            <div className="hot_deals_child" style={{'width':'350px'}}>
                <div className="pink_hr">___</div>
                <div><h3>NEWLY LAUNCHED</h3></div>
                <div className="pink_hr">___</div>
            </div>
            <div>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff190c764-84cf-4eea-a381-8b701be65852.gif&w=1920&q=75" alt="shukar hai" width={'100%'}/>
            </div>
        </div>

        <div className="subscibe_box">
            <hr style={{'border':'0.5px solid #ddd'}}/>
            <div className="sbc">
                <div className="hot_deals_child" style={{'width':'500px'}}>
                    <div className="pink_hr2">___</div>
                    <div><h3 style={{'fontSize':'24px'}}>LET’S STAY IN TOUCH</h3></div>
                    <div className="pink_hr2">___</div>
                </div>
                <p className="subs_desc">Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>

                <div className="subs_inputBox">
                    <input className="" type="text" />
                    <button>SUBSCRIBE</button>
                    
                </div>
            </div>

        </div>
    </div>
}

export default Body;