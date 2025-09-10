import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const signInSchema = z.object({
  email: z.email("Please enter a valid email").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const clearPassword = () => {
    setValue("password", "");
  };

  const onSubmit = async (data: SignInFormData) => {
    try {
      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Login attempt:", data);
      // TODO: Implement actual login logic here
      toast("Success", {
        description: "Thank you for signing in",
      });
    } catch (error) {
      console.error("Login error:", error);
      toast("Login failed", {
        description: "Please check your credentials",
        action: {
          label: "Clear password",
          onClick: clearPassword,
        },
      });
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    showPassword,
    setShowPassword,
  };
};

export default useSignIn;
