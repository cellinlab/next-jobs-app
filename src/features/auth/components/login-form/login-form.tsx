import { Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";

import { useLogin } from "../../api/login";
import type { LoginData } from "../../types";

export type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  const { register, handleSubmit, formState } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    login.submit(data);
  };

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing="5" w="full">
      <InputField
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
        })}
        error={formState.errors["email"]}
      />
      <InputField
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
        })}
        error={formState.errors["password"]}
      />
      <Button type="submit" isLoading={login.isLoading} isDisabled={login.isLoading}>
        Log in
      </Button>
    </Stack>
  );
};
