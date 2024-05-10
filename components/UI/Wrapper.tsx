import React from "react";

export default function Wrapper({
  children,
  className
}: Readonly<{
  children: React.ReactNode,
  className?: string
}>) {
  return (
    <section className={`flex items-center flex-col margins ${className}`}>{children}</section>
  );
}
