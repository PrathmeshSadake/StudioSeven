export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-gray-900 flex items-center justify-center h-screen w-full'>
      {children}
    </div>
  );
}
