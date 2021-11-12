import './Button.css';

function Button(props) {


  return (
    <div>
      {(props.status === 0)
        ?
          <button
            className="button start"
            onClick={props.start}>
            Start
          </button>
        :
          ''
      }

      {(props.status === 1)
        ?
          <div>
            <button
              className="button pause"
              onClick={props.pause}>
              Pause
            </button>

            <button
              className="button reset"
              onClick={props.reset}>
              Reset
            </button>
          </div>
        :
          ''
      }

      {(props.status === 2) ?
          <div>
            <button
              className="button continue"
              onClick={props.start}>
              Continue
            </button>

            <button
              className="button reset"
              onClick={props.reset}>
              Reset
            </button>
          </div>
        :
          ''
      }
    </div>
  );
}

export default Button;