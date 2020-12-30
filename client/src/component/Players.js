import React, { Component } from 'react'
import { Popup } from 'semantic-ui-react'
import './player.css'

class Players extends Component {


    render() {
        return (
            <div className="player">
                <h4>Total number of players added: {this.props.side.length}</h4><br /><br />
                {/* super star player */}
                <div className="container">
                    <h2 className="text-center">Our Cricket SuperStars</h2>
                    <div className="ind">
                        {this.props.side.map((top) => top.country === "India" ?
                            <div className="player_ind">
                                <img src={top.url} className="slide-image" width="150px" height="150px" />
                                <div class="overlay">
                                    <div class="text">{ top.playerName }</div>
                                </div>
                            </div>
                            : "")}
                    </div>
                </div>
                {/* all player */}
                <div style={{ marginTop: "10px" }} className="container">
                    <div className="player_box">
                        {this.props.display.reverse().map((e) => {
                            return (
                                <div>
                                    <Popup position="right center"
                                        content={
                                            <div className="player_content">
                                                <p>Team: <b>{e.country}</b></p>
                                                <p>Role: <b>{e.playAs}</b></p>
                                                <p>Strike Rate: <b>{e.s_rate}</b></p>
                                                <p>{e.desc}</p>
                                            </div>
                                        }
                                        trigger={
                                            <div style={{ marginTop: "10px" }} className="card">
                                                <img src={e.url} alt="no"  />
                                                <div class="card-body">
                                                    <h5 class="card-title text-center">{e.playerName}</h5>
                                                    <p className="text-center"><b>Age:</b> {e.age}</p>
                                                    <h3>{e.country}</h3>
                                                </div>
                                            </div>
                                        } />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

export default Players
