import '../Styles/Footer.css';

const Footer = ()=>{

    return(
        <div>
            <hr />
            <div className="outer_box">
                <div className='sugar_logo_box'>
                    <img src="/sugar_footer.svg" alt="footer_img" width={'100px'}/>
                </div>
                <div className="inner_box_main">
                    <div className="inner_box_1">
                        <img src="/icons/facebook.svg" alt="fb" />
                        <img src="/icons/tumblr.svg" alt="tm" />
                        <img src="/icons/youtube.svg" alt="yt" />
                        <img src="/icons/twitter.svg" alt="tw" />
                        <img src="/icons/instagram.svg" alt="ig" />
                        <img src="/icons/mail.png" alt="gm" />
                        <img src="/icons/pinterest.svg" alt="pt" />
                    </div>
                    <hr />
                    <div className='links_box'>
                        <div className="links">Stores</div>
                        <div className="links">Terms & Conditions</div>
                        <div className="links">Returns</div>
                        <div className="links">FAQs</div>
                        <div className="links">About Us</div>
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
                            <p className='greyText'>hello@sugarcosmetics.com</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Careers</p>
                            <p className='greyText'>We're hiring</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Press & Media</p>
                            <p className='greyText'>pr@sugarcosmetics.com</p>
                        </div>
                        <div className="contact_box_child">
                            <p>Influencers Collab</p>
                            <p className='greyText'>Join Us</p>
                        </div>
                    </div>
                    <hr />
                    <div className='apps_box'>
                        <div className="apps_child">
                            <p>GET THE NEW SUGAR APP TODAY!</p>
                            <p className='greyText'>Tap into a better shopping experience.</p>
                        </div>
                        <div className="apps_child">
                            <div className='app_button'>
                                <img src="/icons/playstore.png" alt="gplay" width={'40px'}/>
                                <div>
                                    <p>GET IN ON</p>
                                    <p style={{'fontSize':'18px','marginTop':'-10px'}}>Google Play</p>
                                </div>
                            </div>
                        </div>
                        <div className="apps_child">
                            <div className='app_button'>
                                <img src="/icons/apple.png" alt="appstore"  width={'40px'}/>
                                <div>
                                    <p>Download on the</p>
                                    <p style={{'fontSize':'18px','marginTop':'-10px'}}>App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='greyText'>
                    <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
