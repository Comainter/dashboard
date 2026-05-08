export default function TermsPage() {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          
          <div className="mb-16 border-b border-white/10 pb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Legal
            </p>
  
            <h1 className="text-5xl font-semibold tracking-tight">
              Terms of Use
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              These Terms of Use govern access to and use of the
              platform, services, APIs, repository integrations,
              and related infrastructure provided by Comaniter.
            </p>
  
            <p className="mt-4 text-sm text-zinc-500">
              Last updated: May 8, 2026
            </p>
          </div>
  
          <div className="space-y-14">
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                1. Acceptance of Terms
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  By accessing or using the platform, you agree
                  to be bound by these Terms of Use and all
                  applicable laws and regulations.
                </p>
  
                <p>
                  If you do not agree with these terms, you may
                  not access or use the services.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                2. Platform Services
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Comaniter provides repository management,
                  automation workflows, issue analysis,
                  collaboration tooling, and integrations with
                  third-party repository providers including
                  GitHub, GitLab, and Bitbucket.
                </p>
  
                <p>
                  Features and services may change, evolve,
                  become deprecated, or be removed without prior
                  notice.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                3. Authentication and OAuth Access
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Access to certain platform features requires
                  authentication using supported OAuth providers.
                </p>
  
                <p>
                  By connecting a repository provider account,
                  you authorize the platform to access repository
                  metadata, profile information, and permissions
                  explicitly granted through the OAuth consent
                  process.
                </p>
  
                <p>
                  You are responsible for maintaining the
                  security of your connected accounts and session
                  credentials.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                4. Acceptable Use
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  You may not misuse the platform or use the
                  services in a manner that:
                </p>
  
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    Violates applicable laws or regulations
                  </li>
  
                  <li>
                    Attempts unauthorized access to systems,
                    repositories, or infrastructure
                  </li>
  
                  <li>
                    Disrupts platform stability or service
                    availability
                  </li>
  
                  <li>
                    Performs abusive automation, scraping, or
                    excessive API requests
                  </li>
  
                  <li>
                    Distributes malware, spam, or malicious code
                  </li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                5. Repository Data and Content
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  You retain ownership of your repositories,
                  content, and associated intellectual property.
                </p>
  
                <p>
                  By using the platform, you grant Comaniter a
                  limited license necessary to process,
                  analyze, index, and display repository-related
                  information solely for service functionality.
                </p>
  
                <p>
                  Public repository content may be processed for
                  automation, analytics, search, or operational
                  improvements.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                6. Availability and Reliability
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Services are provided on an “as is” and
                  “as available” basis without warranties of any
                  kind.
                </p>
  
                <p>
                  We do not guarantee uninterrupted operation,
                  uptime, availability, or error-free behavior.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                7. Limitation of Liability
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  To the maximum extent permitted by law,
                  Comaniter shall not be liable for indirect,
                  incidental, consequential, special, or punitive
                  damages arising from use of the services.
                </p>
  
                <p>
                  This includes loss of data, repository access,
                  business interruption, operational delays,
                  revenue loss, or service outages.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                8. Account Suspension and Termination
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  We reserve the right to suspend, restrict, or
                  terminate accounts that violate these terms or
                  pose security or operational risks.
                </p>
  
                <p>
                  OAuth access tokens and active sessions may be
                  revoked at any time for security purposes.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                9. Changes to Terms
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  These Terms of Use may be updated periodically.
                  Continued use of the platform after updates
                  constitutes acceptance of revised terms.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-5 text-2xl font-semibold">
                10. Contact
              </h2>
  
              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  For legal, security, or compliance inquiries,
                  contact:
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