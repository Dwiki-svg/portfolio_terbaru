import React from 'react'

export default function IfElseBanyak() {

    const users = [
        { id: '1', firstName: 'Robin', lastName: 'Wieruch', jabatan: 'programmer', hp: '12' },
        { id: '2', firstName: 'Dennis', lastName: 'Wieruch', jabatan: 'CTO', hp: '2'},
        { id: '3', firstName: 'Debi', lastName: 'Yulanda', jabatan: 'CEO', hp: '3'},
        { id: '4', firstName: 'Dwiky', lastName: 'Firmansyah', jabatan: 'CEO', hp: '4'},
      ];

      return(
        <div>
            <h1>Hello Conditional Rendering</h1>
            <h1>Daftar software developer</h1>
            <List list={users} />
        </div>
      )
}

function List({ list }) {
    if (!list) {
      return null;
    }
   
    return (
      <ul>
        {list.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  }
   
  function Item({ item }) {
    return (
      <li>
        {item.firstName} {item.lastName} {item.jabatan} {item.hp}
      </li>
    );
  }
    

