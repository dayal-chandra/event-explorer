import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="space-y-5">
      <Helmet>
        <title>EventNest | Privacy Policy</title>
      </Helmet>

      <div className="space-y-2">
        <p className="text-2xl font-semibold text-center"> Privacy Policy</p>
        <p className="text-center">
          Effective Date: 11-02-2030 <br />
          Last Updated: 06-05-2025
        </p>

        <p className="text-center">
          EventNest is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website.
        </p>
      </div>

      <p>
        <span className="text-[20px] font-semibold">
          1. Information We Collect
        </span>
        <br />
        We may collect the following types of information: <br />
        Personal Information: Name, email address, phone number, etc., when you
        register or contact us. Usage Data: Pages visited, time spent, browser
        type, and other analytics. Cookies and Tracking: We may use cookies and
        similar tracking technologies to improve your experience.
      </p>

      <p>
        <span className="text-[20px] font-semibold">
          2. How We Use Your Information
        </span>
        <br />
        We use the collected information to: <br />
        Provide, operate, and maintain our website Improve your user experience
        Communicate with you, including responding to inquiries Send updates,
        promotions, or newsletters only if you opt in Monitor usage trends and
        website performance
      </p>

      <p>
        <span className="text-[20px] font-semibold">
          3. Sharing Your Information
        </span>{" "}
        <br />
        We do not sell or rent your personal data. We may share information:{" "}
        <br />
        With service providers If required by law or legal process To protect
        our rights or prevent fraud
      </p>

      <p>
        <span className="text-[20px] font-semibold">4. Cookies</span> <br />
        Cookies are small data files stored on your device. You can control or
        disable cookies through your browser settings.
      </p>

      <p>
        <span className="text-[20px] font-semibold">5. Data Security</span>{" "}
        <br />
        We use reasonable security measures to protect your personal
        information. However, no method of transmission over the internet is
        100% secure.
      </p>

      <p>
        <span className="text-[20px] font-semibold">6. Your Rights</span> <br />
        Depending on your location, you may have rights to access, correct,
        delete, or limit the use of your personal data.
      </p>
      <p>
        <span className="text-[20px] font-semibold">7. Third-Party Links</span>{" "}
        <br />
        Our website may link to third-party sites. We are not responsible for
        their privacy practices.
      </p>
      <p>
        <span className="text-[20px] font-semibold">8. Children's Privacy</span>{" "}
        <br />
        We do not knowingly collect personal information from children under 13.
        If we learn we have done so, we will delete the information promptly.
      </p>
    </div>
  );
};

export default Privacy;
