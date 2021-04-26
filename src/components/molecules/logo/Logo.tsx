import React from "react";
import Image from "components/atoms/image/Image";
import Link from "components/atoms/link/Link";
import "./style.css";

interface Props {
    content: {
        list: string;
        listAlt: string;
        logo: string;
        logoAlt: string;
    }
}

const Logo: React.FC<Props> = ({ content }) => (
    <div className="logo">
        <Image 
            location={content.list}
            alt={content.listAlt || 'list'}
            className="hamburger"
        />
        <Link 
            text={<Image location={content.logo} alt={content.logoAlt} width={190}/>} 
            url="/" 
            active="text-link-active"
        />
    </div>
);

export default Logo;