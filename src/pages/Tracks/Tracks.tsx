import './Tracks.css'

import image from '../../assets/about.jpeg'


const Tracks = () => {
  return (
    <div className='items-wrap'>
      <h1>MUTC Specialized Tracks</h1>
      <div className="items">
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      </div>
    </div>
  )
}

export default Tracks


function TrackCard() {
  return (
    <div className='track-card'>  
      <div className="trackImg">
        <img src={image} alt="Image" />
      </div>
     <div className="track-details">
      <h2>Track Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique minima incidunt corrupti, nulla inventore iure vitae enim dolores. Iure.</p>
      <div className="apply">
        <button><a href="#">Enroll</a></button>
      </div>
    </div>

    </div>
  )
}