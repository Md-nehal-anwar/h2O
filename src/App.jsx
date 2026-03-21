import React from 'react';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import SharedLayout from './Pages/SharedLayout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Causes from './Pages/Causes';
import Footer from './Components/Footer/Footer';
import VolunteerPage from './Pages/Volunteerpage'
import Impact from './Pages/OurImpact';
import Vision from './Pages/Vision';
import Work from './Pages/OurWork/Ourwork';
import Health from './Pages/OurWorks/Health';
import Covid from './Pages/OurWorks/Covid';
import Education from './Pages/OurWorks/Education';
import Livelihood from './Pages/OurWorks/Livelihood';
import Relief from './Pages/OurWorks/Relief';
import Individual from './Pages/JoinUsPages/Individual';
import Cooperration from './Pages/JoinUsPages/Cooperration';
import Campaign from './Pages/JoinUsPages/Campaign';
import BecomeAVolunteer from './Pages/Volunteerpages/Becomeavolunteer';
import OurVolunteers from './Pages/Volunteerpages/OurVolunteer';
import "./Root/button.css";
import Team from './Pages/Ourteam';
import AppState from './Helper/AppState';



export default function App(){
    return(
        <AppState>
        <BrowserRouter> 
        <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element = {<Homepage />} />
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/causes' element={<Causes />}/>
            <Route path='/volunteer' element={<VolunteerPage />}/>
            <Route path='/impact'  element = {<Impact />} />
            <Route path='/vision'  element = {<Vision />} />
            <Route path='/work'  element = {<Work />} />
            <Route path='/teams'  element = {<Team/>} />
            <Route path='/work/health'  element = {<Health />} />
            <Route path='/work/covid'  element = {<Covid />} />
            <Route path='/work/education'  element = {<Education />} />
            <Route path='/work/livelihood'  element = {<Livelihood />} />
            <Route path='/work/relief'  element = {<Relief />} />
            <Route path='/joinus/individual'  element = {<Individual />} />
            <Route path='/joinus/cooperration'  element = {<Cooperration />} />
            <Route path='/joinus/campaign'  element = {<Campaign />} />
            <Route path='/volunteer/becomeavolunteer'  element = {<BecomeAVolunteer /> } />
            <Route path='/volunteer/ourvolunteers'  element = {<OurVolunteers /> } />

            
        </Route>
        </Routes>
        <Footer />
        </BrowserRouter>
        </AppState>
    )
};