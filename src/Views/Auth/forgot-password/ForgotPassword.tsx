import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './forgotPassword.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

interface emailValue {
  email: string;
}

function ForgotPassword() {
  async function handleResetPassword(values: emailValue) {
    try {
      await sendPasswordResetEmail(auth, values.email).then(() => {
        console.log('email sent');
      });
    } catch (err) {
      console.log('An error occured while sending the email');
    }

    console.log('this will perform the reset password function', values);
  }

  return (
    <div className = "forgot-password-div">
        <div className="forgot-password-container">
      <h3>Reset Your Password</h3>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
        })}
        onSubmit={handleResetPassword}
      >
        <Form>
        <div>
          <Field
            type="email"
            name="email"
            placeholder="Enter Your Email"
          ></Field>
          <ErrorMessage name="email" />
          </div>

         <div> <button type="submit">Send email</button> </div>
        </Form>
      </Formik>
    </div>
    </div>
  );
}
export default ForgotPassword;
