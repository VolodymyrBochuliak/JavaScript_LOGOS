import { CustomInputEvent } from "../../components/interfaces/event";

interface IProps {
    type: string;
    // onInputChange: (event: CustomInputEvent) => void;
    onChange: (event: CustomInputEvent) => void;
    className: string;
    placeholder: string;
    defaultValue?: string;
}

const InputField = (props: IProps) => {
    const {
        type,
        // onInputChange,
        onChange,
        className,
        placeholder,
        defaultValue = ''
    } = props;

    return(
        <input
            className={className}
            // onChange={onInputChange}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    )
}

export default InputField;
