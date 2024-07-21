import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/Home/HomePage';
import FindAPet from './Pages/FindAPet/FindAPet';
import AboutUs from './Pages/AboutUs/AboutUs';
import MyAccount from './Pages/MyAccount/MyAccount';
import FAQs from './Pages/FAQ/FAQs';
import { Login } from './components/Login';
import { Register } from './components/Register';
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
import { NotAnAdmin } from './Pages/Unauthenticated/NotAnAdmin';
const App: React.FC = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <Flex
      direction={'column'}
      minHeight="100vh"
      style={{
        cursor: 'url(mouse.png), auto',
      }}
    >
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/FindAPet" element={<FindAPet />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/MyAccount" element={<MyAccount />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/RequestPending" element={<RequestPending />}></Route>
          <Route path="/RequestApproved" element={<RequestApproved />}></Route>
          <Route path="/RequestRejected" element={<RequestRejected />}></Route>
          <Route path="/PetAdoptionStep1" element={<PetAdoptionStep />}></Route>
          <Route path="/NotAnAdmin" element={<NotAnAdmin />}></Route>
          {isAuthenticated && (
            <>
              <Route path="/AddPet" element={<AddPet />}></Route>
              <Route path="/dashboard" element={<DashboardContainer />}></Route>
            </>
          )}
          <Route path="/pet/:petId" element={<PetDetail />}></Route>
          <Route path="/editPet/:id" element={<EditPet />}></Route>
        </Routes>
      </div>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default App;
