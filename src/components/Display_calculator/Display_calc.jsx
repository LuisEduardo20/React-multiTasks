import './Display_calc.css';

function Display_calc(props) {
  return (
    <input type="text" id="display-calc" value={props.value}/>
  );
}

export default Display_calc;