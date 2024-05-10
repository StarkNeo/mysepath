import './App.css';
import { Root } from './components/Root';
import { Home } from './views/Home';
import { Routes, Route, BrowserRouter, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';

function App() {
  const appRouter =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home />} />
        <Route path=':type' element={<Home />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
