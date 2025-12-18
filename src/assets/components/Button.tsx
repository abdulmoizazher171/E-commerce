interface ButtonI {
    onclick : any
    icon : any
}


const Button = ({onclick , icon} : ButtonI) => {
  return (
    <div>
      <button onClick={onclick} className="icon-button"> <span className="icon"> {icon}</span></button>
    </div>
  )
}

export default Button
