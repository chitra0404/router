import React from 'react'
import {Link} from "react-router-dom"

function Cybersec() {
  return (

        <div>
             <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png" class="rounded mx-auto d-block" alt="..."></img>
             <div className="bg-success p-2 text-dark bg-opacity-25">
        <ul className="nav justify-content-center">
        <li className="nav-item">
    <Link to="/" ><a className="nav-link" href="All">All</a></Link>
      </li>
      <li className="nav-item">
       <Link to="/fullstack" ><a className="nav-link" href="Fullstackdevelopment">Fullstack</a></Link>
      </li>
      <li className="nav-item">
   <Link to="/datascience" ><a className="nav-link" href="Datascience">Datascience</a></Link>
  </li>
  <li className="nav-item">
       <Link to="/cyberscience" ><a className="nav-link" href="Cybersecurity">Cybersecurity</a></Link>
      </li>
      <li className="nav-item">
<Link to="/career" ><a className="nav-link" href="Career">Career</a></Link>
</li>
    </ul>
    </div>
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">What Is Hacking? Types of Hacking & More</h5>
            <p className="card-text">Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Cybersecurity Vs Ethical Hacking: Top 10 Differences</h5>
            <p className="card-text">Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.

Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!

First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking. </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</h5>
            <p className="card-text">Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Cybersec