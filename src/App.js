// import logo from "./logo.svg";
// import "./App.css";
// import "./css/main.css";
// import "./css/portfolio.css";


// import Header from "./component/Header";
// import MainWrapper from "./component/MainWrapper";

// function App() {
//   return (
//     <div className="">
//       <Header />
//       <MainWrapper/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Resume from './component/Resume';

import "./App.css";
import "./css/main.css";
import "./css/portfolio.css";
import Header from "./component/Header";
import MainWrapper from "./component/MainWrapper";
import Portfolio from './component/Portfolio';

const App = () => {
  return (
    <Router>
      <div>
      <div className="">
      <Header />
      {/* <MainWrapper/> */}
    </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainWrapper />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
