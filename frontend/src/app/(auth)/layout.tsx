export const metadata = {
  title: "Auth",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative w-screen h-screen flex'>
      <div className='absolute h-full w-full flex items-center justify-center top-0 left-0 z-10'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
