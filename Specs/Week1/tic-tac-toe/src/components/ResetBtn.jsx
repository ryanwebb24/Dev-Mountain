import "./ResetBtn.css"

function ResetBtn(props) {
    function clickHandler () {
        props.square(["", "", "", "", "", "", "", "", ""])
    }
  return (
    <button onClick={clickHandler}>Reset</button>
  )
}

export default ResetBtn