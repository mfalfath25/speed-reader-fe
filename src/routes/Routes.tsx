import { Navigate, useRoutes } from 'react-router-dom'
import { Error404, Auth, Guide, Base, History, Home, Settings } from '../components/pages'
import { ProfileMenu, TrainingMenu } from '../components/organisms'
import {
  EditProfile,
  FormBlind,
  FormComprehension,
  FormCustom,
  FormLogin,
  FormNormal,
  FormRegister,
  ModeBlind,
  ModeCustom,
  ModeNormal,
  MyProgress,
  Results,
} from '../components/molecules'
import { Private, Public } from './index'

export const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Private />,
      children: [
        {
          element: <Base />,
          children: [
            {
              path: '/',
              element: <Navigate to="/home" />,
              index: true,
            },
            {
              path: '/home',
              element: <Home />,
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
      ],
    },
    {
      element: <Public />,
      children: [
        {
          element: <Base />,
          children: [
            {
              path: '/auth',
              element: <Auth />,
            },
            {
              path: '/login',
              element: <FormLogin />,
            },
            {
              path: '/register',
              element: <FormRegister />,
            },
            {
              element: <Private />,
              children: [
                {
                  path: '/',
                  element: <Navigate to="/home" />,
                },
                {
                  path: '/home',
                  element: <Home />,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      path: '*',
      element: <Error404 />,
    },
  ])

  return routes
}
