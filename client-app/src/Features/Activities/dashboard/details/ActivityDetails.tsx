import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import LoadingComponent from '../../../../App/Layout/LoadingComponent';
import { useStore } from '../../../../App/stores/store'

export default function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity : activity, openForm, cancelSelectedActivity} = activityStore
  if(!activity) return <LoadingComponent/>;
    return (
    <Card fluid> 
      <Image src= {`/assets/categoryImages/${activity.category}.jpg`}  />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button.Group widths= '2'>
              <Button basic onClick = {()=> openForm(activity.id)} color='blue' content ='Edit' />
              <Button basic  color='grey' content ='Cancel' onClick={cancelSelectedActivity} />
          </Button.Group>
      </Card.Content>
  </Card>
    )
}
