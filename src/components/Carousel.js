import React from 'react'

export default function Carousel() {
    return (
        <>

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner">

    <div className='carousel-caption d-md-block' style={{zIndex:"9"}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2  bg-dark text-white" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
    </div>

    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1663852297521-b1b7183b4b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






        </>
    )
}
