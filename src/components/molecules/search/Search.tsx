import Input from "components/atoms/input/Input";
import Button from "components/atoms/button/Button";
import "./style.css";

interface Props {
    content: {
        placeHolder: string;
        button: string;
    }
}

const Search = ({ content: { placeHolder, button } }: Props) => (
    <div className="search">
        <Input className="search-input" placeHolder={placeHolder}/>
        <Button name={button} type="submit" />
    </div>  
);
export default Search;