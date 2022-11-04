import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Error404, Guide, Base, Training } from './components/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/training" element={<Base />}>
        <Route index element={<Training />} />
        <Route path="/training/custom" element={<Training />} />
      </Route>
      <Route path="/guide" element={<Base />}>
        <Route index element={<Guide />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
