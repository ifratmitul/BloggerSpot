import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../Features/Activities/dashboard/ActivityDashboard';


function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      
        setActivities(res.data);
    })

  },[])



  return (
    <>
      <NavBar/>

      <Container style = {{marginTop : '7em'}}>
          <ActivityDashboard activities = {activities}/>
      </Container>

      
    </>
  );
}

export default App;
