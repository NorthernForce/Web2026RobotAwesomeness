import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export function Privacy() {
  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
              Privacy <span className="text-[#db3e79]">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                Northern Force Team 172 is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number) that you voluntarily submit</li>
                <li>Information about your device and browsing activity through cookies and similar tracking technologies</li>
                <li>Aggregated and anonymized data to understand how visitors use our site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Your Information</h2>
              <p>
                Northern Force Team 172 collects and uses your information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>To improve and maintain our website</li>
                <li>To send periodic emails regarding updates or information related to the team</li>
                <li>To respond to your inquiries and requests</li>
                <li>To analyze how the site is used and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-500">Last updated: February 2026</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
