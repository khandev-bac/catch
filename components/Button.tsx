import { Text, Pressable, ActivityIndicator } from "react-native";
import React, { FC } from "react";

type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonI {
  title?: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 h-10",
  md: "px-6 h-12",
  lg: "px-8 h-14",
};

const textSizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
  filled: "bg-primary border border-primary ",
  outline: "bg-transparent border border-primary",
  ghost: "bg-transparent border-0",
};

const textVariantStyles: Record<ButtonVariant, string> = {
  filled: "text-white",
  outline: "text-primary",
  ghost: "text-primary",
};

const Button: FC<ButtonI> = ({
  onPress,
  title,
  variant = "filled",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={`
        flex-row items-center justify-center gap-2 rounded-full
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? "w-full  " : "self-start"}
        ${isDisabled ? "opacity-50" : "opacity-100"}
      `}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "filled" ? "white" : undefined}
        />
      ) : (
        <>
          {leftIcon}
          <Text
            className={`
              font-sans-SemiBold text-white
              ${textSizeStyles[size]}
              ${textVariantStyles[variant]}
            `}
          >
            {title}
          </Text>
          {rightIcon}
        </>
      )}
    </Pressable>
  );
};

export default Button;
