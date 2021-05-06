import React, { useEffect, useState } from 'react';
import { Container} from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../Features/Activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setselectedActivity] = useState <Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);
  const [loading, setloading] = useState(true)
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
  agent.Activities.list().then(res => {
      console.log(res);
       let activities : Activity[] = [];
       res.forEach(item => {
         item.date = item.date.split('T')[0]; 
         activities.push(item)      
        
        })
        setActivities(res);
        setloading(false);
    })

  },[])

  function handleSelectedActivity(id: string) {
    
    setselectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity(){
    setselectedActivity(undefined);
  }

  function handleFormOpen(id?:string) {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
    
  }


  function handleCreateOrEditActivity(activity:Activity) {
    setSubmitting(true);

    if(activity.id){
      agent.Activities.update(activity).then (() =>{
        setActivities([...activities.filter( x => x.id !== activity.id), activity]);
        setselectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      } )
    }
    else{

      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setselectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })

    }

  }

  function handleDeleteActivity(id:string) {

    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)])
      setSubmitting(false);
    })

  }

  if(loading) return <LoadingComponent content = 'Loading App'/>

  return (
    <>
      <NavBar openForm ={handleFormOpen}/>

      <Container style = {{marginTop : '7em'}}>
          <ActivityDashboard 
          activities = {activities}
          selectedActivity = {selectedActivity}
          selectActivity = {handleSelectedActivity}
          cancelSelectActivity = {handleCancelSelectActivity}
          editMode = {editMode}
          openForm = {handleFormOpen}
          closeForm = {handleFormClose}
          createOrEdit = {handleCreateOrEditActivity}
          deleteActivity = {handleDeleteActivity}
          submitting = {submitting}
          />
      </Container>

      
    </>
  );
}

export default App;
