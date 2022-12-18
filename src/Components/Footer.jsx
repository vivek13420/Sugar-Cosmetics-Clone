import '../Styles/Footer.css';

const Footer = ()=>{

    return(
        <div>
            <div className="outer_box">
                <div className='sugar_logo_box'>
                    <img src="/brand.png" alt="footer_img"/>
                </div>
                <div className="inner_box_main">
                    <div className="inner_box_1">
                        <a href="https://www.facebook.com/trySUGAR/"><img src="/icons/facebook.svg" alt="fb" /></a>
                        <a href="https://www.tumblr.com/sugarcosmetics-blog"><img src="/icons/tumblr.svg" alt="tm" /></a>
                        <a href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g"><img src="/icons/youtube.svg" alt="yt" /></a>
                        <a href="https://twitter.com/trySUGAR"><img src="/icons/twitter.svg" alt="tw" /></a>
                        <a href="https://www.instagram.com/trysugar/?hl=en"><img src="/icons/instagram.svg" alt="ig" /></a>
                        <a href="mailto:?subject=Check%20this%20https://in.sugarcosmetics.com/pages/offer"><img src="/icons/mail.png" alt="gm" /></a>
                        <a href="https://www.pinterest.com/sugarcosmetics/"><img src="/icons/pinterest.svg" alt="tw" /></a>
                    </div>
                    <hr />
                    <div className='links_box'>
                        <a href="https://in.sugarcosmetics.com/stores"><div className="links">Stores</div></a>
                        <a href="https://in.sugarcosmetics.com/pages/terms-conditions"><div className="links">Terms & Conditions</div></a>
                        <a href="https://in.sugarcosmetics.com/pages/returns-refunds"><div className="links">Returns</div></a>
                        <a href="https://in.sugarcosmetics.com/pages/faqs"> <div className="links">FAQs</div></a>
                        <a href="https://in.sugarcosmetics.com/pages/about-us"><div className="links">About Us</div></a>     
                    </div>
                    <hr />
                    <div className='contact_box'>
                        <div className="contact_box_child">
                            <div className="cbc"><h2>GET IN TOUCH</h2></div>
                            <div className="cbc"><p className='greyText'>Call us at</p></div>
                            <div className="cbc"><p className='greyText'>1800-209-9933</p>
                            <p className='greyText' style={{'marginTop':'-10px'}}>Monday to Friday : 9 AM to 7 PM</p>
                        </div>
                        </div>
                        <div className="contact_box_child">
                            <p>Suport</p>
                            <p className={`${'greyTextUnder'}`}>hello@sugarcosmetics.com</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Careers</p>
                            <p className='greyTextUnder'>We're hiring</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Press & Media</p>
                            <p className='greyTextUnder'>pr@sugarcosmetics.com</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Influencers Collab</p>
                            <p className='greyTextUnder'>Join Us</p>
                        </div>
                    </div>
                    <hr />
                    <div className='apps_box'>
                        <div className="apps_child">
                            <p>GET THE NEW MASAI COSMETICS APP TODAY!</p>
                            <p className='greyText'>Tap into a better shopping experience.</p>
                        </div>
                        <div className='apps_child_box'>
                            <div className="apps_child">
                                <a href="https://sugarcosmetics.app.link/WebFApp">
                                    <div className='app_button'>
                                        <img src="/icons/playstore.png" alt="gplay" width={'40px'}/>
                                        <div>
                                            <p>GET IN ON</p>
                                            <p style={{'fontSize':'18px','marginTop':'-10px'}}>Google Play</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="apps_child">
                                <a href="https://sugarcosmetics.app.link/WebFApp">
                                    <div className='app_button'>
                                        <img src="/icons/apple.png" alt="appstore"  width={'40px'}/>
                                        <div>
                                            <p>Download on the</p>
                                            <p style={{'fontSize':'18px','marginTop':'-10px'}}>App Store</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='greyText'>
                    <p>Copyright © 2022 MASAI Cosmetics. All rights reserved.</p>
                    <p>Contributors:- <a href='https://github.com/avnishsingh0'> Avnish </a> | 
                    <a href='https://github.com/Shubhamverma94'> Shubham </a> | 
                    <a href='https://github.com/TejasBishnoi21'> Tejasvi </a>  |
                    <a href='https://github.com/Devendra0192'> Devendra </a> 
                    </p>
                
                </div>
            </div>
        </div>
    )
}

export default Footer;
