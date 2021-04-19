import React from 'react'
import { Switch, Case, Default } from 'react-if';

export default function Switchcase() {

    const myNumber = 0.1;

    return (
        <div>
        <Switch>
      <Case condition={myNumber === 9}>nilai sama dengan 9</Case>
      <Case condition={myNumber > 1}>nilai besar dari 1</Case>
      <Case condition={myNumber <= 1}>nilai kecil dari sama dengan 1</Case>
      <Default>This will be displayed if no Case have matching condition</Default>
      {console.log(myNumber)}
    </Switch>
        </div>
    )
}
