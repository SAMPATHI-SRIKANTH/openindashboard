import { GoogleOAuthProvider } from '@react-oauth/google';

import {Route,BrowserRouter,Routes} from 'react-router-dom'
import SignInForm from './components/SignInForm';
import DashBoard from './components/DashBoard';




function App() {

  
  return (
    <GoogleOAuthProvider clientId="545090542786-7064jljmhnuo9meecm7u53rjcireo1n1.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<SignInForm />} />
        <Route path='/dashboard' element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
