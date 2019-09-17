import React from 'react';
import { Container, Header, Button } from "semantic-ui-react";
import MenuForm from "./components/MenuForm";
import MenuList from "./components/MenuList";
import axios from "axios";    


class App extends React.Component {
  // cats is categories
  state = { menus: [], toggleAddForm: false,};

  componentDidMount() {
  // This is what sends the api request to grab the data from the database to render to the site.
    axios.get("/api/menus")
      .then(res => {
        this.setState({ menus: res.data });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addMenu = (name) => {
    axios.post("/api/menus", { name })
    .then( res => {
      const { menus, } = this.state
      this.setState({ menus: [...menus, res.data], });
    })
  }

  updateMenu = (id) => {
    axios.put("/api/menus/${id}")
    .then( res => {
      const menus = this.state.menus.map( m => {
        if (m.id === id)
          return res.data;
        return m;
      })
      this.setState({ menus, })
    })
  }

  editMenu = (menuData) => {
    const menus = this.state.menus.map( menu => {
      if (menu.id === menuData.id)
        return menuData;
      return menu;
    });
    this.setState({ menus, });
  };

  toggle = () => {
    const { toggleAddForm } = this.state;
    this.setState({ toggleAddForm: !toggleAddForm})
  }

  render() {
    const { toggleAddForm } = this.state;
    return (
      <Container style={{ padding: "30px" }}>
        <Header as="h1">Menu</Header>
        { toggleAddForm?
        <MenuForm addMenu={this.addMenu}/>
        : <></>
      }
      <Button onClick={this.toggle}>Add Menu</Button>
        <MenuList 
        menus={this.state.menus}
        updateMenu={this.updateMenu}
        edit={this.editMenu}
        toggleForm={this.state.toggleForm}
        />
        
      </Container>
    )
  };
};
export default App;
