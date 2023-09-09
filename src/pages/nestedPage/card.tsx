import { Box, Button, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import img3 from '../../image/images (3).jpeg'

export default function Cards() {
    const [RenderData, setRenderData] = useState<any>([])
    let RenderCard = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {

                setRenderData([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }
     const navigate = useNavigate()
     let clickCart = (id : any) =>{
        navigate(`/singleCard/${id}`)
     }
    return (
        <>
         <div className="carousel-item active" style={{marginBottom:"200px"}}>
            <img src={img3} className="d-block mt-5 w-100" alt="..."/>
          </div>
          {/* <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div> */}
            <div className="container" style={{marginTop:"700px"}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 offset-md-2 legset-md-4 col-12 mb-3 ">
                        <h1>Our Products</h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 offset-md-3 legset-md-4 col-12 mb-3 ">
                            <div className="empty-div"></div>
                        </div>
                    </div>
                </div>
            </div>

            {RenderCard()}{
                RenderData.map((x: any, i: any) => {
                    return (
                        <>
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 col-12">
                                        <Paper className="p-5 my-5 shadow-lg">
                                            <Box>
                                                <img src={x.image} width={'100%'} height={300} alt="" />
                                                <Typography variant="body2" className="mt-3">
                                                    <span className="text-primary ">Title</span><span>.</span><span className=" card-TiTle">{x.title}</span>
                                                </Typography>
                                                <Button variant="contained" className="my-4" onClick={()=>clickCart(x.id)}>Place Order</Button>
                                            </Box>
                                        </Paper>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })
            }


        </>
    )
}