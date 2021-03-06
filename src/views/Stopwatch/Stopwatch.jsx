import './Stopwatch.css'

import Display from '../../components/Display/Display';
import Button from '../../components/Button/Button';
import { useState } from 'react';

function Stopwatch() {
  const [ time, setTime ] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [ interv, setInterv ] = useState();
  const [ status, setStatus ] = useState(0);

  let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const handleStart = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  const run = () => {
    if(updateM === 59) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 59) {
      updateM++;
      updateS = 0;
    }
    if(updateMs === 99) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ h: updateH, m: updateM, s: updateS, ms: updateMs });
  }

  const handlePause = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const handleRestart = () => {
    clearInterval(interv);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
    setStatus(0);
  }

  return (
    <div className="app">
      <div className="main">
        <div className="cronometro">
          <h2>Cronômetro</h2>
          <Display time={time}/>
          <div>
            <Button
              status={status} 
              start={handleStart} 
              pause={handlePause} 
              reset={handleRestart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;