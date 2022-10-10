import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Charts from './components/Charts/Charts';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/charts', element: <Charts></Charts>
        },
        {
          path: '/blog', element: <Blog></Blog>
        },
        {
          path: `/card/:id`, loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), element: <Quiz></Quiz>
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
