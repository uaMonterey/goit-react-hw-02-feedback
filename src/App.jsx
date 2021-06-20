import React, { Component } from 'react';
import PropTypes from 'prop-types';

//componets
import Section from './components/Section/Section';
import Options from './components/Options/Options';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = name => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositiveFeedback = () => {
    const { good } = this.state;
    return good ? Math.round((good / this.getTotal()) * 100) + '%' : '0%';
  };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <Options onChangeStats={this.handleChangeStats} />
        </Section>
        {this.getTotal() ? (
          <Section title="Statistics">
            <Statistics
              stats={this.state}
              total={this.getTotal()}
              positiveFeedback={this.getPositiveFeedback()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
