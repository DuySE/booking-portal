import React, { Component } from 'react';
import {
  Wrapper,
  InnerWrapper,
  Label,
  TextFieldWrapper,
  TextField,
  ButtonWrapper,
  Button,
} from '../../styles/LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const { username, password } = this.state;
    const { login } = this.props;
    return (
      <Wrapper>
        <InnerWrapper>
          <Label>Account Login</Label>
          <TextFieldWrapper>
            <TextField type="text" placeholder="Username"
              onChange={event => this.setState({ username: event.target.value })} />
            <TextField type="password" placeholder="Password"
              onChange={event => this.setState({ password: event.target.value })} />
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button onClick={() => login(username, password)}>LOGIN</Button>
          </ButtonWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }
}
