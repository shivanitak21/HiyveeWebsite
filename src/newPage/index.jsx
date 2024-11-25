import React, { useState } from 'react';
import './index.css';

export default function Main() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className='main-container'>
            <div className='navbar-container'>
                {
                    !menuOpen ?
                        <div className='navbar'>
                            <span className='hiyvee'>Hiyvee</span>
                            <div className='list'>
                                <div className='about'>
                                    <span className='features-1'>What’s Hiyvee</span>
                                </div>
                                <div className='features'>
                                    <span className='features-1'>Features</span>
                                </div>
                                <div className='contact'>
                                    <span className='features-1'>Contact Us</span>
                                </div>
                            </div>
                            <div className='sign-in'>
                                <div className='sign-up-button'>
                                    <span className='download-now'>Download Now</span>
                                </div>
                            </div>
                            <div className="menu-icon" onClick={toggleMenu}>
                                {menuOpen ? <img className='icon-close' src='/src/assets/icons8-close-96.svg' alt='image1' /> : <img className='icon-menu' src='/src/assets/icons8-menu.svg' alt='image1' />}
                            </div>
                        </div>
                        :
                        <div className='navbar-menubar'>
                            <span className='hiyvee'>Hiyvee</span>
                            <div className='list'>
                                <div className='about'>
                                    <span className='features-1'>What’s Hiyvee</span>
                                </div>
                                <div className='features'>
                                    <span className='features-1'>Features</span>
                                </div>
                                <div className='contact'>
                                    <span className='features-1'>Contact Us</span>
                                </div>
                            </div>
                            <div className='sign-in'>
                                <div className='sign-up-button'>
                                    <span className='download-now'>Download Now</span>
                                </div>
                            </div>
                            <div className="menu-icon" onClick={toggleMenu}>
                                {menuOpen ? <img className='icon-close' src='/src/assets/icons8-close-96.svg' alt='image1' /> : <img className='icon-menu' src='/src/assets/icons8-menu.svg' alt='image1' />}
                            </div>
                        </div>
                }
            </div>
            <div className='hero-section-content'>
                <div className='hero-section'>
                    <span className='h-heading'>
                        Your Life, Your Rules, Your Privacy!
                    </span>
                    <span className='paragraph-text'>
                        Your digital life deserves both freedom and protection. On Hiyvee,
                        you share your story, your way—keeping your privacy in your hands
                        while staying connected to the world.
                    </span>
                </div>
                <div className='primary-button'>
                    <span className='download-now-2'>Download Now</span>
                </div>
            </div>
            <div className='whats-hiyvee-3'>
                <div className='content'>
                    <span className='h-heading-4'>What’s Hiyvee?</span>
                    <span className='p-paragraph'>
                        In a world of oversharing, Hiyvee is your private corner. Connect,
                        chat, and share without worrying about your data—because your
                        boundaries matter here.
                    </span>
                </div>
                <div className='container'>
                    <img className='app-images' src='/src/assets/image-group.svg' alt='image1' />
                </div>
            </div>
            <div className='team'>
                <div className='content-138'>
                    <span className='who-made-hiyvee'>Who made hiyvee?</span>
                    <span className='discover-the-team'>
                        Discover the team behind Hiyvee.
                    </span>
                </div>
                <div className='container-139'>
                    <div className='card'>
                        <div className='image-placeholder' />
                        <div className='content-13a'>
                            <span className='singer'>Shubham Singh</span>
                            <span className='number-of-songs'>Frontend Developer</span>
                        </div>
                    </div>
                    <div className='card-13b'>
                        <div className='frame-13c'>
                            <div className='image-placeholder-13d' />
                            <div className='content-13e'>
                                <span className='singer-13f'>Sunil</span>
                                <span className='number-of-songs-140'>Frontend Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className='card-141'>
                        <div className='image-placeholder-142' />
                        <div className='content-143'>
                            <span className='singer-144'>Dharam Singh</span>
                            <span className='number-of-songs-145'>Devops Engineer</span>
                        </div>
                    </div>
                    <div className='card-146'>
                        <div className='frame-147'>
                            <div className='image-placeholder-148' />
                            <div className='content-149'>
                                <span className='singer-14a'>Shivani Tak</span>
                                <span className='number-of-songs-14b'>Fullstack Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className='card-14c'>
                        <div className='image-placeholder-14d' />
                        <div className='content-14e'>
                            <span className='singer-14f'>Karthik Srinivas</span>
                            <span className='number-of-songs-150'>Backend Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-151'>
                <div className='content-152'>
                    <span className='h-heading-153'>People talk about hiyvee</span>
                    <span className='p-paragraph-154'>
                        Know what people have to say about us.
                    </span>
                </div>
                <div className='container-155'>
                    <div className='card-156'>
                        <div className='image-placeholder-157' />
                        <div className='content-158'>
                            <span className='singer-159'>user Name</span>
                            <span className='number-of-songs-15a'>Review</span>
                        </div>
                    </div>
                    <div className='card-15b'>
                        <div className='image-placeholder-15c' />
                        <div className='content-15d'>
                            <span className='singer-15e'>user Name</span>
                            <span className='number-of-songs-15f'>Review</span>
                        </div>
                    </div>
                    <div className='card-160'>
                        <div className='image-placeholder-161' />
                        <div className='content-162'>
                            <span className='singer-163'>user Name</span>
                            <span className='number-of-songs-164'>Review</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='background-gradient' />
            <div className='background-gradient-165' />
            <div className='frame-166'>
                <div className='content-167'>
                    <span className='h-heading-168'>Features</span>
                    <span className='p-paragraph-169'>
                        Explore a new side of social media with Hiyvee.
                    </span>
                </div>
                <div className='frame-16a'>
                    <div className='frame-16b'>
                        <div className='frame-172'>
                            <span className='privacy'>Privacy</span>
                            <span className='connect-with-confidence'>
                                Connect with confidence. On Hiyvee, your privacy comes
                                first—share, chat, and engage without compromising your data.
                            </span>
                        </div>
                        <div className='hotspot-16f'>
                            <div className='vector-170'>
                                <img className="img-icon" src='/src/assets/images/af8d3bc4-1e85-4ae0-8a60-f6651e6e0834.png'></img>
                            </div>
                        </div>
                    </div>
                    <div className='frame-16e'>
                        <div className='hotspot-16f'>
                            <div className='vector-170'>
                            <img className="img-icon" src='/src/assets/images/c4683107-7e6d-4975-8f80-373f51ee51b9.png'></img>
                            </div>
                        </div>
                        <div className='frame-172'>
                            <span className='entertainment'>Entertainment</span>
                            <span className='flicks-and-memes'>
                                Flicks and Memes on Hiyvee offer bite-sized entertainment, from
                                trending clips to personal moments, all in a secure and private
                                space where you control your audience.
                            </span>
                        </div>
                    </div>
                    <div className='frame-16b'>
                        <div className='frame-172'>
                            <span className='nearby'>Nearby</span>
                            <span className='explore-surroundings'>
                                Whether it's meeting new friends, joining local activities, or
                                finding trending spots, Hiyvee helps you explore your
                                surroundings.
                            </span>
                        </div>
                        <div className='hotspot-16f'>
                            <div className='vector-170'>
                            <img className="img-icon" src='/src/assets/images/f8b8879c-de15-4a1d-af34-a4680e08b53d.png'></img>
                            </div>
                        </div>
                    </div>
                    <div className='frame-16e'>
                        <div className='hotspot-16f'>
                            <div className='vector-170'>
                            <img className="img-icon" src='/src/assets/images/02822274-fda6-4a1c-ad8e-bf5bbeb1b62a.png'></img>
                            </div>
                        </div>
                        <div className='frame-17c'>
                            <span className='groups'>Groups</span>
                            <span className='connect-like-minded'>
                                With Hiyvee's groups, connect with like-minded people in a
                                secure, private space where you can share ideas, collaborate,
                                and build conversations.
                            </span>
                        </div>
                    </div>


                    <div className='frame-16b'>
                        <div className='frame-172'>
                            <span className='much-more'>And much more!</span>
                            <span className='world-features'>
                                Hiyvee offers a world of features tailored to you. From
                                personalised content to interactive tools, explore a platform
                                that grows with you.
                            </span>
                        </div>
                        <div className='hotspot-16f'>
                            <div className='vector-170'>
                            <img className="img-icon-1" src='/src/assets/images/453367e5-a275-4fab-a2e0-e9ef7688e4e4.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vector-182' />
                <div className='vector-183' />
                <div className='vector-184' />
                <div className='vector-185' />
            </div>
            <div className='background-gradient-187' />
            <div className='background-gradient-188' />
            <div className='background-gradient-189' />
            <div className='team-18a'>
                <div className='content-18b'>
                    <span className='h-heading-18c'>Contact us</span>
                    <span className='p-paragraph-18d'>
                        We value the words of our customers and try to enhance the product
                        experience.
                    </span>
                </div>
                <div className='frame-18e'>
                    <div className='card-18f'>
                        <div className='content-190'>
                            <span className='number-of-songs-191'>Name</span>
                        </div>
                    </div>
                    <div className='card-192'>
                        <div className='content-193'>
                            <span className='number-of-songs-194'>Email</span>
                        </div>
                    </div>
                    <div className='card-195'>
                        <div className='content-196'>
                            <span className='number-of-songs-197'>Message</span>
                        </div>
                    </div>
                </div>
                <div className='primary-button-198'>
                    <span className='download-now-199'>Submit</span>
                </div>
            </div>
            <div className='background-gradient-19a' />
            <div className='footer'>
                <div className='container-19b'>
                    <span className='hiyvee-19c'>Hiyvee</span>
                    <div className='container-19d'>
                        <div className='content-19e'>
                            <span className='account'>Quick Links</span>
                            <div className='links'>
                                <span className='ui-label-regular'>What’s Hiyvee?</span>
                                <span className='ui-label-regular-19f'>Features</span>
                                <span className='ui-label-regular-1a0'>Contact Us</span>
                            </div>
                        </div>
                    </div>
                    <div className='primary-button-1a1'>
                        <span className='download-now-1a2'>Download Now</span>
                    </div>
                </div>
                <div className='container-1a3'>
                    <div className='container-1a4'>
                        <div className='social-media-icons'>
                            <div className='youtube-icon'>
                                <div className='vector-1a5' />
                            </div>
                            <div className='twitter-icon'>
                                <div className='vector-1a6' />
                            </div>
                            <div className='tiktok-icon'>
                                <div className='vector-1a7' />
                            </div>
                            <div className='facebook-icon'>
                                <div className='vector-1a8' />
                            </div>
                        </div>
                    </div>
                    <div className='divider' />
                </div>
            </div>
        </div>
    );
}