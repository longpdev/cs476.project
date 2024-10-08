import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/Home/HomePage';
import FindAPet from './Pages/FindAPet/FindAPet';
import AboutUs from './Pages/AboutUs/AboutUs';
import MyAccount from './Pages/MyAccount/MyAccount';
import MyAdoptions from './Pages/MyAdoptions/MyAdoptions';
import FAQs from './Pages/FAQ/FAQs';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { Routes, Route } from 'react-router-dom';
import { Flex, Spacer } from '@chakra-ui/react';
import PetDetail from './Pages/FindAPet/PetDetail';
import { PetAdoptionStep } from './Pages/Adoption/PetAdoptionStep1';
import { RequestPending } from './Pages/Adoption/RequestPending';
import { RequestApproved } from './Pages/Adoption/RequestApproved';
import { RequestRejected } from './Pages/Adoption/RequestRejected';
import AddPet from './Pages/FindAPet/AddPet';
import { useAppContext } from './contexts/AppContext';
import DashboardContainer from './Pages/adminDashboard/DashboardContainer';
import { EditPet } from './Pages/FindAPet/EditPet';
import './App.css';
import { ApplicationDetail } from './Pages/adminDashboard/applications/ApplicationDetails';
import {
  NotAnAdmin,
  NotAnUser,
  NotAuthenticated,
} from './templates/UnauthorizedPageTemplates';
const App: React.FC = () => {
  const { isAdmin } = useAppContext();

  return (
    <Flex
      direction={'column'}
      minHeight='100vh'
      style={{
        cursor: 'url(mouse.png), auto',
      }}
    >
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/FindAPet' element={<FindAPet />}></Route>
          <Route path='/AboutUs' element={<AboutUs />}></Route>
          <Route path='/FAQs' element={<FAQs />}></Route>
          <Route path='/MyAccount' element={<MyAccount />}></Route>
          <Route path='/MyAdoptions' element={<MyAdoptions />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/RequestPending' element={<RequestPending />}></Route>
          <Route path='/RequestApproved' element={<RequestApproved />}></Route>
          <Route path='/RequestRejected' element={<RequestRejected />}></Route>
          <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>

          <Route
            path='/PetAdoptionStep1/:id'
            element={<PetAdoptionStep />}
          ></Route>
          <Route path='/notAnAdmin' element={<NotAnAdmin />}></Route>
          <Route path='/notAUser' element={<NotAnUser />}></Route>
          <Route
            path='/notAuthenticated'
            element={<NotAuthenticated />}
          ></Route>
          {isAdmin && (
            <>
              <Route path='/AddPet' element={<AddPet />}></Route>
              <Route path='/dashboard' element={<DashboardContainer />}></Route>
              <Route path='/editPet/:id' element={<EditPet />}></Route>
            </>
          )}
          <Route path='/pet/:petId' element={<PetDetail />}></Route>
          <Route
            path='/applications/application-details/:id'
            element={<ApplicationDetail />}
          ></Route>
        </Routes>
      </div>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default App;
