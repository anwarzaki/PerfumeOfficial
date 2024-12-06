import { SignUp } from "@clerk/clerk-react";

const CustomSignUp = () => {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/"
      appearance={{
        elements: {
          formFieldInput: "my-custom-input",
        },
      }}
      additionalFields={[
        {
          name: "role",
          type: "select",
          label: "Role",
          options: [
            { value: "user", label: "User" },
            { value: "admin", label: "Admin" },
          ],
        },
      ]}
    />
  );
};

export default CustomSignUp;