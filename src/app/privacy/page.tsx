import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Grit Real Estate',
  description: 'Privacy Policy for Grit Real Estate covering data collection, SMS compliance, and user rights in Kansas and Missouri.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Shield className="w-12 h-12 text-brand-primary" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-black/50">
            Last Updated: April 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">1. Introduction</h2>
            <p>
              Grit Real Estate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website (the &quot;Website&quot;) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            <p>
              We operate as a licensed real estate brokerage in the states of Kansas and Missouri and comply with relevant state and federal regulations regarding consumer data and telecommunications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Information:</strong> By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or property details (e.g., when submitting a home value request or contact form).</li>
              <li><strong>Automated Information:</strong> About your internet connection, the equipment you use to access our Website, and usage details through cookies and similar tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us (e.g., property valuations, real estate agent contact).</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">4. SMS/Text Messaging Policy & TCPA Compliance</h2>
            <p>
              By providing your telephone number and opting in, you agree to receive text messages (SMS/MMS) from Grit Real Estate for real estate inquiries, property updates, and service-related notifications. We adhere strictly to the Telephone Consumer Protection Act (TCPA) and A2P 10DLC regulations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Prior Express Consent:</strong> We only send text messages to users who have explicitly opted in via our website forms or direct communication. Consent is not a condition of purchasing any property, goods, or services.</li>
              <li><strong>Opt-Out Instructions:</strong> You may opt out of receiving text messages at any time by replying &quot;STOP&quot; to any of our messages. Upon receiving a &quot;STOP&quot; request, we will send one final confirmation message and will no longer send you text messages to that number.</li>
              <li><strong>Help &amp; Support:</strong> Reply &quot;HELP&quot; to any of our messages for assistance or contact us directly at realestategrit@gmail.com.</li>
              <li><strong>Rates:</strong> Standard message and data rates may apply.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">5. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or lease your personal information to third parties. We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To our real estate agents, employees, and contractors bound by confidentiality agreements for the purpose of providing real estate services to you.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request.</li>
            </ul>
            <div className="bg-red-50/50 border-l-4 border-red-500 p-4 mt-6 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">Strict SMS Data Policy:</p>
              <p className="text-red-700 m-0 mt-2">
                Mobile information (phone numbers and SMS consent data) will absolutely <strong>NOT</strong> be shared with or sold to third parties or affiliates for their own marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties except as strictly necessary to deliver the requested SMS services (e.g., our SMS delivery provider).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">6. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">7. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, please contact us at:
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
