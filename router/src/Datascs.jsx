import React from 'react'
import {Link} from "react-router-dom"
function Datascs() {
  return (
    <div>
         <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png" class="rounded mx-auto d-block" alt="..."></img>
        <div className="bg-success p-2 text-dark bg-opacity-25">
    <ul className="nav justify-content-center">
    <li className="nav-item">
    <Link to="/" ><a className="nav-link" href="Fullstackdevelopment">All</a></Link>
      </li>
      <li className="nav-item">
       <Link to="/fullstack" ><a className="nav-link" href="Fullstackdevelopment">Fullstack</a></Link>
      </li>
      <li className="nav-item">
   <Link to="/datascience" ><a className="nav-link" href="Fullstackdevelopment">Datascience</a></Link>
  </li>
    <li className="nav-item">
       <Link to="/cyberscience" ><a className="nav-link" href="Fullstackdevelopment">Cybersecurity</a></Link>
      </li>
      <li className="nav-item">
<Link to="/career" ><a className="nav-link" href="Career">Career</a></Link>
</li>
</ul>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Impact of Certification Programs on Hiring Data Scientists</h5>
        <p className="card-text">Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today. But in this highly competitive job market, how do companies identify the best data scientists that suit specific business needs? That’s where the impact of certification programs on hiring data scientists comes in.

In today’s data-driven world, the demand for data scientists is spiking. Organizations are constantly searching for data minds with the unique skills and expertise required to harness the power of data.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers-768x480.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Top Product-Based Companies for Data Science Freshers</h5>
        <p className="card-text">In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">What is the Difference between Data Science and Data Engineering?</h5>
        <p className="card-text">India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. .</p>
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

export default Datascs