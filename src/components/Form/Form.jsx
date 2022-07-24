import { Component } from "react";
import { Wrapper,Text,Btn,Label,Input } from "./Form.styled";

export class Form extends Component{
    state = {
        name: '',
        number: '',
    }

    getInfoContact = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })

    }

    onSubmitContact = (e) => {
        e.preventDefault();

        this.props.onSubmitInfo(this.state);
    }

    render() {
        return (
            <Wrapper>
                   <Text>Phonebook</Text>
                <form onSubmit={this.onSubmitContact}>

                    <Label htmlFor='name'>Enter the name </Label>
                   
                    <Input
                        id="name"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required

                            onChange={this.getInfoContact}
                        />

                    <Label htmlFor='number'> Enter the number</Label>
                      
                    <Input
                        id="number"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required

                            onChange={this.getInfoContact}
                        />
                    
                    <Btn type='submit'>Add Contact</Btn>

                </form>
                </Wrapper>
        )
    }
}