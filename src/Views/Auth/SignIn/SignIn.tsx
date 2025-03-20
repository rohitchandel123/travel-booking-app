import './SignIn.css';
import {useNavigate} from 'react-router';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ToggleBtn from '../buttons/ToggleBtn/ToggleBtn';
import SocialBtn from '../buttons/SocialButtons/SocialBtn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../firebaseConfig';

import { ROUTES_CONFIG } from '../../../Shared/Constants';
import {Link} from 'react-router-dom';

interface SignInFormValues {
  email: string;
  password: string;
}

function SignIn() {

  const navigate = useNavigate();

  const handleSignIn = async (values: SignInFormValues) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert('Login Successfull');
    } catch (error) {
      console.log('login error', error);
    }
  };

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User Info:', result.user); // Logged-in user info
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  return (
    <div className="signIn-div">
      <div className="auth-buttons">
        <ToggleBtn
          name="Sign Up"
          handleClick={() => navigate(`${ROUTES_CONFIG.REGISTER.path}`) }
        />
        <ToggleBtn
          name="Sign In"
          handleClick={() => navigate(`${ROUTES_CONFIG.LOGIN.path}`) }
        />
      </div>

      <div className="signIn-form">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Required'),

            password: Yup.string().required('Required'),
          })}
          onSubmit={handleSignIn}
        >
          <Form className="form-values">
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className="txt-box" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="txt-box" />
            <ErrorMessage name="password" />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Form>
        </Formik>
      </div>  
        
        <Link to='/reset-password'>Forgot Your Password ? </Link>
      
      <div className="social-auth">
        <SocialBtn name="Google" handleClick = {handleGoogleLogin} />
        <SocialBtn
          name="Facebook"
          handleClick={() => console.log('Facebook')}
        />
        <SocialBtn name="Twitter" handleClick={() => console.log('Twitter')} />
      </div>
    </div>
  );
}

export default SignIn;
