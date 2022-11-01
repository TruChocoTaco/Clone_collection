import React from 'react'
import { images } from '../constants'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { HiOutlineDownload } from 'react-icons/hi'

import './styles/Discord.scss'

const Discord = () => {
  return (
    <section className='discord'>
      
      <div className="top">
        <nav className='navbar'>
          <div className='logo'>
            Discord
          </div>

          <div className='menu'>
            <ul>
              <li><a href="#">Download</a></li>
              <li><a href="#">Nitro</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className='side-menu'> 
            <a href="">Login</a>
            <div className='mini-menu'>hamburg</div>
          </div>
        </nav>

        <div className='hero'>
          <div className='hero-content'>
            
            <div>
              <h1>Imagine A Place...</h1>
            </div>
            
            <div>
              <p>
                ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                Where just you and a handful of friends can spend time together. 
                A place that makes it easy to talk every day and hang out more often.
              </p>
            </div>
            
            <div>
              <a className='' href='#'><HiOutlineDownload/> Download For Windows</a>
              <button> Open Discord in your browser</button>
            </div>

          </div>
        </div>

        <div className='bg-imgs'>
          <img className='bg' src={images.dheroBg} alt="" />
          <img className='img1' src={images.dhero1} alt="" />
          <img className='img2' src={images.dhero2} alt="" />
        </div>
      </div>

      <div className="section">
        <div className='left-img'>
          <img src={images.dgroup} alt="" />
        </div>
        <div className='text'>
          <h1>Create an invite-only place where you belong</h1>
          <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
      </div>
      <div className="section mid-sec">
        <div className='box'>
          <div className='text'>
            <h1>Where hanging out is easy</h1>
            <p>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
          </div>
          <div className='right-img'>
            <img src={images.dvoice} alt="" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className='left-img'>
          <img src={images.dpic} alt="" />
        </div>
        <div className='text'>
          <h1>From few to a fandom</h1>
          <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
        </div>
      </div>

      <div className='big-section'>
        <div className='container'>
          <div className='text'>
            <h1>Reliable tech for staying close</h1>
            <p>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
          </div>

          <img src={images.dvid} alt="big pic" />

          <div className='download'>
            <div>
              <img src={images.sparkles} alt="" />
            </div>
            <h2>Ready to start your journey?</h2>
            <button><HiOutlineDownload/> Download for Windows </button>
          </div>
        </div>
      </div>

      <div className='footer'>
        
        <div className="row">

          <div className='info'>
            <h1>Imagine A Place</h1>
            <div className='menu'>
              <img src={images.usa} alt="" />
              <select title='langauges' className='dropdown'>
                <option value="">English, USA</option>
                <option value="">Spanish</option>
                <option value="">French</option>
              </select>
              </div>
            <div className='socials'>
              <a href="" style={{ margin: '0' }}><BsTwitter /></a>
              <a href=""><BsInstagram /></a>
              <a href=""><AiFillFacebook /></a>
              <a href=""> <AiFillYoutube /></a>
            </div>
          </div>

          <div className='spacer'></div>

          <div className='box'>
            <p>Product</p>
            <a href="#">Download</a>
            <a href="#">Nitro</a>
            <a href="#">Status</a>
          </div>

          <div className='box'>
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">Branding</a>
            <a href="#">Newsroom</a>
          </div>

          <div className='box'>
            <p>Resources</p>
            <a href="#">College</a>
            <a href="#">Support</a>
            <a href="#">Safety</a>
            <a href="#">Blog</a>
            <a href="#">Feedback</a>
            <a href="#">Developers</a>
            <a href="#">Streamkit</a>
          </div>

          <div className='box'>
            <p>Policies</p>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Guidelines</a>
            <a href="#">Acknowledgements</a>
            <a href="#">Licenses</a>
            <a href="#">Moderation</a>
          </div>
        </div>
        <div className='footer-links'>
          <div className='ft'>
            <div className='bar'></div>
            <div className='content'>
              <a href="#">Discord</a>
              <a className='button' href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discord