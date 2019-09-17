import React from 'react'
import { Header, Button, Icon, } from "semantic-ui-react"
import MenuForm from "./MenuForm";


class Menu extends React.Component {
  state = { toggleForm: false, }

  setToggle = () => {
    const { toggleForm } = this.state
    this.setState({ toggleForm: !toggleForm })
  }

  render() {
    const { toggleForm } = this.state;
    const { menu, name, toggle, id, } = this.props; 

    return (
      <div>
        <div>
          <Header as="h2" style={{ marginLeft: "20px", }}>{name}</Header>
        </div>
        <div>
          {toggleForm ? <MenuForm /> : <div>Not Toggled</div>}
          <Button
            icon
            color="blue"
            size="small"
            onClick={() => this.setToggle()}
            style={{ marginLeft: "50px" }}
          >
            <Icon name="pencil" />
          </Button>
        </div>
      </div>
    )
  }
}

export default Menu;