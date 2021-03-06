import React, { useState } from 'react';
import { signIn } from '../../firebase/auth';
import SignIn from '../../components/SignIn/SignIn';
import Loader from '../../components/Loader/Loader';

export default function SignInContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    await signIn({ email, password });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return <SignIn onSubmit={onSubmit} />;
}
