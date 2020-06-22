import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import SortInput from './SortInput'

export default function TopHeader (){
    return (
      <Segment raised inverted size='massive' color='blue' clearing >
        <Header as='h2' floated='left'>
          ASCII Faces Shop
        </Header>
        <Header as='h3' floated='right'>
          <SortInput/>
        </Header>
      </Segment>
    )
}
