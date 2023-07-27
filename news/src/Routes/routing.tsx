import { createBrowserRouter } from 'react-router-dom';
import MainFeed from '../Pages/Main/main';
import LayoutSideBar from '../Components/Layout/layout';
import Detail from '../Pages/Detail/detail';

const router = createBrowserRouter([
  {
    path: '',
    element: <LayoutSideBar />,
    children: [
      {
        path: '',
        element: <MainFeed />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
