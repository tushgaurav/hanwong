import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md font-black">
              HW
            </div>
            Han Wong International
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        {/* Decorative Taekwondo pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 border-4 border-white rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-4 border-white rounded-full" />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">🥋</div>
            <h2 className="text-3xl font-black mb-4">
              Join the Global Taekwondo Community
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Register for tournaments, connect with masters worldwide, and take your martial arts journey to the next level.
            </p>
            <div className="mt-8 flex justify-center gap-8 text-sm text-zinc-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div>Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div>Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div>Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

