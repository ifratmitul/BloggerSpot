import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/activity'

interface Props {
    activity : Activity | undefined;
    closeForm : () => void;
}

export default function ActivityForm({activity : selectedActivity, closeForm} : Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description : '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);
    
    
    function handleSubmit() {
        console.log(activity);
    }

    function handleInputChang(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
          const {name, value} = event.target;
          setActivity({...activity, [name] : value})  
        
    }
    return (
        <Segment clearing>
            <Form onSubmit = {handleSubmit} autoComplete= 'off'>
                <Form.Input placeholder = 'Title' value = {activity.title} name= 'title' onChange = {handleInputChang}/>
                <Form.TextArea placeholder = 'Description' value = {activity.description} name= 'description' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'Category' value = {activity.category} name= 'category' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'Date' value = {activity.date} name= 'date' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'City' value = {activity.city} name= 'city' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'Venue' value = {activity.venue} name= 'venue' onChange = {handleInputChang}/>
                <Button floated = 'right' positive type='submit' content = 'Submit' />
                <Button floated = 'right' type='button' content = 'Cancel' onClick = {closeForm} />

            </Form>
        </Segment>
    )
}
