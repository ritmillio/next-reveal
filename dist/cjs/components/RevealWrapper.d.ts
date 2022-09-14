import React from 'react';
declare type RevealWrapperType = {
    children: React.ReactNode;
    className?: any;
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    easing?: string;
    opacity?: number;
    rotate?: {
        x: number;
        y: number;
        z: number;
    };
    scale?: number;
    cleanup?: boolean;
    desktop?: boolean;
    mobile?: boolean;
    reset?: boolean;
    useDelay?: string;
    viewFactor?: number;
    viewOffset?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};
declare const RevealWrapper: React.FC<RevealWrapperType>;
export default RevealWrapper;
