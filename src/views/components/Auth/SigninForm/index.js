import React from 'react';
import { useDispatch } from 'react-redux';

import store from '~/core/store';

import { Container } from './styles';

function SigninForm() {
  const dispatch = useDispatch(store);

  function handleLoginGoogle() {
    dispatch({ type: 'SIGN_IN_REQUEST' });
  }

  return (
    <Container>
      <button onClick={() => handleLoginGoogle()}>Login</button>
    </Container>
  );
}

export default SigninForm;
