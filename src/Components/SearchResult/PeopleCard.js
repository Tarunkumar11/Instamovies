import React, { Component } from 'react';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div className="container">
        <div className="movie-card">
                <div className="img-box">
                    <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" alt="cardImage" />
                </div>
                <div className="content">
                    <div className="content-box">
                        <h3>{name}</h3>
                    </div>

                    <ul className="sci">
                        <li style={{"--i":1}}><a href="#"><i className="far fa-star">7.9</i></a></li>
                        <li style={{"--i":3}}>21/07/21</li>
                        <li style={{"--i":2}}><a href="#"><i className="far fa-heart">901</i></a></li>
                    </ul>

                    <div className="watch-list">
                        <input type="submit" value="WatchList+" />
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default PeopleCard;