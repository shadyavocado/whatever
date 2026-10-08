import React from 'react'
import Model from './Model'
import './index.css';
function Index(prop) {
  return (
    <>
  <section>
    <h1 className="text-center">{prop.title}</h1>
    <h1 className="text-center">Our items</h1>
   {/* <!-- First row of cards --> */}
    <div className="row justify-content-center">
        {/* <!-- First card --> */}
        <div className="col-lg-3 m-2">    
<div className="main d-flex border d-inline overflow-hidden">
<img className=" one d-inline " src="images/img1.webp" width="200" height="200"/>

<div className="aside m-2 ">
        <h3 className="d-inline">Blue Shirt</h3><br/>
        <p className="d-inline">Exported piece</p><br/>
        <p className="d-inline">Available before Eid</p><br/>
        <button className="btn btn-outline-primary"> Add to cart</button>
</div>
</div>
</div>
{/* <!-- second card --> */}
<div className="col-lg-3 m-2">
    <div className="main d-flex border d-inline">
    <img className="d-inline" src="images/img1.webp" width="200" height="200"/>
    
    <div className="aside m-2  ">
            <h3 className="d-inline">Blue Shirt</h3><br/>
            <p className="d-inline">Exported piece</p><br/>
            <p className="d-inline">Available before Eid</p><br/>
            <button className="btn btn-outline-primary"> Add to cart</button>
    </div>
    </div>
    </div>
    {/* <!-- Third card --> */}
    <div className="col-lg-3 m-2">
        <div className="main d-flex border d-inline">
        <img className="d-inline" src="images/img1.webp" width="200" height="200"/>
        
        <div className="aside m-2  ">
                <h3 className="d-inline">Blue Shirt</h3><br/>
                <p className="d-inline">Exported piece</p><br/>
                <p className="d-inline">Available before Eid</p><br/>
                <button className="btn btn-outline-primary"> Add to cart</button>
        </div>
        </div>
        </div>
</div>
{/* <!-- Second row of cards --> */}
<div className="row justify-content-center">
    {/* <!-- First card --> */}
    <div className="col-lg-3 m-2">    
<div className="main d-flex border d-inline overflow-hidden">
<img className=" one d-inline " src="images/img1.webp" width="200" height="200"/>

<div className="aside m-2 ">
    <h3 className="d-inline">Blue Shirt</h3><br/>
    <p className="d-inline">Exported piece</p><br/>
    <p className="d-inline">Available before Eid</p><br/>
    <button className="btn btn-outline-primary"> Add to cart</button>
</div>
</div>
</div>
{/* <!-- second card --> */}
<div className="col-lg-3 m-2">
<div className="main d-flex border d-inline">
<img className="d-inline" src="images/img1.webp" width="200" height="200"/>

<div className="aside m-2  ">
        <h3 className="d-inline">Blue Shirt</h3><br/>
        <p className="d-inline">Exported piece</p><br/>
        <p className="d-inline">Available before Eid</p><br/>
        <button className="btn btn-outline-primary"> Add to cart</button>
</div>
</div>
</div>
{/* <!-- Third card --> */}
<div className="col-lg-3 m-2">
    <div className="main d-flex border d-inline">
    <img className="d-inline" src="images/img1.webp" width="200" height="200"/>
    
    <div className="aside m-2  ">
            <h3 className="d-inline">Blue Shirt</h3><br/>
            <p className="d-inline">Exported piece</p><br/>
            <p className="d-inline">Available before Eid</p><br/>
            <button className="btn btn-outline-primary"> Add to cart</button>
    </div>
    </div>
    </div>
</div>


  
  {/* <!-- Modal --> */}
  {<Model/>}
</section>
</>
  )
}

export default Index
