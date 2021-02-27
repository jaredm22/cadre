import React from 'react';
import PropTypes from 'prop-types';


class Day extends React.Component {


    render() {
        return(
            <div className={this.props.today ? 'blue' : 'black'}> {this.props.date}</div>
        )
 }}

export default Day
