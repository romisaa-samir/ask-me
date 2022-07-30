import { useContext, useRef, useState } from "react";
import { MyContext } from "../context";
import { toast } from "react-toastify";

const Initial = () => {
  const textInput = useRef(null);
  const context = useContext(MyContext);
  const [showNext, setShowNext] = useState(false);
  // const [error, setError] = useState(false);

  const handleChange = () => {
    if (textInput.current.value.length >= 9) setShowNext(true);
    else {
      setShowNext(false);
    }
  };
  const handleSubmit = () => {
    let value = textInput.current.value;
    if (value.length >= 30) {
      //setShowError(true);
      toast.error("Too long bro!!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    } else {
      context.goTo(1);
      context.question(value);
    }
  };
  return (
    <div>
      <h1>Ask a question</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        type="text"
        name="question"
        className="form-control"
      />
      {showNext && (
        <button
          className="btn animate__animated animate__fadeIn animate__delay-1s"
          onClick={handleSubmit}
        >
          Next
        </button>
      )}
      {/* {error && <div className="error">Thr question is too long</div>} */}
    </div>
  );
};

export default Initial;
