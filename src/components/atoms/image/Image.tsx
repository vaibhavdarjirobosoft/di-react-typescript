import React from 'react';
import "./style.css";

interface Props {
    location: string;
    alt?: string;
    width?: number;
    height?: number;
    className?:string;
}

const Image:React.FC<Props> = ({ location, alt, width=24, height, className }) => (
    <img
        alt={alt}
        height={height}
        width={width}
        className={className}
        src={location}
    />
);

export default Image;