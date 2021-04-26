import React from 'react';
import Text from "components/atoms/text/Text";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    name: string;
    variant?: string;
    type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ name, type, variant }) => (
    <button className={`btn btn-${variant}`} type={type}>
        <Text content={name}/>
    </button>
)

Button.defaultProps = {
    variant: "primary"
};

export default Button;