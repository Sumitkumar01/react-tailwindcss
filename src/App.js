import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/page2',
    element:<Page2/>
  },
  {
    path:'/page3',
    element:<Page3/>
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
