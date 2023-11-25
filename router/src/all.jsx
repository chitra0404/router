import React from 'react'
import {Link} from "react-router-dom"

function All() {
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
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Top 5 Product-Based Companies That Don’t Require Coding</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01-768x384.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Best 15 Product-based Companies for IoT Solutions Architects in India</h5>
        <p className="card-text">The domain of the Internet of Things (IoT) has become a pivotal element in driving</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-1-1-1536x804.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">12 Key Elements For A Professional UI/UX Designer Resume Guide</h5>
        <p className="card-text">The field of UI/UX designing is all about innovation and creativity. People should understand the value of your thinking just by looking at your work. But is that enough to make you a qualified professional? The answer is no, what you need is a professional UI/UX designer resume.</p>
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

export default All