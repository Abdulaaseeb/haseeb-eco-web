import { Box, Typography } from "@mui/material";
import axios from 'axios'
// import useParams from "react-router-dom"
import { useParams  } from "react-router-dom";
import { useState } from "react";
export default function SingleCard() {
    const [obj , setObj] = useState<any>({})
    const params = useParams<any>()
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res: any) => setObj({...res.data})).catch((err: any) => console.log(err))
    return (
        <>
            <div className="container" style={{marginTop : "100px"}}>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                      <img src={obj.image} className="img-fluid" style={{height:"500px"}} alt="" />
                    </div>
                    <div className="col-md-6">
                        <Typography><span>Product</span> {obj.title}</Typography>
                        <Typography><span>Category</span>{obj.category}</Typography>
                        <Typography>Description{obj.description}</Typography>
                        <Typography>Price{obj.price}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}