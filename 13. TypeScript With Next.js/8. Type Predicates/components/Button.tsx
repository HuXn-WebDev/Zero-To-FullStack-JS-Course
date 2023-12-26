import { FC } from "react";

// Define two different types of button props
interface PrimaryButtonProps {
  type: "primary";
  label: string;
}

interface SecondaryButtonProps {
  type: "secondary";
  label: string;
}

// Union type for the button props
type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// Type predicate function to check if props are of type PrimaryButtonProps
function isPrimaryButtonProps(props: ButtonProps): props is PrimaryButtonProps {
  return props.type === "primary";
}

export const primaryButtonProps: PrimaryButtonProps = {
  type: "primary",
  label: "Primary Button",
};

export const secondaryButtonProps: SecondaryButtonProps = {
  type: "secondary",
  label: "Secondary Button",
};

// Button component using the type predicate
const Button: FC<ButtonProps> = (props) => {
  if (isPrimaryButtonProps(props)) {
    // TypeScript knows that 'props' is of type PrimaryButtonProps here
    return (
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {props.label}
      </button>
    );
  } else {
    // TypeScript knows that 'props' is of type SecondaryButtonProps here
    return (
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        {props.label}
      </button>
    );
  }
};

export default Button;
