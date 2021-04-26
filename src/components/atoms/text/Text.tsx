import React from 'react';
import "./style.css";

interface Props {
    content: string | React.ReactNode;
    type?: string;
}

const Text: React.FC<Props> = ({ content, type }) => (
    <p className={`text text-${type}`}>
        { content }
    </p>
)

Text.defaultProps = {
    type: "btn"
};

export default Text;