import React from 'react';
declare type RevealListType = {
    children: React.ReactNode;
    className?: any;
    interval: number;
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
declare const RevealList: React.FC<RevealListType>;
export default RevealList;
