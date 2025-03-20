import './Signup.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ToggleBtn from '../buttons/ToggleBtn/ToggleBtn';
import SocialBtn from '../buttons/SocialButtons/SocialBtn';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../../firebaseConfig';

interface SignUpFormValues {
  email: string;
  phoneNumber: string;
  password: string;
  'confirm-password': string;
}

function Signup() {
  const handleSignup = async (values: SignUpFormValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      //additional info (phone number)
      await setDoc(doc(db, 'users', user.uid), {
        email: values.email,
        phoneNumber: values.phoneNumber,
      });

      console.log('User registered:', user);
      alert('Signup Successful!');
    } catch (error) {
      console.error('Error registering user:', (error as Error).message);
      alert((error as Error).message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      //  Check if user already exists in Firestore
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        //  If new user, save to Firestore
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName,
          profilePic: user.photoURL,
          createdAt: new Date(),
        });
      }

      console.log('Google User Signed Up:', user);
      alert('Google Signup Successful!');
    } catch (error: any) {
      console.error('Google Signup Failed:', error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <div className="signup-div">
        <div className="form-container">
          <div className="auth-buttons">
            <ToggleBtn
              name="Sign Up"
              handleClick={() => console.log('Sign Up button')}
            />
            <ToggleBtn
              name="Sign In"
              handleClick={() => console.log('Sign In button')}
            />
          </div>

          <div className="signup-form">
            <Formik
              initialValues={{
                email: '',
                phoneNumber: '',
                password: '',
                'confirm-password': '',
              }}
              validationSchema={Yup.object({
                email: Yup.string().required('Required'),

                phoneNumber: Yup.string()
                  .required('Required')
                  .matches(
                    /^[0-9]{10}$/,
                    'phone number must be exactly 10 digits'
                  ),

                password: Yup.string()
                  .required('Required')
                  .min(8, 'Password must be atleast 8 characters')
                  .matches(/[A-Z]/, 'must contain atleast one uppercase') //Uppercase
                  .matches(/[a-z]/, 'must contain atleast one lowercase') //lowercase
                  .matches(
                    /[!@#$%^&*()<>?:"{}]/,
                    'must contain atleast one special character'
                  ) //special characters
                  .matches(
                    /[0-9]/,
                    'must contain atleast one special character'
                  ),

                'confirm-password': Yup.string()
                  .required('Required')
                  .oneOf([Yup.ref('password')], 'Password must match'),
              })}
              onSubmit={handleSignup}
            >
              <Form className="form-values">
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="txt-box"
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                    className="txt-box"
                  />
                  <ErrorMessage name="phoneNumber" />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="txt-box"
                  />
                  <ErrorMessage name="password" />
                </div>

                <div className="input-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <Field
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    className="txt-box"
                  />
                  <ErrorMessage name="confirm-password" />
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>

          <div className="social-auth">
            <SocialBtn name="Google" handleClick={handleGoogleSignUp} />
            <SocialBtn
              name="Facebook"
              handleClick={() => console.log('Facebook')}
            />
            <SocialBtn
              name="Twitter"
              handleClick={() => console.log('Twitter')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
