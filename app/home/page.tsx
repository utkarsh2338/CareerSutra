
import { UserButton, SignOutButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <nav className="absolute top-0 right-0 flex items-center gap-4 p-4">
        <UserButton afterSignOutUrl="/" />
        <SignOutButton>
          <button className="ml-2 px-4 py-2 rounded bg-white text-black font-medium hover:bg-gray-200 transition">Sign Out</button>
        </SignOutButton>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mt-8">Welcome to your Home Page!</h1>
        <p className="mt-4">You are signed in 🎉</p>
      </div>
    </div>
  );
}
