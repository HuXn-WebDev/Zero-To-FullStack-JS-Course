"use client";

import Button from "@/components/Button";
import { primaryButtonProps, secondaryButtonProps } from "@/components/Button";

export default function Home() {
  return (
    <>
      <Button {...primaryButtonProps} />
      <Button {...secondaryButtonProps} />
    </>
  );
}
