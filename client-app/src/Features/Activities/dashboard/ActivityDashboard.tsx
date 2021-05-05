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
    cancelSelectActivity : () => void;
    editMode : boolean;
    openForm : (id : String) => void;
    closeForm : () =>void ;
    createOrEdit : (activity: Activity) => void;
    deleteActivity : (id: String) => void;
}

export default function ActivityDashboard(
    {activities, selectActivity, selectedActivity, cancelSelectActivity, editMode,openForm, closeForm, createOrEdit, deleteActivity} : Props) {
    return (
        <Grid>

            <Grid.Column width = '10'>
                <ActivityList activities = {activities} selectActivity = {selectActivity} deleteActivity = {deleteActivity}/>
            </Grid.Column>

            <Grid.Column width = '6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity = {selectedActivity} 
                cancelSelectActivity = {cancelSelectActivity}
                openForm = {openForm}/> }
                { editMode && 
                <ActivityForm activity = {selectedActivity} closeForm = {closeForm} createOrEdit = {createOrEdit}/> }
            </Grid.Column>
            
        </Grid>
    )
}

