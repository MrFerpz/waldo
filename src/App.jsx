import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage"
import GamePage from './pages/GamePage'
import LeaderboardPage from './pages/LeaderboardPage'
import "./assets/app.css"
import { Provider } from "./components/ui/provider"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/game" element={<GamePage/>}/>
          <Route path="/leaderboard" element={<LeaderboardPage/>}/>
          <Route path="/leaderboard/:name/:time" element={<LeaderboardPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
