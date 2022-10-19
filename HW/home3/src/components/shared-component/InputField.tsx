import { CustomInputEvent } from "../../components/interfaces/event";

interface IProps {
    type: string;
    onChange: (event: CustomInputEvent) => void;
    className: string;
    placeholder: string;
    defaultValue?: string;
}

const InputField = (props: IProps) => {
    const {
        type,
        onChange,
        className,
        placeholder,
        defaultValue = ''
    } = props;

    return(
        <input
            className={className}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    )
}

export default InputField;
