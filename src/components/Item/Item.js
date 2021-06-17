import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './Item.css';





const Item = ({pictureUrl, title, price, description}) => (
  <Card>
    <Image src={pictureUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{price}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>    
  </Card>
)

export default Item