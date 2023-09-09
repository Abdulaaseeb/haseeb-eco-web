import ResponsiveAppBar from "./NavBar"
import {Routes , Route} from 'react-router-dom'
import img1 from "../image/images (1).jpeg"
import img2 from "../image/images (2).jpeg"
import img3 from "../image/images (3).jpeg"
import Cards from "./nestedPage/card"
import SingleCard from "./nestedPage/singleCard"

export default function ECommercePage(){
    return(
       <>
       <ResponsiveAppBar/>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        </div>
      </div> 
      <Routes>
        <Route path = "/" element={<Cards/>} />
        <Route path = "singleCard/:id" element={<SingleCard/>} />
      </Routes>
      </>
    )
}