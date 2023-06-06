
function Square (props) {
    function clickHandler (){
        if (!props.squareValue) {
            if (props.player) {
                props.square.splice(props.index, 1, "X")
                props.setSquare(props.square)
                props.setPlayer(!props.player)
            } else {
                props.square.splice(props.index, 1, "O")
                props.setSquare(props.square)
                props.setPlayer(!props.player)
            }
        }
    }
    return (
        <div className="square" onClick={clickHandler}>{props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="img"/> : props.squareValue}</div>
    )
}

export default Square