import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Text" />
      <TextForm heading="Enter Text To Analyze below" />
    </div>
  );
}

export default App;
