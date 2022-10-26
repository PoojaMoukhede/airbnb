import React from 'react'
import "./Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export const Card = () => {
  return (
    <>
    <h1 className='week'>New this&nbsp;week</h1>
<div className="row">
    <div className="col-md-4">
        <img className="rounded" src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720" width="100%" height="100%"/>
        <div className="overlay">
          <p className='collection'>Collection</p>
          <h2 className='world'>Most populer around<br/> the world</h2>
        </div>
        <button className="bottom-left">Show all</button>
    </div>
    <div className="col-md-4">
            <img className="rounded" src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720" width="100%" height="100%"/>
            <div className="overlay">
          <p className='collection'>Collection</p>
          <h2 className='world'>Great for team<br/>building</h2>
        </div>
        <button className="bottom-left">Show all</button>
    </div>
       
    <div className="col-md-4">
        <img className="rounded" src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720" width="100%" height="100%"/>
        <div className="overlay">
          <p className='collection'>Collection</p>
          <h2 className='world'>Fun for the family</h2>
        </div>
        <button className="bottom-left">Show all</button>
    </div>
    </div>
    <div className='nav'>
       <div className='fixed'>
          <button className='fbtn'>Dates</button>
          <button className='fbtn'>Group Size</button>
          <button className='fbtn'>More filters</button>
       </div>
          <div className="movable">
            <button className='fbtn'>Great for groups</button>
            <button className='fbtn'>Family-friendly</button>
            <button className='fbtn'>Animals</button>
            <button className='fbtn'>Arts & writing</button>
            <button className='fbtn'>Banking</button>
            <button className='fbtn'>Cooking</button>
            <button className='fbtn'>Dance</button>
            <button className='fbtn'>Drinks</button>
            <button className='fbtn'>Entertainment</button>
            <button className='fbtn'>Fitness</button>
            <button className='fbtn'>History & culture</button>
            <button className='fbtn'>Magic</button>
            <button className='fbtn'>Music</button>
            <button className='fbtn'>Social impact</button>
            <button className='fbtn'>Wellness</button>
            <button className='fbtn'>Olympians & Paralympians</button>
            <button className='fbtn'>Designd for accessibility</button>
          </div>
      </div>

    </>
  )
}




