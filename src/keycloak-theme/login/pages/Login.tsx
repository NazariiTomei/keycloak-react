import { useState } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { useConstCallback } from "keycloakify/tools/useConstCallback";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import CustomHeader from "keycloak-theme/components/CustomHeader";
import CustomSubHeader from "keycloak-theme/components/CustomSubHeader";
import CustomTextField from "keycloak-theme/components/CustomTextField";
import CustomButton from "keycloak-theme/components/CustomButton";
import CustomLink from "keycloak-theme/components/CustomLink";
import axios from "axios";
export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;
    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const onSubmit = async () => {
        let isValid = true;

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (isValid) {
            // Proceed with form submission or authentication
            try {
                const response = await axios.post(url.loginAction, {
                    email,
                    password,
                });

                // Handle the response as needed
                console.log('Login successful:', response.data);
                // Redirect to the desired page or handle successful login
            } catch (error) {
                console.error('Login failed:', error);
                // Handle login failure
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#040b15] px-4 py-8">
            <div className="w-full max-w-lg bg-[#111A26] p-8 rounded-lg space-y-8 z-[1]">
                <div className="space-y-4">
                    <CustomHeader title="Welcome to Grid" />
                    <CustomSubHeader subtitle="Let’s begin the adventure" />
                </div>
                <div className="space-y-6">
                    <CustomTextField
                        label="Email"
                        type="email"
                        value={email}
                        handleChange={setEmail}
                        placeholder="Enter your email"
                    />
                    {emailError && <p className="text-[#FF0000] text-sm">{emailError}</p>}
                    <CustomTextField
                        label="Password"
                        type="password"
                        value={password}
                        handleChange={setPassword}
                        placeholder="Enter your password"
                    />
                    {passwordError && <p className="text-[#FF0000] text-sm">{passwordError}</p>}
                    <CustomLink
                        label="Don’t have an account?"
                        linkname="Sign Up"
                        url={url.registrationUrl}
                    />
                    <CustomButton label="Access My Account" handleClick={onSubmit} />
                </div>
            </div>
        </div>
    );
}
