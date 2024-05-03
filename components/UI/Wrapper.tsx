import React from "react";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center flex-col margins">{children}</section>
  );
}
