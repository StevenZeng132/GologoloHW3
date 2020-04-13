import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;



class HomeScreen extends Component {


    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    
                    
                    console.log(data.logos)
                    data.logos.sort(function(a, b) {
                        console.log(Date.parse(a.lastUpdate))
                        console.log(Date.parse(b.lastUpdate))
                        return Date.parse(b.lastUpdate) - Date.parse(a.lastUpdate);
                    })
                    console.log(data.logos)

                    return (
                        <div className="container row">
                            <div className="col s4">
                                <h3>Recent Work</h3>
                                {data.logos.map((logo, index) => (
                                    
                                    <div key={index} className='home_logo_link'
                                        style={{ cursor: "pointer" }}>
                                        <Link to={`/view/${logo._id}`}>{logo.text}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="col s8">
                                <div id="home_banner_container">
                                    Gologolo<br />
                                    Logo Maker
                                </div>
                                <div>
                                    <Link id="add_logo_button" to="/create">
                                        <button renderAs="button">
                                            <span> Create New Logo </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
