import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../../contexts/UserContext';

const defaultFormFields = {
    email: '',
    password: '',
};

export const SignInForm = () => {
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetForm();
        } catch (e) {
            if (e.code === 'auth/invalid-login-credentials') {
                await Swal.fire({
                    title: 'Log in error!',
                    text: 'The details provided are not valid.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            } else {
                console.error(e.code);
            }
        }
    };

    const resetForm = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <>
            <div className={'p-24'}>
                <h1 className={'text-4xl mb-3 text-center'}>Have an account?</h1>
                <h3 className="text-lg mb-8 text-center">Sign in with an email and password</h3>
                <div className={'flex justify-center my-7'}>
                    <div className={'w-72 pb-7 border-b'}>
                        <form action="#" onSubmit={handleSubmit}>
                            <FormInput inputText={'Email'} type={'email'} name={'email'} value={email}
                                       onChange={handleChange}/>
                            <FormInput inputText={'Password'} type={'password'} name={'password'} value={password}
                                       onChange={handleChange}/>
                            <div className="flex justify-between mt-10">
                                <button className={'button-primary'}>Sign In</button>
                                <button className={'button-danger'} onClick={resetForm}>Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <h2 className="text-4xl mb-12 text-center">Or</h2>
                <div className={'flex justify-center mt-7'}>
                    <div className={'flex justify-center w-72'}>
                        <button className={'button-primary'} onClick={signInWithGoogle}>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};