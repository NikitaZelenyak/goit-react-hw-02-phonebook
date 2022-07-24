import { Wrapper,Title,Label,Input,Item,Button,Text } from "./Contacts.styled"

export const Contacts = ({ contacts, onDelete, onFilter,Btn }) => {
    
    return (
        <Wrapper>
            <Title>Contacts</Title>
             <Label htmlFor='find'>Find contacts by name</Label>
              <Input id="find" type="text"  onChange={onFilter} />
            <ul>
                {contacts.map(contact => (
                    <Item key={contact.id}>
                        <Text>{contact.name}: {contact.number}</Text>
                        <Button type="button" onClick={()=>onDelete(contact.id)}>Delete</Button>
                    </Item>
                   
                ))}

            </ul>
    </Wrapper>
)

   
}