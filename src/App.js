import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Charts from './components/Charts/Charts';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {
          path: '/', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>, errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: '/home', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>, errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: '/charts', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Charts></Charts>, errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: '/blog', element: <Blog></Blog>, errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path: `/card/:id`, loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), element: <Quiz></Quiz>, errorElement: <ErrorPage></ErrorPage>,
        }
      ]
    }
  ])




  return (
    <div className='app-page'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
