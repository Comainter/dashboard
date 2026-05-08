export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
  
          <div className="mb-16 border-b border-white/10 pb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Legal
            </p>
  
            <h1 className="text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              This Privacy Policy describes how Comaniter
              collects, uses, stores, processes, and protects
              personal and repository-related information.
            </p>
  
            <p className="mt-4 text-sm text-zinc-500">
              Last updated: May 8, 2026
            </p>
          </div>
  
          <div className="space-y-14">
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                1. Information We Collect
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  We may collect information including:
                </p>
  
                <ul className="list-disc space-y-3 pl-6">
                  <li>Name and username</li>
                  <li>Email address</li>
                  <li>OAuth provider account identifiers</li>
                  <li>Repository metadata and permissions</li>
                  <li>Session identifiers and IP addresses</li>
                  <li>Usage analytics and diagnostic data</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                2. OAuth Authentication
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Authentication is handled using third-party
                  OAuth providers including GitHub, GitLab,
                  and Bitbucket.
                </p>
  
                <p>
                  We only access permissions explicitly granted
                  during the OAuth authorization process.
                </p>
  
                <p>
                  Access tokens are securely stored and may be
                  revoked when sessions expire or accounts are
                  disconnected.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                3. How Information Is Used
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Information may be used to:
                </p>
  
                <ul className="list-disc space-y-3 pl-6">
                  <li>Provide platform functionality</li>
                  <li>Authenticate and secure accounts</li>
                  <li>Process repository workflows</li>
                  <li>Improve reliability and performance</li>
                  <li>Detect abuse and security incidents</li>
                  <li>Generate analytics and operational insights</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                4. Cookies and Sessions
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  We use cookies and secure session tokens for
                  authentication, session management, and
                  security purposes.
                </p>
  
                <p>
                  Session cookies may be required for essential
                  platform functionality.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                5. Data Security
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  We implement technical and organizational
                  security measures designed to protect systems,
                  infrastructure, and stored information.
                </p>
  
                <p>
                  However, no internet-based platform can
                  guarantee absolute security.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                6. Data Retention
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Information is retained only as long as
                  necessary for operational, legal, security,
                  and compliance purposes.
                </p>
  
                <p>
                  Users may request account deletion and OAuth
                  revocation where applicable.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                7. Third-Party Services
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  The platform integrates with external services
                  including repository providers, analytics
                  systems, infrastructure providers, and hosting
                  platforms.
                </p>
  
                <p>
                  Third-party services operate under their own
                  privacy policies and terms.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                8. International Data Processing
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Information may be processed and stored in
                  multiple jurisdictions depending on
                  infrastructure and service providers.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                9. Policy Updates
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  This Privacy Policy may be updated periodically
                  to reflect operational, legal, or regulatory
                  changes.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                10. Contact
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  For privacy or security inquiries, contact:
                </p>
  
                <p className="text-white">
                  support@comaniter.com
                </p>
              </div>
            </section>
  
          </div>
        </div>
      </main>
    )
  }