import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeUserId: 0}

  reviewsList = this.props

  onLeftArrowClick = () => {
    const {activeUserId} = this.state
    if (activeUserId > 0) {
      this.setState(prevState => ({activeUserId: prevState.activeUserId - 1}))
    } else {
      this.setState({activeUserId: 0})
    }
  }

  onRightArrowClick = () => {
    const {activeUserId} = this.state
    const {reviewsList} = this.props
    if (activeUserId < reviewsList.length - 1) {
      this.setState(prevState => ({activeUserId: prevState.activeUserId + 1}))
    } else {
      this.setState({activeUserId: reviewsList.length - 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeUserId} = this.state
    const userDetails = reviewsList[activeUserId]
    const {imgUrl, username, companyName, description} = userDetails
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} className="image" alt={username} />
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onLeftArrowClick}
              data-testid="leftArrow"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
              />
            </button>
            <p className="user-name">{username}</p>
            <button
              className="button"
              type="button"
              onClick={this.onRightArrowClick}
              data-testid="rightArrow"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                className="arrow"
              />
            </button>
          </div>
          <div className="des-container">
            <p className="des">{companyName}</p>
            <p className="des">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
