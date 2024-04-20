import Button from "../Button/Button";
import Input from "../Input/Input";
import './Form.css'


const Form = () => {
    return(
        <form>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="text" placeholder="Email Adress"/>
            <Input type="password" placeholder="Password"/>
            <Button buttonName="CLAIN YOUR FREE TRIAL"/>
        </form>
    )
}

export default Form;