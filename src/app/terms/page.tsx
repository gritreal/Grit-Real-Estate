import React from 'react';
import { Scale } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Grit Real Estate',
  description: 'Terms of Service and conditions for using the Grit Real Estate website in Kansas and Missouri.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-brand-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Scale className="w-12 h-12 text-brand-primary" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">
            Terms of Service
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-black/50">
            Last Updated: April 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Grit Real Estate website (the &quot;Website&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">2. Real Estate Disclaimers</h2>
            <p>
              All information provided on this Website regarding properties for sale, purchase, or financing is from sources deemed reliable. However, no representation is made as to the accuracy thereof, and such information is subject to errors, omission, change of price, rental, commission, prior sale, lease or financing, or withdrawal without notice.
            </p>
            <p>
              Grit Real Estate operates as a licensed real estate brokerage in the states of Kansas and Missouri. Nothing on this Website should be construed as an offer to sell or a solicitation to buy real estate in any jurisdiction where we are not licensed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p>
              The Website and its original content, features, and functionality are owned by Grit Real Estate and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">4. SMS/Text Messaging</h2>
            <p>
              By voluntarily providing your phone number, you consent to receive text messages from Grit Real Estate regarding real estate inquiries, marketing, and services. You may opt out of receiving text messages at any time by replying &quot;STOP&quot;. Standard message and data rates may apply. SMS opt-in data will not be sold or shared with any unassociated third parties. For more information, please refer to our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Grit Real Estate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Missouri and the State of Kansas, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-brand-secondary/10 p-6 rounded-xl mt-6">
              <p className="font-semibold text-brand-primary text-xl mb-4">Grit Real Estate</p>
              <ul className="space-y-2">
                <li>122 Main St.</li>
                <li>Blackwater, MO 65322</li>
                <li>Email: <a href="mailto:realestategrit@gmail.com" className="text-brand-primary hover:underline">realestategrit@gmail.com</a></li>
                <li>Phone: <a href="tel:7852188577" className="text-brand-primary hover:underline">785-218-8577</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
