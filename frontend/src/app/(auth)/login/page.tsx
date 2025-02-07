import LoginForm from "@/components/forms/loginForm";
import React, { Suspense } from "react";

function page() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

export default page;
