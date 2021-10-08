import { UserContext } from '@lib/context';
import React, { useContext } from 'react';

const EmailVerification = () => {
    const { user, loading } = useContext(UserContext);


const resendEmailVerification = () => {
  user.sendEmailVerification()
  alert('Email Sent')
}

  return (
    <div>
      <h1>Email Verification</h1>
      <p>Please verify your email</p>
      <button onClick={resendEmailVerification}>Resend</button>
    </div>
  );
};

export default EmailVerification;
