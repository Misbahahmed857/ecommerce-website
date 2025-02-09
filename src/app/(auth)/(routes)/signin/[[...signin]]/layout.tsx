import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
    title: 'Sign In | Shop.co',
    description: 'Access your account to enjoy exclusive features and manage your profile. Sign in to continue your journey with us!',
}

const SignInLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <NextTopLoader color="#000" showSpinner={false} />
      {children}
    </>
  );
};

export default SignInLayout;