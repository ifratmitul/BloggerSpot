import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Activity } from '../../../../App/Models/activity'
interface Props {
    activity : Activity;
    cancelSelectActivity : () => void;
    openForm : (id : string) => void;

}
export default function ActivityDetails({activity, cancelSelectActivity, openForm} : Props) {
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
              <Button basic  color='grey' content ='Cancel' onClick={cancelSelectActivity} />
          </Button.Group>
      </Card.Content>
  </Card>
    )
}
