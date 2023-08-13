const Button = ({color, msg, width}) => {
    
    let real_width = ""
    if (width === "") {
        real_width = "300px"
    } else {
        real_width = width
    }

    return (
        <button style={{
            color: color, 
            width: real_width,
            height: "50px"
        }}>{msg}</button>
    )
}

export default Button;