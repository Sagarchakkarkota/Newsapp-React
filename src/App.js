import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
let apikey=process.env.REACT_APP_NEWS_API;
let pagesize=6;
return (<> 
  <Router> 
   <Navbar/>
 
   <Routes>
      <Route exact path="/" element={<News country="in" pageSize={pagesize} key={"general"} category="general" apikey={apikey} />}  />
      <Route exact path="/health" element={<News country="in" pageSize={pagesize} key={"health"} category="health" apikey={apikey} />}  />
      <Route exact path="/business" element={<News country="in" pageSize={pagesize} key={"business"} category="business" apikey={apikey} />}  />
      <Route exact path="/entertainment" element={<News country="in" pageSize={pagesize} key={"entertainment"} category="entertainment" apikey={apikey} />}  />
      <Route exact path="/sports" element={<News country="in" pageSize={pagesize} key={"sports"} category="sports" apikey={apikey} />}  />
      <Route exact path="/science" element={<News country="in" pageSize={pagesize} key={"science"} category="science" apikey={apikey} />}  />
      <Route exact path="/technology" element={<News country="in" pageSize={pagesize} key={"technology"} category="technology" apikey={apikey} />}  />
     
      
   </Routes>

 </Router>
</>
  );
}

export default App;
