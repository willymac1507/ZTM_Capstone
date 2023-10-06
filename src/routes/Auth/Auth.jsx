import { SignUpForm } from '../../components/sign-up-form/SignUpForm';
import { SignInForm } from '../../components/sign-in-form/SignInForm';

export const Auth = () => {
    return (
        <>
            <div>
                <h1 className={'text-center'}>Sign In or Register</h1>
                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                    <SignInForm/>
                    <SignUpForm/>

                </div>
            </div>

        </>
    );
};