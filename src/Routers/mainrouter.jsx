import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "../calculator/calculator";
import FormComp from "../lifecycle-fun-com/funform/funform";
import UpadatingPhase from "../life cycle/updated phare";
import Cardsfun from "../life cycle/upadatetask";
import AxosCard from "../life cycle/updatedphase-axos-fake";


function MainRouter() {
    return (
        <Router>
            <div  >
                <nav style={{background:"yellowgreen",padding:"15px",margin:"auto", display:"flex", justifyContent:"space-evenly" }}>
                    <Link to="/Task1">Task1</Link>
                    <Link to="/Task2">Task2</Link>
                    <Link to="/Task3">Task3</Link>
                    <Link to="/Task4">Task4</Link>
                    <Link to="/Task5">Task5</Link>
                </nav>

                {/* Define all routes here */}
                <Routes>
                    <Route path="/Task1" element={<Calculator />} />
                    <Route path="/Task2" element={<FormComp />} />
                    <Route path="/Task3" element={<UpadatingPhase />} />
                    <Route path="/Task4" element={<Cardsfun />} />
                    <Route path="/Task5" element={<AxosCard />} />
                </Routes>
            </div>
        </Router>





       
    );
}

export default MainRouter;
