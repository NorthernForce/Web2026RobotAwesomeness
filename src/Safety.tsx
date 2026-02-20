import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AlertCircle, CheckCircle, Shield } from 'lucide-react';

export function Safety() {
  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
              Safety <span className="text-[#db3e79]">First</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12 text-gray-300">
            <section className="bg-blue-900 border-2 border-blue-700 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Our Commitment</h2>
                  <p>
                    Northern Force Team 172 is committed to maintaining the highest safety standards in all our activities. Safety is not just a practice—it's a core value of our organization.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Workshop Safety</h2>
              <p className="mb-4">
                Our workshop operates under strict safety protocols:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>All team members must complete safety training before using equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Personal protective equipment (PPE) is required at all times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Regular equipment inspections and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Clear protocols for incident reporting and response</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Robot Safety</h2>
              <p className="mb-4">
                Our robots are designed and operated with safety as a priority:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>All robots comply with FIRST Robotics safety standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Regular safety inspections before competitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Trained operators only handle active robots</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Safety briefings before all testing and competition</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Event Safety</h2>
              <p className="mb-4">
                During competitions and public events, we maintain rigorous safety standards:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>All team members understand their safety responsibilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Leadership ensures compliance with event safety requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#db3e79] flex-shrink-0 mt-1" />
                  <span>Designated safety officers at all events</span>
                </li>
              </ul>
            </section>

            <section className="bg-yellow-900 border-2 border-yellow-700 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Questions or Concerns?</h2>
                  <p>
                    If you have any safety concerns or questions about our practices, please contact our leadership team immediately through our contact page.
                  </p>
                </div>
              </div>
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
