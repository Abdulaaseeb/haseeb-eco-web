import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import ECommercePage from "../../pages/e-commerce page"
export default function AppRouter(){
    return(
      <Router>
        <Routes>
            <Route path="/*" element = {<ECommercePage/>}/>
        </Routes>
      </Router>
      )
    }
    