import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Error404, Guide, Base, Training, Settings, Profile, History } from './components/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/training" element={<Base />}>
        <Route index element={<Training />} />
        <Route path="/training/normal" element={<Training />}>
          {/* <Route index element={<Training />} /> */}
          <Route path="/training/normal/simulate" element={<Training />} />
          <Route path="/training/normal/comprehension" element={<Training />} />
          <Route path="/training/normal/result" element={<Training />} />
        </Route>
        <Route path="/training/blind" element={<Training />}>
          {/* <Route index element={<Training />} /> */}
          <Route path="/training/blind/simulate" element={<Training />} />
          <Route path="/training/blind/comprehension" element={<Training />} />
          <Route path="/training/blind/result" element={<Training />} />
        </Route>
        <Route path="/training/custom" element={<Training />}>
          {/* <Route index element={<Training />} /> */}
          <Route path="/training/custom/simulate" element={<Training />} />
          <Route path="/training/custom/result" element={<Training />} />
        </Route>
        <Route path="/training/settings" element={<Settings />} />
      </Route>
      <Route path="/guide" element={<Base />}>
        <Route index element={<Guide />} />
      </Route>
      <Route path="/profile" element={<Base />}>
        <Route index element={<Profile />} />
        <Route path="/profile/edit/:userId" element={<Profile />} />
        <Route path="/profile/progress/:userId" element={<Profile />} />
      </Route>
      <Route path="/history" element={<Base />}>
        <Route index element={<History />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
