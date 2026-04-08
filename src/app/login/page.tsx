"use client"


export default function LoginPage() {

  function signIn() {
    window.location.href = `${process.env.BACKEND_URL}/auth/github/login`
  }


  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-slate-900">Login</h1>
        <p className="mb-6 text-sm text-slate-600">
          Continue with GitHub to access Maintania.
        </p>
        <button onClick={()=>signIn()}>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}
