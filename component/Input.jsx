const Input = ({ name, onChange, placehoder, value }) => {

    return (<input name={name} onChange={onChange} placeholder={placehoder} value={value} autoComplete="off" />);
}

export default Input;
