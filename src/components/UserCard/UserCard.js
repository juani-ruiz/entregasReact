import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './UserCard.css';

const UserCard = ({img, title, product, description}) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{product}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>    
  </Card>
)

export default UserCard