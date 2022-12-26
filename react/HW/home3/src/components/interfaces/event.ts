import React from 'react';

export interface CustomInputEvent {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> }
}

export interface CustomButtonEvent {
    preventDefault: () => void;
}

