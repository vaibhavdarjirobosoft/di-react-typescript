import React from 'react';
import Text from "components/atoms/text/Text";
import "./style.css";

interface Props {
    url: string;
    text: string | React.ReactNode;
    active?: string;
    className?:string;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
    rest?: object;
}

const Link: React.FC<Props> = ({url, text, active, className, onClick, ...rest}) => (
    <a href={url} className={`link ${className}`} onClick={onClick} {...rest}>
        <Text content={text} type={active}/>
    </a>
);

Link.defaultProps = {
    className: '',
    onClick: () => {}
}

export default Link;