import React from 'react'
import Menu from "./Menu";

const MenuList = (props) => (
  <div>
    { props.menus.map( menu => 
        <Menu 
        key={menu.id}
        {...menu}
        updateMenu={props.updateMenu}
        edit={props.edit}
        // toggle={props.toggle}
        toggleForm={props.toggleForm}
        />
      )
    }
  </div>
)

export default MenuList;