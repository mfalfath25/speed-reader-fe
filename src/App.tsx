import './App.css'
import { useRoutes } from 'react-router-dom'
import { Error404, Guide, Base, History, Authenticate, Home, Settings } from './components/pages'
import { ProfileMenu, TrainingMenu } from './components/organisms'
import {
  EditProfile,
  FormBlind,
  FormComprehension,
  FormCustom,
  FormNormal,
  ModeBlind,
  ModeCustom,
  ModeNormal,
  MyProgress,
  Results,
} from './components/molecules'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/',
      element: <Base />,
      children: [
        {
          path: '/login',
          element: <Authenticate />,
        },
        {
          path: '/register',
          element: <Authenticate />,
        },
        {
          path: '/guide',
          element: <Guide />,
        },
        {
          path: '/history',
          element: <History />,
        },
        {
          path: '/profile',
          element: <ProfileMenu />,
        },
        {
          path: '/profile/edit/:userId',
          element: <EditProfile />,
        },
        {
          path: '/profile/progress/:userId',
          element: <MyProgress />,
        },
        {
          path: '/training',
          element: <TrainingMenu />,
        },
        {
          path: '/training/settings',
          element: <Settings />,
        },
        {
          path: '/training/normal',
          element: <FormNormal />,
        },
        {
          path: '/training/normal/simulate',
          element: <ModeNormal />,
        },
        {
          path: '/training/normal/simulate/comprehension',
          element: <FormComprehension />,
        },
        {
          path: '/training/normal/result',
          element: <Results />,
        },
        {
          path: '/training/blind',
          element: <FormBlind />,
        },
        {
          path: '/training/blind/simulate',
          element: <ModeBlind />,
        },
        {
          path: '/training/blind/simulate/comprehension',
          element: <FormComprehension />,
        },
        {
          path: '/training/blind/result',
          element: <Results />,
        },
        {
          path: '/training/custom',
          element: <FormCustom />,
        },
        {
          path: '/training/custom/simulate',
          element: <ModeCustom />,
        },
        {
          path: '/training/custom/result',
          element: <Results />,
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ])

  return <>{routes}</>
}

export default App
