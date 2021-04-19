import React from 'react'
import Content from './Content'
import Header from './Header'

export default function IfElse() {
    const displayContent = false;
    if(displayContent){
            return <Content />
          } else {
            return <Header />
          }
        
}
