import { AuthPage } from "@refinedev/mui";
import { AppIcon } from "../../components/app-icon";


export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<AppIcon />}
      formProps={{
        defaultValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};
