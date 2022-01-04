
import Card from './components/card/Card';
import SvgBanner from './components/common/Banner';
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Card />
      <div className='banner-container'>
        <SvgBanner/>
      </div>
    </div>
  );
}

export default App;
