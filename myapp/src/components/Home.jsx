import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";


const Home = () => {
  return (
    <>

    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloribus excepturi saepe enim officiis error nesciunt illum explicabo nihil magni.</p>
      </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorem pariatur quas fugit incidunt praesentium hic tempora necessitatibus deserunt magni quis veniam repudiandae aperiam, voluptas earum mollitia iure sed cupiditate? Enim blanditiis aut sed consequatur maxime atque accusantium dicta fugiat.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who are you?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita assumenda quasi quas ratione maiores porro in aut error, sequi quod molestiae enim maxime quia et iure voluptas qui harum commodi. Cumque consequatur fugit nobis dignissimos sint dolore itaque distinctio totam, accusantium aspernatur aut in asperiores. Tempore sequi, excepturi porro assumenda, atque illo quia nobis natus cum numquam sit vero aliquam eligendi quaerat! Nesciunt officiis alias assumenda provident dolorem aliquam, illum cum, illo consequatur labore perspiciatis, quod quam fuga accusamus et! Iste qui, deserunt libero veritatis voluptas enim quisquam harum omnis voluptates asperiores numquam in, dolorem placeat blanditiis ab eaque?</p>
      </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                  <AiFillGoogleCircle/>
                  <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                  <AiFillYoutube/>
                  <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                  <AiFillInstagram/>  
                  <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;