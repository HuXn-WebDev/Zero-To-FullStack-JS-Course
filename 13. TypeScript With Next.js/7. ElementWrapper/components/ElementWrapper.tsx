import { type FC, type ReactNode } from "react";

interface ElementWrapperProps {
  elementType: "div" | "span" | "h1" | "button";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ElementWrapper: FC<ElementWrapperProps> = ({
  elementType,
  children,
  className,
  onClick,
}) => {
  // keyof JSX.IntrinsicElements is a TypeScript utility type that represents the union of all valid HTML tag names. keyof JSX.IntrinsicElements essentially creates a union type of all HTML element names like 'div', 'span', 'h1', 'button', and so on.
  const Element = elementType as keyof JSX.IntrinsicElements;

  return (
    <Element className={className} onClick={onClick}>
      {children}
    </Element>
  );
};

export default ElementWrapper;
