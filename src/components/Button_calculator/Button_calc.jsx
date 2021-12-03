import './Button_calc.css'

function Button(props) {
  return (
    <button onClick={props.func}>
      {props.value}
    </button>
  );
}

export default Button;