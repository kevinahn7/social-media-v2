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
    this.handleShowEdit = this.handleShowEdit.bind(this);
  }
  handleShowEdit = () => {
    this.setState(() => ({ aboutVisible: false }));
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
                handleShowEdit={this.handleShowEdit}
              /> :
              <AboutEditForm />
            }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default AboutControl;
