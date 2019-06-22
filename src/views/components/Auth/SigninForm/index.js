import React from 'react';
import { useDispatch } from 'react-redux';

import store from '~/core/store';
import AuthActions from '~/core/store/ducks/auth';

import { Container } from './styles';

function SigninForm() {
  const dispatch = useDispatch(store);

  function handleLoginGoogle() {
    dispatch(AuthActions.signInRequest());
  }

  return (
    <Container>
      <button onClick={() => handleLoginGoogle()}>Login</button>
    </Container>
  );
}

export default SigninForm;
