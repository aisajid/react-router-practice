import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter} from "react-router";
import './index.css'
import Home from './assets/Components/Home/Home';
import Meals from './assets/Components/Meals/Meals';
import ShowMeals from './assets/Components/ShowMeal/ShowMeals';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      {
        path:'/meals',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        Component:Meals
      },{
        path: 'meal/:idMeal',
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        Component: ShowMeals
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router} />
  </StrictMode>,
)
