import React from 'react';
import { Grid} from 'semantic-ui-react';
import { Activity } from '../../../App/Models/activity';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';

interface Props {
    activities : Activity [];
    selectedActivity : Activity | undefined;
    selectActivity : (id:String) => void;
    cancelSelectActivity : () => void
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity, cancelSelectActivity} : Props) {
    return (
        <Grid>

            <Grid.Column width = '10'>
                <ActivityList activities = {activities} selectActivity = {selectActivity}/>
            </Grid.Column>

            <Grid.Column width = '6'>
                {selectedActivity && 
                <ActivityDetails activity = {selectedActivity} cancelSelectActivity = {cancelSelectActivity}/> }
                <ActivityForm />
            </Grid.Column>
            
        </Grid>
    )
}

