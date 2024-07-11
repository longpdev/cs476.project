import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import FindAPet from './Pages/FindAPet';
import PetAdvice from './Pages/PetAdvice';
import MyAdoptions from './Pages/MyAdoption';
import AboutUs from './Pages/AboutUs';
import MyAccount from './Pages/MyAccount';
import FAQs from './Pages/FAQs';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Routes, Route } from 'react-router-dom';
import { Flex, Spacer } from '@chakra-ui/react';
import PetDetail from './Pages/PetDetail';
import { PetAdoptionStep } from './Pages/PetAdoptionStep1';
import { RequestPending } from './Pages/RequestPending';
import { RequestApproved } from './Pages/RequestApproved';
import { RequestRejected } from './Pages/RequestRejected';
import AddPet from './Pages/AddPet';
import { useAppContext } from './contexts/AppContext';
import { EditPet } from './Pages/EditPet';
import './App.css';
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
          <Route path="/PetAdvice" element={<PetAdvice />}></Route>
          <Route path="/MyAdoptions" element={<MyAdoptions />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/MyAccount" element={<MyAccount />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/RequestPending" element={<RequestPending />}></Route>
          <Route path="/RequestApproved" element={<RequestApproved />}></Route>
          <Route path="/RequestRejected" element={<RequestRejected />}></Route>
          <Route path="/PetAdoptionStep1" element={<PetAdoptionStep />}></Route>
          {isAuthenticated && (
            <Route path="/AddPet" element={<AddPet />}></Route>
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
