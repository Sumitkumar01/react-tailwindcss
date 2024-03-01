import './App.css';
import React, { lazy,Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() =>import('./pages/home/HomePage'));
const Page2 = lazy(() =>import('./pages/page2/Page2'));
const Page3 = lazy(() =>import('./pages/page3/Page3'));


function App() {
  return (
    <div>
      <Suspense fallback={<h1 className="text-xl">loding</h1>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
