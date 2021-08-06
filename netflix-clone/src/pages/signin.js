import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../context/firebase";
import {HeaderContainer} from "../containers/header"
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddres, setEmailAddres] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const isInvalid = password === "" || emailAddres === "";
    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddres, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddres('');
                setPassword('');
                setError(error.message)
            });
    };

    return (<>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input placeholder="Email address" value={emailAddres}
                                    onChange={({target}) => setEmailAddres(target.value)}/>
                        <Form.Input placeholder="Password" value={password}
                                    onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix?
                        <Form.Link to="/signup">Sign up now.</Form.Link>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}