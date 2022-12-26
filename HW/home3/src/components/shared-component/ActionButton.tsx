import { useState } from 'react';
import { CustomButtonEvent } from '../interfaces/event';

interface IProps {
    action: (event: CustomButtonEvent) => void;
    buttonText: string;
    className: string;
    type?: string;
}

const ActionButton = (props: IProps) => {
    const {
        action,
        className,
        buttonText,
        type
    } = props;

    const [isClicked, setClicked] = useState<boolean>(false);

    const handleAction = (event: CustomButtonEvent) => {
        setClicked(!isClicked)
        action(event);
    }
    
    return(
        <button
            onClick={handleAction}
            className={className}>
            {buttonText}
        </button>
    )
}

export default ActionButton;
