import React, { useState } from 'react'
import './styles/Netflix.scss'
import { BsGlobe, BsChevronRight } from 'react-icons/bs'
import { AiFillCaretDown, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { images } from '../constants'

const Netlix = () => {
const [lang, setLang] = useState('English')
const [toggle1, setToggle1] = useState(false)
const [toggle2, setToggle2] = useState(false)
const [toggle3, setToggle3] = useState(false)
const [toggle4, setToggle4] = useState(false)
const [toggle5, setToggle5] = useState(false)
const [toggle6, setToggle6] = useState(false)

    return (
    <section className='netflix'>
        <nav className='navbar'>
            <div className="logo">Netflix</div>
            <div className="dropdown"><BsGlobe />{lang}<AiFillCaretDown /></div>

            <button type='button' onClick='' className='btn'>Sign In</button>
        </nav>


        <div className='main'>
            <div className="bg">
                <img src={images.netflix} alt="" className='bg-img'/>
                <div className="gradient"></div>
            </div>
            <div className='hero-content'>
                <h1>Unlimited movies, TV, shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>Ready to watch? enter your email to create or restart your membership.</p>
                <div>
                    <input type="email" name="email" id="" placeholder='Email address' className='email'/>
                    <button type='button' className='btn'><p>Get Started</p><BsChevronRight /></button>
                </div>
            </div>
        </div>

        <div className='section'>
            <div className='left-text'>
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className='image'>
                <img src={images.tv} alt="" />
            </div>
        </div>
        <div className='section'>
            <div className='image'>
                <img src={images.phone} alt="" />
                <div className='phone-box'>
                    <div className='box-img'>
                        <img src={images.boxshot} alt="" />
                    </div>
                    <div className='text'>
                        <div className='white-text'>Stanger Things</div>
                        <div className='blue-text'>Downloading...</div>
                    </div>
                    <div className='gif'></div>
                </div>
            </div>
            <div className='right-text'>
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
            </div>
        </div>
        <div className='section'>
            <div className='left-text'>
                <h1>Watch everywhere.</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
            </div>
            <div className='image'>
                <img src={images.mac} alt="" />
            </div>
        </div>
        <div className='section'>
            <div className='image'>
                <img src={images.kids} alt="" />
            </div>
            <div className='right-text'>
                <h1>Create profiles for kids.</h1>
                <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
        </div>

        <div className="questions">
            <h1>Frequently Asked Questions</h1>
            <ul className="question-list">
                <li className='question'>
                    <button onClick={() => setToggle1(!toggle1)}>What is Netflix? <AiOutlinePlus /></button>
                    <div className={toggle1 ? 'answer open' : 'answer closed'}>
                        <span>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            <br />
                            <br />
                            You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </span>
                    </div>
                </li>
                <li className='question'>
                    <button onClick={() => setToggle2(!toggle2)}>How much does Netflix cost? <AiOutlinePlus /></button>
                    <div className={toggle2 ? 'answer open' : 'answer closed'}>
                        <span>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.
                        </span>
                    </div>
                </li>
                <li className='question'>
                    <button onClick={() => setToggle3(!toggle3)}>Where can I watch? <AiOutlinePlus /></button>
                    <div className={toggle3 ? 'answer open' : 'answer closed'}>
                        <span>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br />
                            <br />
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </span>
                    </div>
                </li>
                <li className='question'>
                    <button onClick={() => setToggle4(!toggle4)}>How do I cancel? <AiOutlinePlus /></button>
                    <div className={toggle4 ? 'answer open' : 'answer closed'}>
                        <span>
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
                        </span>
                    </div>
                </li>
                <li className='question'>
                    <button onClick={() => setToggle5(!toggle5)}>What can i watch on Netflix? <AiOutlinePlus /></button>
                    <div className={toggle5 ? 'answer open' : 'answer closed'}>
                        <span>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </span>
                    </div>
                </li>
                <li className='question'>
                    <button onClick={() => setToggle6(!toggle6)}>Is Netflix good for kids? <AiOutlinePlus /></button>
                    <div className={toggle6 ? 'answer open' : 'answer closed'}>
                        <span>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            <br />
                            <br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
                        </span>
                    </div>
                </li>
            </ul>
            <div className='ready-to-watch'>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="form">
                    <input className='email' type="email" name="email" id="" placeholder='Email address'/>
                    <button type='button' className='btn'> 
                        <p>Get Started</p>
                        <span><BsChevronRight /></span>
                    </button>
                </div>
            </div>
        </div>

        <div className="footer">
            <p>Questions? Call 1-844-504-2993</p>
            <div className='blocks'>
                <div className='block'>
                    <a href='#'>FAQ</a>
                    <a href='#'>Investor Relations</a>
                    <a href='#'>Ways to Watch</a>
                    <a href='#'>Corporate Information</a>
                    <a href='#'>Only on Netflix</a>
                </div>
                <div className='block'>
                    <a href='#'>Help Center</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className='block'>
                    <a href='#'>Account</a>
                    <a href='#'>Redeem Gift Cards</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Speed Test</a>
                </div>
                <div className='block'>
                    <a href='#'>Media Center</a>
                    <a href='#'>Buy Gift Cards</a>
                    <a href='#'>Cookie Preferences</a>
                    <a href='#'>Legal Notices</a>
                </div>
            </div>
            <div className="dropdown">
                <div className='drop'>
                    <p><BsGlobe /></p>
                    <span>{lang}</span>
                    <p><AiFillCaretDown /></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Netlix