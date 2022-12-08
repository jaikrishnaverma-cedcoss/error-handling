import './App.css';
import {ErrorBoundary} from 'react-error-boundary'
import Main from './component/Main';
import ErrorBoundaries from './component/ErrorBoundaries';
import { useState } from 'react';

function App() {

  let [luck,setLuck]=useState(10);
  console.log(luck)
  return (
    <div className="App">
        <ErrorBoundary FallbackComponent={ErrorBoundaries} onReset={() => setLuck(9)} resetKeys={[luck]}> 
            <Main luck={luck} setLuck={setLuck}/>
        </ErrorBoundary>
        </div>
  );
}

export default App;
