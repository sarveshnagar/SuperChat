import React from 'react';
import 'firebase/compat/auth';

const auth = firebase.auth();

export const SignOut = () => {
    return auth.currentUser && (
        <>
            <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </>
    )
}
