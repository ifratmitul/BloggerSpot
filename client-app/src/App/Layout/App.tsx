import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../Features/Activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setselectedActivity] = useState <Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      
        setActivities(res.data);
    })

  },[])

  function handleSelectedActivity(id: String) {
    setselectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity(){
    setselectedActivity(undefined);
  }

  function handleFormOpen(id?:String) {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
    
  }


  function handleCreateOrEditActivity(activity:Activity) {
    activity.id ? 
    setActivities([...activities.filter( x => x.id !== activity.id), activity]) : setActivities ( [...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setselectedActivity(activity);

  }

  function handleDeleteActivity(id:String) {
    setActivities([...activities.filter(x => x.id !== id)])
  }

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
          />
      </Container>

      
    </>
  );
}

export default App;
