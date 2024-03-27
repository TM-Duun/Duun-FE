import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './AppStyles'
import { Layout } from '../Routes/Layout'
import { routers } from '../Routes/Routers'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routers.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
