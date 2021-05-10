import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store'
import { observer } from 'mobx-react-lite';



export default observer ( function  ActivityForm() {

    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description : '',
        category: '',        
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    
    
    function handleSubmit() {
        //console.log(activity);
        activity.id ? updateActivity(activity) : createActivity(activity);
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
                <Form.Input placeholder = 'Date' type='date'  value = {activity.date} name= 'date' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'City' value = {activity.city} name= 'city' onChange = {handleInputChang}/>
                <Form.Input placeholder = 'Venue' value = {activity.venue} name= 'venue' onChange = {handleInputChang}/>
                <Button loading = {loading} floated = 'right' positive type='submit' content = 'Submit' />
                <Button floated = 'right' type='button' content = 'Cancel' onClick = {closeForm} />

            </Form>
        </Segment>
    )
})
