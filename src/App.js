import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ImageUpload from './ImageUpload';
import TextBlock from './TextBlock';
import PickTruck from './PickTruck';
import SelectPeople from './SelectPeople';
import DateTimeLocation from './DateTimeLocation';
import AdditionalInfo from './AdditionalInfo';

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

function App() {
    const [progress, setProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        switch(location.pathname) {
            case '/':
                setProgress(0);
                break;
            case '/text':
                setProgress(20);
                break;
            case '/pick-truck':
                setProgress(40);
                break;
            case '/select-people':
                setProgress(60);
                break;
            case '/date-time-location':
                setProgress(80);
                break;
            case '/additional-info':
                setProgress(100);
                break;
            default:
                setProgress(0);
        }
    }, [location.pathname]); // This effect will run every time the pathname changes

    return (
        <>
            <Navbar progress={progress} />
            <Routes>
                <Route path="/" element={<ImageUpload />} />
                <Route path="/text" element={<TextBlock />} />
                <Route path="/pick-truck" element={<PickTruck />} />
                <Route path="/select-people" element={<SelectPeople />} />
                <Route path="/date-time-location" element={<DateTimeLocation />} />
                <Route path="/additional-info" element={<AdditionalInfo />} />
            </Routes>
        </>
    );
}

export default AppWrapper;
