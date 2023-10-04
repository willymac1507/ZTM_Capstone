import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

export const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <>
            <div>
                <h1>Sign In Page</h1>
                <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            </div>
        </>
    );
};