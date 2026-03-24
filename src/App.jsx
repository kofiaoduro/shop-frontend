import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import DefaultLayout from './components/defaultlayout'
import { Routes, Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/Signuppage'
import WelcomePage from './pages/Welcomepage'
const App = ()=> {
  const [Userfirstname, setUserFirstName] = useState(null);

  return (
    <div className='App'>
      <Routes>
        <Route element={<DefaultLayout />}>
          
          {/* Home */}
          <Route 
            path='/' 
            element={
              Userfirstname 
                ? <WelcomePage Userfirstname={Userfirstname}/> 
                : <Loginpage setUserFirstName={setUserFirstName}/>
            } 
          />

          {/* Login */}
          <Route 
            path='/login' 
            element={<Loginpage setUserFirstName={setUserFirstName}/>} 
          />

          {/* Signup */}
          <Route path='/signup' element={<SignupPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App
