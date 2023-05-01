import logo from './logo.svg';
import './App.css';
import { ControlledForm, OptimizedControlledForm, UncontrolledFormFromEvent, UncontrolledFormWithUseRef } from './form';
import ContactForm from './contactForm';

function App() {
  
  return (
    <div>
      <h4>contact form</h4>
      <ContactForm />
      {/* <hr />
      <h4>uncontroled form with Form From Event</h4>
      <UncontrolledFormFromEvent />
      <hr />
      <h4>uncontroled form with react useRef() hook</h4>
      <UncontrolledFormWithUseRef />
      <hr />
      <h4>controlled form</h4>
      <ControlledForm />
      <hr />
      <h4>/Optimized controlled form</h4>
      <OptimizedControlledForm /> */}
    </div>
  );
}

export default App;
