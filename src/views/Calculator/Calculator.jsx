import './Calculator.css'

import { useState } from 'react';

import Display from '../../components/Display_calculator/Display_calc';
import Button from '../../components/Button_calculator/Button_calc';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleButton = (value) => {
    if(display === value) {
      console.log('são iguais')
    }else {
      setDisplay((prev) => prev + value);
    }

    // if(display === '0' && value !== '0'){
    //   console.log('é igual')
    // }
    // else {
    //   setDisplay(display + value);
    // }
  }

  return (
    <div className="app">
      <div className="main">
        <div className="container">

        </div>
        <div className="calculator">
          <h2>Calculadora</h2>

          <div className="display" >
            <Display value={display}/>
          </div>

          <div className="calc-buttons">
            <div id="n0">
              {/* <Button value="0" func={handleButton} /> */}
              <Button value="0" func={() => handleButton('0')} />
            </div>

            <div id="n1">
              <Button value="1" func={() => handleButton('1')} />
            </div>

            <div id="n2">
              <Button value="2" func={() => handleButton('2')} />
            </div>

            <div id="n3">
              <Button value="3" func={() => handleButton('3')} />
            </div>

            <div id="n4">
              <Button value="4" func={() => handleButton('4')} />
            </div>

            <div id="n5">
              <Button value="5" func={() => handleButton('5')} />
            </div>

            <div id="n6">
              <Button value="6" func={() => handleButton('6')} />
            </div>

            <div id="n7">
              <Button value="7" func={() => handleButton('7')} />
            </div>

            <div id="n8">
              <Button value="8" func={() => handleButton('8')} />
            </div>

            <div id="n9">
              <Button value="9" func={() => handleButton('9')} />
            </div>

            <div id="dot">
              <Button value="." func={() => handleButton('.')} />
            </div>

            <div id="plus">
              <Button value="+" func={() => handleButton(' + ')} />
            </div>

            <div id="less">
              <Button value="-" func={() => handleButton(' - ')} />
            </div>

            <div id="mult">
              <Button value="*" func={() => handleButton(' * ')} />
            </div>

            <div id="divid">
              <Button value="/" func={() => handleButton(' / ')} />
            </div>

            <div id="equal">
              <Button value="=" func={() => handleButton(' = ')} />
            </div>

            <div id="clear">
              <Button value="C" func={() => setDisplay('0')} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;