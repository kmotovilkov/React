import React, {useState} from "react";
import {HeaderContainer} from "../containers/header"
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";

export default function Signin() {
    const [emailAddres, setEmailAddres] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const isInvalid = password === "" || emailAddres === "";
    const handleSignin=(event)=>{
        event.preventDefault();

    }

    return (<>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input placeholder="Email address" value={emailAddres}
                                    onChange={({target}) => setEmailAddres(target.value)}/> <Form.Input
                        placeholder="Password" value={password}
                        onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}