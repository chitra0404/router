import React from 'react'
import {Link} from "react-router-dom"
function Fullstack() {
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
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Top Ways to Assess Soft Skills in Full Stack Developers in 2023</h5>
        <p className="card-text">When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?

This issue is prevalent across the tech industry. We stay focused on the technical and hard skills of our potential developers, but we often forget about the necessary soft skills in full-stack developer that one would need to function properly in an organization, within a team, and across departments. </p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp"/>
      <div className="card-body">
        <h5 className="card-title">Top Differences: Full Stack Developer vs Software Engineer 2023</h5>
        <p className="card-text">A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.

Understanding these jobs helps people choose what they might like to do. It’s important for companies, too. They can put the right people in the right parts of a project. Knowing the differences helps teams work better together and gets things done faster.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>
      <div className="card-body">
        <h5 className="card-title">Horizontal vs Vertical Scaling for Efficient System Designc</h5>
        <p className="card-text">A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.

Understanding these jobs helps people choose what they might like to do. It’s important for companies, too. They can put the right people in the right parts of a project. Knowing the differences helps teams work better together and gets things done faster.</p>
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

export default Fullstack