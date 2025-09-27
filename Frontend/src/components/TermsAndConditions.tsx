import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4 text-muted-foreground">
        By accessing or using this website, you agree to be bound by these terms. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Website</h2>
      <p className="mb-4 text-muted-foreground">
        You may use the website for personal, non-commercial purposes only. Unauthorized use may give rise to legal action.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4 text-muted-foreground">
        All content, including text, images, and code, is owned by the website owner unless otherwise stated. Do not copy without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4 text-muted-foreground">
        We are not liable for any damages arising from the use or inability to use the website. Use the website at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4 text-muted-foreground">
        We reserve the right to modify these terms at any time. Continued use of the website signifies acceptance of changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4 text-muted-foreground">
        For any questions regarding these terms, contact us at <span className="text-primary font-medium">gokulnath461123456.com</span>.
      </p>
    </section>
  );
};

export default TermsAndConditions;
