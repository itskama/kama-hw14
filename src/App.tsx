import { Display } from './components/Display';
import { Keypad } from './components/Keypad';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px' 
    }}>
      <Display />
      <Keypad />
    </div>
  );
}

export default App;