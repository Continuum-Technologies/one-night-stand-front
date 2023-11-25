"use client";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { IconInfoCircle,} from "@tabler/icons-react";
import { useState } from "react";

interface IUserLogin {
  email: string;
  password: string;
}

export default function HomePage() {
  const icon = <IconInfoCircle />;
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
    },
  });

  const handleLogin = (values: IUserLogin) => {
    if (
      values.email === "dev@onenightstand.com" &&
      values.password === "Password@1"
    ) {
      router.push("/users");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Box maw={440} mx="auto" mt={"md"}>
      <h1>One Night Stand </h1>
      <h2>Login to Continue</h2>
      {showAlert && (
        <Alert variant="light" color="red" title="Oops!" icon={icon}>
          Ask the admin for correct login bro!
        </Alert>
      )}
      <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          {...form.getInputProps("password")}
        />
        <Group content="center" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Box>
  );
}
