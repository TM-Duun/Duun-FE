import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppStyles } from './AppStyles'
import { Layout } from '../Routes/Layout'
import { routers } from '../Routes/Routers'
import styled from 'styled-components'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root');//앱 로드될 때 실행

const Wrapper = styled.div`
  width : 100%;
  min-height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 0;
  padding : 0;
  overflow-x : hidden;
`;

function App() {

  return (
    <Wrapper>
      <AppStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routers.map((route) => (
              <Route key={route.path} path={route.path} element={route.Element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
