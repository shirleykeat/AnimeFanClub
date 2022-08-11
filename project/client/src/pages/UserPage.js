import React from 'react';
import MenuBar from '../components/MenuBar';
import { getUserProfile, getUserWatched, getUserWatching, getUserRated } from '../fetcher';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import AnimeList from '../components/AnimeList';

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUserId: window.location.search ? window.location.search.substring(1).split('=')[1] : 1,
            userprofileDetails: [],
            userwatchedDetails: null,
            userwatchingDetails: null,
            userratedDetails: null
        }
    }

    componentDidMount() {

        getUserProfile(this.state.selectedUserId).then(res => {
            this.setState({ userprofileDetails: res.results[0] })
        })

        getUserWatched(this.state.selectedUserId).then(res => {
            this.setState({ userwatchedDetails: res.results })
        })

        getUserWatching(this.state.selectedUserId).then(res => {
            this.setState({ userwatchingDetails: res.results })
        })

        getUserRated(this.state.selectedUserId).then(res => {
            this.setState({ userratedDetails: res.results })
        })

    }


    render() {

        return (
            <div>
                <div>
                    <MenuBar />
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>Profile</h3>
                    <p>ID: {this.state.userprofileDetails.USER_ID}</p>
                    <p>Name: {this.state.userprofileDetails.Name}</p>
                    <p>Birthday: {this.state.userprofileDetails.Birthday}</p>
                    <p>Email: {this.state.userprofileDetails.Email_address}</p>
                </div>

                {this.state.userwatchedDetails && this.state.userwatchedDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You have watched</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userwatchedDetails} />
                        </div>
                    </div> :
                    <></>
                }


                {this.state.userwatchingDetails && this.state.userwatchingDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You are watching</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userwatchingDetails} />
                        </div>
                    </div> :
                    <></>
                }

                {this.state.userratedDetails && this.state.userratedDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You have rated</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userratedDetails} />
                        </div>
                    </div> :
                    <></>
                }

            </div>
        )
    }

}

export default UserPage

