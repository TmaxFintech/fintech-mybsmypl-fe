import './App.css';
import Certification from './pages/certification/certification';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}

window.addEventListener('resize', () => setScreenSize());

function App() {
  return (
    <div className="web">
      <div className="phoneWrapper">
        <div className="phone">
          <Certification />
        </div>
      </div>
    </div>
  );
}

export default App;
