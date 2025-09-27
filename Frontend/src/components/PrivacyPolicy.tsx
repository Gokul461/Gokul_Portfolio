import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="mb-4 text-muted-foreground">
        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4 text-muted-foreground">
        We may collect personal information such as your name, email address, and usage data to improve your experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <p className="mb-4 text-muted-foreground">
        The information is used to provide, maintain, and enhance our services, communicate updates, and personalize content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-4 text-muted-foreground">
        We do not sell your information. However, we may use third-party services to analyze traffic or provide functionalities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4 text-muted-foreground">
        Cookies help us understand user behavior and improve website functionality. You can disable cookies via your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4 text-muted-foreground">
        If you have questions about this policy, you can reach us at <span className="text-primary font-medium">gokulnath461123456.com</span>.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
