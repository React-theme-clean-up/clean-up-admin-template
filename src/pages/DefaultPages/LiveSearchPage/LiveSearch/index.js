import React from 'react'
import './style.css'
import { Checkbox } from 'antd'

class LiveSearch extends React.Component {
  state = {
    show: false,
    searchText: '',
  }

  showLiveSearch = () => {
    this.searchInput.focus()
    this.setState({
      show: true,
    })
  }

  hideLiveSearch = () => {
    this.searchInput.blur()
    this.setState({
      show: false,
      searchText: '',
    })
  }

  handleKeyDown = event => {
    let key = event.keyCode.toString()
    let match = /^[a-z0-9]+$/i
    let isWord = match.test(String.fromCharCode(key))

    if (!document.querySelector(':focus') && isWord) {
      this.showLiveSearch()
    }

    if (key === '27') {
      this.hideLiveSearch()
    }
  }

  changeSearchText = e => {
    this.setState({
      searchText: e.target.value,
    })
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  render() {
    let { show, searchText } = this.state

    return (
      <div className={show === true ? 'livesearch livesearch--show' : 'livesearch'} id="livesearch">
        <div className="livesearch__close" onClick={this.hideLiveSearch}>
          <i className="icmn-cross" />
        </div>
        <div className="container-fluid">
          <div className="livesearch__wrapper">
            <div className="livesearch__logo">
              <img className="livesearch__logo-img" src="resources/images/logo.png" />
            </div>
            <div className="livesearch__search">
              <input
                type="search"
                className="livesearch__input"
                value={searchText}
                onChange={this.changeSearchText}
                id="livesearchInput"
                placeholder="Search..."
                ref={ele => (this.searchInput = ele)}
              />
            </div>
            <ul className="livesearch__options">
              <li className="livesearch__option livesearch__option--checkbox">
                <Checkbox>Search within page</Checkbox>
              </li>
              <li className="livesearch__option">Press enter to search</li>
            </ul>
            <div className="livesearch__suggestion">
              <span className="livesearch__suggestion-text">
                Suggestion:
                <span className="livesearch__suggestion-input-text ml-1">Some text</span>
              </span>
            </div>
            <div className="livesearch__results">
              <div className="livesearch__results-title">
                <span className="livesearch__results-title-text">Pages Search Results</span>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="livesearch__result-content">
                    <div
                      className="livesearch__result-thumb"
                      style={{ backgroundImage: 'url(resources/images/photos/7.jpeg)' }}
                    >
                      #1
                    </div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                  <div className="livesearch__result-content">
                    <div
                      className="livesearch__result-thumb"
                      style={{ backgroundImage: 'url(resources/images/photos/9.jpeg)' }}
                    >
                      KF
                    </div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                  <div className="livesearch__result-content">
                    <div
                      className="livesearch__result-thumb"
                      style={{ backgroundImage: 'url(resources/images/photos/8.jpeg)' }}
                    >
                      GF
                    </div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="livesearch__result-content">
                    <div className="livesearch__result-thumb">01</div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                  <div className="livesearch__result-content">
                    <div className="livesearch__result-thumb">02</div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                  <div className="livesearch__result-content">
                    <div className="livesearch__result-thumb">03</div>
                    <div className="livesearch__result">
                      <div className="livesearch__result-text">
                        Text from input field must be here
                      </div>
                      <div className="livesearch__result-source">In some partition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LiveSearch
