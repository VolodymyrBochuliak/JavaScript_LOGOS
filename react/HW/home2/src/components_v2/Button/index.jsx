
 const buttonClassName = {
    'add_btn' : 'add_btn',
    'reset_btn' : 'reset_btn',
    'censor_btn' : 'censor_btn'
}


const Button = (props) => {

    const {...otherProps} = props;


    // console.log(props)

    return (
    <button {...otherProps} /> 
    )
}
export default Button