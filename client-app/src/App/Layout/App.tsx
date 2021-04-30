import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../Features/Activities/dashboard/ActivityDashboard';


function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setselectedActivity] = useState <Activity | undefined>(undefined)

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

  return (
    <>
      <NavBar/>

      <Container style = {{marginTop : '7em'}}>
          <ActivityDashboard 
          activities = {activities}
          selectedActivity = {selectedActivity}
          selectActivity = {handleSelectedActivity}
          cancelSelectActivity = {handleCancelSelectActivity}
          />
      </Container>

      
    </>
  );
}

export default App;
