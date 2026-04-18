import React from 'react';
import { Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | Grit Real Estate',
  description: 'Cookie Policy explaining how Grit Real Estate uses cookies on our website in Kansas and Missouri.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-brand-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Cookie className="w-12 h-12 text-brand-primary" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">
            Cookie Policy
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-black/50">
            Last Updated: April 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Grit Real Estate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website. As a licensed real estate brokerage operating in Missouri and Kansas, we are committed to being transparent about the data we collect and how it is used to improve your home searching experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently, provide a better user experience, and supply website owners with analytics and tracking information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">3. How We Use Cookies</h2>
            <p>
              We use the following types of cookies on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionalities such as page navigation and secure areas of the website. The website cannot function properly without these cookies.</li>
              <li><strong>Performance and Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website. It helps us analyze data about web page traffic and improve our website to tailor it to customer needs. All information collected is aggregated and therefore anonymous.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as search preferences or property filters) and provide enhanced, more personal features.</li>
              <li><strong>Marketing and CRM Cookies:</strong> As a real estate brokerage, we may use cookies to connect your website activity with our Customer Relationship Management (CRM) tools to better assist you with buying or selling a home, provided you have submitted your contact information to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. This may include analytics providers, social media integrations, or real estate syndication platforms. These third-party services use cookies to track their own performance or to help us provide localized real estate data for the Missouri and Kansas markets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">5. How to Control Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and features (such as saving favorite properties) may be restricted.
            </p>
            <p>
              The means by which you can refuse cookies through your web browser controls vary from browser to browser. You should visit your browser&apos;s help menu for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us:
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
