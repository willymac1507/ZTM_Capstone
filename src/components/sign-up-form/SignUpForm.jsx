import { useContext, useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Swal from 'sweetalert2';
import { FormInput } from '../form-input/FormInput';
import { UserContext } from '../../contexts/UserContext';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            await Swal.fire({
                title: 'Error!',
                text: 'The passwords do not match.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user, { 'displayName': displayName });
            resetForm();
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                await Swal.fire({
                    title: 'Error!',
                    text: 'This email is already in use.',
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
                <h1 className={'text-4xl mb-3 text-center'}>Don't have an account?</h1>
                <h3 className="text-lg mb-8 text-center">Register with an email and password</h3>
                <div className={'flex justify-center mt-7'}>
                    <div className={'w-72'}>
                        <form action="#" onSubmit={handleSubmit}>
                            <FormInput inputText={'Display Name'}
                                       name="displayName"
                                       value={displayName}
                                       type="text"
                                       onChange={handleChange}/>

                            <FormInput inputText={'Email'}
                                       name={'email'}
                                       value={email}
                                       type={'email'}
                                       onChange={handleChange}/>

                            <FormInput inputText={'Password'}
                                       name={'password'}
                                       value={password}
                                       type={'password'}
                                       onChange={handleChange}/>

                            <FormInput inputText={'Confirm Password'}
                                       name={'confirmPassword'}
                                       value={confirmPassword}
                                       type={'password'}
                                       onChange={handleChange}/>
                            <div className="flex justify-between mt-10">
                                <button className={'button-primary'}>Sign Up</button>
                                <button className={'button-danger'} onClick={resetForm}>Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};