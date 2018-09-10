import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AboutContent from './AboutContent';
import AboutEditForm from './AboutEditForm';

class AboutControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutDetails: 'Details about myself',
      aboutVisible: true
    };
    this.handleFormToggle = this.handleFormToggle.bind(this);
    this.handleUpdateDetails = this.handleUpdateDetails.bind(this);
  }
  handleFormToggle = () => {
    this.setState((prevState) => ({ aboutVisible: !prevState.aboutVisible }));
  }
  handleUpdateDetails = (newDetails) => {
    this.setState(() => ({ aboutDetails: newDetails }));
    this.handleFormToggle();
  }
  render() {
    const cardStyle = {
      marginTop: '20px'
    }
    return(
      <div>
        <Card style={cardStyle}>
          <CardContent>
            <h2>About</h2>
            {
              this.state.aboutVisible ?
              <AboutContent
                details={this.state.aboutDetails}
                handleFormToggle={this.handleFormToggle}
              /> :
              <AboutEditForm
                details={this.state.aboutDetails}
                handleUpdateDetails={this.handleUpdateDetails}
              />
            }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default AboutControl;
