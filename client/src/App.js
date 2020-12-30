import React, { Component } from 'react'
import PlayDetails from './component/PlayDetails'
import Players from './component/Players'
import SearchBar from './component/SearchBar'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      playerData: [],
      search: ''
    }
  }



  create = play => {
    axios.post('http://localhost:5000', play)
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount() {
    this.getall();
  }


  getall() {
    axios.get('http://localhost:5000/allplay')
      .then(res => {
        this.setState({ playerData: res.data })
        console.log(this.state.playerData)
      })
  }

  handleInput = e => {
    console.log(e.target.value)
    this.setState({ search: e.target.value })
  } 




  render() {
    let filtered = this.state.playerData.filter(searchdata => {
      return searchdata.playerName.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <div>
        <Router>
          <Route exact path="/">
            <div className="link">
              <span title="To create new player">Create New player </span>
              <Link to="/playForm"><Icon className="add" name='add' /></Link>
            </div>
            <SearchBar handleInput={this.handleInput} /><br /><br />
            
            <Players display={filtered} side={this.state.playerData} />
          </Route>
          <Route exact path="/playForm">
            <PlayDetails getData={this.create} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App

