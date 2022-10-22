import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Error404, Guide, Home, Training } from './components/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Home />}>
        <Route index element={<Training />} />
      </Route>
      <Route path="/guide" element={<Home />}>
        <Route index element={<Guide />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
