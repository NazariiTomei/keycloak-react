import { clsx } from "keycloakify/tools/clsx";
import { useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import CustomHeader from "keycloak-theme/components/CustomHeader";
import CustomSubHeader from "keycloak-theme/components/CustomSubHeader";
import CustomTextField from "keycloak-theme/components/CustomTextField";
import CustomButton from "keycloak-theme/components/CustomButton";
import CustomLink from "keycloak-theme/components/CustomLink";
import Footer from "keycloak-theme/components/Footer";
import CustomCheckbox from "keycloak-theme/components/CustomCaptcha";
import axios from "axios";
export default function Register(props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { url, messagesPerField, register, realm, passwordRequired, recaptchaRequired, recaptchaSiteKey } = kcContext;

    const { msg, msgStr } = i18n;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rcode, setRcode] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [rcodeError, setRcodeError] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState("");

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
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm password is required");
            isValid = false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        if (!rcode) {
            setRcodeError("Referral code is required");
            isValid = false;
        } else {
            setRcodeError("");
        }

        if (!checkboxChecked) {
            setCheckboxError("You must agree to the terms and conditions");
            isValid = false;
        } else {
            setCheckboxError("");
        }

        if (isValid) {
            // Proceed with form submission or registration logic
            try {
                const response = await axios.post(url.registrationAction, {
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
                <div>
                    <CustomHeader title="Sign Up" />
                    <CustomSubHeader subtitle="Let’s begin the adventure" />
                </div>
                <div className="space-y-6">
                    <CustomTextField
                        value={email}
                        handleChange={setEmail}
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    {emailError && <p className="text-[#FF0000] text-sm">{emailError}</p>}
                    <CustomTextField
                        value={password}
                        handleChange={setPassword}
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    {passwordError && <p className="text-[#FF0000] text-sm">{passwordError}</p>}
                    <CustomTextField
                        value={confirmPassword}
                        handleChange={setConfirmPassword}
                        label="Confirm Password"
                        type="password"
                        placeholder="Enter confirm password"
                    />
                    {confirmPasswordError && <p className="text-[#FF0000] text-sm">{confirmPasswordError}</p>}
                    <CustomTextField
                        value={rcode}
                        handleChange={setRcode}
                        label="Referral Code"
                        type="text"
                        placeholder="Enter referral code"
                    />
                    {rcodeError && <p className="text-[#FF0000] text-sm">{rcodeError}</p>}
                    <CustomLink
                        label="Already have an account?"
                        linkname="Login"
                        url={url.loginUrl}
                    />
                    <CustomCheckbox
                        label="I agree to the terms & conditions"
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                    />
                    {checkboxError && <p className="text-[#FF0000] text-sm">{checkboxError}</p>}
                    <CustomButton label="Register Now" handleClick={onSubmit} />
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
