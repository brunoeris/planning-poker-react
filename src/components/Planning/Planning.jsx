import React, { Component } from 'react';
// import logo from '../../assets/images/logo.svg';

class Planning extends Component {
  constructor(props) {
    super(props)
    this.state = {br: 0}

    this.planningShow = this.planningShow.bind(this)
  }

  planningShow(number) {
    this.setState((prevState) => ({
      br: prevState.br = number
    }));
  }

  render() {
    return (
      <section className='Planning-section'>
          <div className='screen'>
            <span>{this.state.br}</span>
          </div>

          <div className='buttons'>
            <button onClick={() => this.planningShow(0)}>0</button>
            <button onClick={() => this.planningShow(1)}>1</button>
            <button onClick={() => this.planningShow(2)}>2</button>
            <button onClick={() => this.planningShow(3)}>3</button>
            <button onClick={() => this.planningShow(5)}>5</button>
            <button onClick={() => this.planningShow(8)}>8</button>
            <button onClick={() => this.planningShow(13)}>13</button>
            <button onClick={() => this.planningShow('?')}>?</button>
          </div>
        </section>
    )
  }
}

export default Planning