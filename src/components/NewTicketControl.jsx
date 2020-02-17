import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisableOnPage: true});
  //   console.log('formVisableOnPage is currently set to:' + this.state.formVisableOnPage);
  // }

  render(){
    return (
      <ConfirmationQuestions />
    );
  }
}

export default NewTicketControl;
