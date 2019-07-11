import React, { Component } from 'react';
import './App.css';
import { HeaderWrapper, ContentWrapper, NavBar, Title, Text, FooterWrapper, FooterItem, SlideFooterButton } from "./styles";
//Importing stuff from styles.js file, these are the components that are reused 
class App extends Component {
  state = {
    open: false,
    btnText: 'Magic stuff'
  };


  //Function to slide footer in and out and changing text on button
  slideButton = () => {
    this.state.open ? (this.setState({ open: false, btnText: 'Magic stuff' })) : (this.setState({ open: true, btnText: 'More magic stuff' }))
  }


  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <NavBar>
            <Title>This is a title</Title>
          </NavBar>
        </HeaderWrapper>
        <ContentWrapper>
          <Title big>This is another title with prop "big" passed to it</Title>
          <Text>I am a styled paragraph</Text>
          <Text otherColor>I am also a styled paragraph but with a "otherColor" prop passed to me</Text>   {/* This component has a prop passed to it called otherColor, in component i declare if component has otherColor passed to it, set color to blue. */}
          <SlideFooterButton onClick={() => this.slideButton()}>{this.state.btnText}</SlideFooterButton>
        </ContentWrapper>
        <FooterWrapper>
          {this.state.open ? (        //Turnery operator to see if FooterItem should be rendered with open or not, state is changed on buttonclick
            <FooterItem red open>
              <Text footer>I am a styled paragraph in the footer</Text>
            </FooterItem>
          ) : (
              <FooterItem red>
                <Text footer>I am a styled paragraph in the footer</Text>
              </FooterItem>
            )}
          {this.state.open ? (
            <FooterItem green open>
              <Text footer>I am a styled paragraph in the footer</Text>
            </FooterItem>
          ) : (
              <FooterItem green>
                <Text footer>I am a styled paragraph in the footer</Text>
              </FooterItem>
            )} {this.state.open ? (
              <FooterItem blue open>
                <Text footer>I am a styled paragraph in the footer</Text>
              </FooterItem>
            ) : (
                <FooterItem blue>
                  <Text footer>I am a styled paragraph in the footer</Text>
                </FooterItem>
              )}
        </FooterWrapper>
      </React.Fragment >

    );
  }
}

export default App;
