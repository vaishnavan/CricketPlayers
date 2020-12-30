import React, { Component } from 'react'

export class PlayDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerName: '',
            age: null,
            country: '',
            url: '',
            s_rate: '',
            playAs: '',
            desc: ''
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        const play = {
            playerName: this.state.playerName,
            age: this.state.age,
            country: this.state.country,
            url: this.state.url,
            s_rate: this.state.s_rate,
            playAs: this.state.playAs,
            desc: this.state.desc
        }
        this.props.getData(play)
    }





    render() {
        return (
            <div className="playDetail">
                <div className="container p-5">
                    <div className="container play_form">
                        <div className="card card_detail">
                            <form autoComplete="off" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label >Player Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Player Name" name="playerName" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Age</label>
                                    <input type="Number" className="form-control" placeholder="Age" name="age" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" className="form-control" placeholder="Playing Country" name="country" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Photo</label>
                                    <input type="text" className="form-control" placeholder="Player Profile" name="url" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Strike Rate</label>
                                    <input type="text" className="form-control" placeholder="Average Strike Rate" name="s_rate" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Role</label>
                                    <input type="text" className="form-control" placeholder="Playing Role" name="playAs" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Details</label>
                                    <textarea className="form-control" placeholder="More Info..." name="desc" onChange={this.handleChange} rows="10"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PlayDetails
