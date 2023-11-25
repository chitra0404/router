import React from 'react'
import {Link} from "react-router-dom"

function Career() {
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
   <p className="card-text">Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills. What if I tell you, you can get into it without coding knowledge? Sounds Great, Right? Anyone can apply for these job roles irrespective of their educational background. </p>
 </div>
 <div className="card-footer">
   <small className="text-body-secondary">Last updated 3 mins ago</small>
 </div>
</div>
</div>
<div className="col">
<div className="card h-100">
 <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1536x804.webp" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional</h5>
   <p className="card-text">What if I say that blockchain is going to be the next big thing? And why do I say so? Because of its decentralized and secure approach to data management. It is high time for you to catch up with others as the competition is growing day by day. In order to do that, all you need to have is a compelling blockchain developer resume.. </p>
 </div>
 <div className="card-footer">
   <small className="text-body-secondary">Last updated 3 mins ago</small>
 </div>
</div>
</div>
<div className="col">
<div className="card h-100">
 <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/1-1536x804.webp" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow</h5>
   <p className="card-text">With the growing concerns of digital security increasing day by day, organizations turn to ethical hackers to test their security levels. Whether small or large, they play an important role in tightening their security. An ethical hacker resume is a must-need for one who wants to excel in that field. </p>
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

export default Career