import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { useState } from 'react';
import NotQualified from './components/layout/NotQualified';
import Congratulations from './components/layout/Congratulations';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepChange = () => {
    setCurrentStep(2);
  }

  const handleView = () => {
    if (currentStep === 3) {
      return <NotQualified />
    } else if (currentStep === 4) {
      return <Congratulations />
    } else return <Main currentStep={currentStep} handleStepChange={handleStepChange} setCurrentStep={setCurrentStep} />
  }

  return (
    <div className="w-full">
      <Header />
       {handleView()}
      <Footer />
    </div>
  );
}

export default App;
