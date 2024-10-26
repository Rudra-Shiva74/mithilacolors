import React, { useState } from "react";
import styles from "./About.module.css"; // Import the CSS Module
import { FaCheckCircle } from "react-icons/fa"; // Import an icon for bullet points

const AboutMithila = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    terms: (
      <>
        <p>
          Welcome to Mithila Colors, where we offer unique and customizable
          Mithila painting cloths tailored to the preferences of our customers.
          These Terms of Service (“Terms”) govern your use of our website and
          the services we provide. By accessing or using our website, you agree
          to comply with these Terms.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> By accessing, browsing, or
            using our website, you accept and agree to these Terms.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> If you do not agree with
            any part of these Terms, you must not use our services.
          </li>
        </ul>

        <h3>2. Changes to the Terms</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> We may update or modify
            these Terms at any time.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Any changes will be
            effective immediately upon posting.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Your continued use of the
            website after changes have been made constitutes your acceptance of
            the updated Terms.
          </li>
        </ul>

        <h3>3. Customizable Mithila Paintings on Cloths</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Our service allows
            customers to order Mithila paintings on cloths customized according
            to their preferences. By placing an order, you agree to the
            following terms:
          </li>
        </ul>

        <h4>3.1 Customization</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> You can choose designs,
            colors, and patterns based on the options we provide.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Customizations will be
            made according to the specifications you provide at the time of the
            order.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Once the order is placed,
            any changes or modifications will be subject to additional charges
            or may not be possible if production has already begun.
          </li>
        </ul>

        <h4>3.2 Design Accuracy</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> While we strive to
            replicate your chosen design and colors as closely as possible,
            minor variations may occur due to the handmade nature of the Mithila
            paintings and differences in screen display settings.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> We reserve the right to
            decline any customization request that violates intellectual
            property rights, contains offensive content, or does not align with
            our artistic values.
          </li>
        </ul>

        <h3>4. Orders and Payment</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Orders must be placed
            through our website using the provided order forms.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> You are responsible for
            ensuring that all information provided, including contact details,
            shipping information, and customization preferences, is accurate.
          </li>
        </ul>

        <h4>4.1 Payment Terms</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Payment must be made in
            full at the time of placing the order unless otherwise agreed upon.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> We accept payments via
            UPI, Net Banking, Credit Card, and Debit Card on our website.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> All prices are in (₹)
            Rupee and are subject to applicable taxes and shipping fees.
          </li>
        </ul>

        <h3>5. Shipping and Delivery</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> We strive to deliver your
            customized Mithila painting cloths within the estimated delivery
            times.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> These times are estimates,
            and we cannot guarantee exact delivery dates due to factors beyond
            our control, such as shipping delays or customs processing.
          </li>
        </ul>

        <h4>5.1 Shipping Fees</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Shipping fees will vary
            depending on your location and will be displayed at checkout.
          </li>
        </ul>

        <h4>5.2 International Shipping</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> For international orders,
            you are responsible for any customs duties, taxes, or fees that may
            apply in your country.
          </li>
        </ul>

        <h3>6. Returns and Refunds</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Customizable products are
            non-refundable and cannot be returned unless they are defective or
            damaged upon arrival.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> In case of defects or
            damage, you must contact us within 24 hours of receiving the product
            and provide proof (e.g., photographs). We will either replace the
            item or issue a refund at our discretion.
          </li>
        </ul>

        <h3>7. Intellectual Property</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> All content on this
            website, including images, designs, and text, is the property of
            Mithila Colors and is protected by copyright and other intellectual
            property laws.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> You may not use any
            content without prior written consent.
          </li>
        </ul>

        <h3>8. Privacy Policy</h3>
        <p>
          Your use of our website is also governed by our Privacy Policy, which
          explains how we collect, use, and protect your personal information.
          By using our website, you agree to our Privacy Policy.
        </p>

        <h3>9. Limitation of Liability</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> We are not liable for any
            indirect, incidental, or consequential damages arising from your use
            of our website or products.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Our liability is limited
            to the total amount paid by you for the product that caused the
            damage.
          </li>
        </ul>

        <h3>10. Governing Law</h3>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> These Terms are governed
            by and construed in accordance with the laws of the Indian
            Constitution.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Any disputes arising from
            these Terms will be resolved in the courts of India.
          </li>
        </ul>

        <h3>11. Contact Us</h3>
        <p>
          If you have any questions or concerns regarding these Terms or our
          services, please contact us at:
        </p>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Email:
            mithilacolors@gmail.com
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Phone: +91 7644040550
          </li>
        </ul>

        <p>
          Thank you for choosing Mithila Colors. We hope you enjoy your
          personalized Mithila painting cloths!
        </p>

        <p>Effective Date: 25 Oct 2024</p>
      </>
    ),
    privacy: (
      <>
        <p>Your privacy is important to us. Here is our privacy policy:</p>
        <h3>1. Introduction</h3>
        <p>
          Welcome to Mithila Colors ("we", "our", "us"). We are committed to
          protecting your privacy and ensuring that your personal information is
          handled in a safe and responsible manner. This Privacy Policy outlines
          how we collect, use, and protect your information.
        </p>
        <h3>2. Information We Collect</h3>
        <ul>
          <li>
            Personal Information: We collect personal information such as your
            name, email address, phone number, and shipping address when you
            place an order or create an account.
          </li>
          <li>
            Payment Information: Payment details are collected through secure
            payment gateways and are not stored on our servers.
          </li>
          <li>
            Customization Details: Information regarding your customization
            preferences for Mithila painting clothes.
          </li>
          <li>
            Usage Data: We collect data on how you interact with our website,
            including IP addresses, browser types, and pages visited.
          </li>
        </ul>
        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>
            Order Processing: To process and fulfill your orders, including
            customization requests.
          </li>
          <li>
            Communication: To communicate with you about your orders, respond to
            inquiries, and send promotional materials if you have opted in.
          </li>
          <li>
            Improvement: To improve our website, products, and services based on
            user feedback and usage data.
          </li>
          <li>
            Legal Compliance: To comply with legal obligations and protect our
            rights.
          </li>
        </ul>
        <h3>4. Sharing Your Information</h3>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul>
          <li>
            Service Providers: Third-party vendors who assist in order
            fulfillment, payment processing, and website maintenance.
          </li>
          <li>
            Legal Requirements: When required by law or to protect our rights
            and safety.
          </li>
        </ul>
        <h3>5. Data Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. These measures include encryption, secure
          servers, and access controls.
        </p>
        <h3>6. Cookies</h3>
        <p>
          Our website uses cookies to enhance your browsing experience. You can
          choose to disable cookies through your browser settings, but this may
          affect the functionality of our website.
        </p>
        <h3>7. Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul>
          <li>Email: mithilacolors@gmail.com</li>
          <li>Phone: +91 7644040550</li>
        </ul>
        <p>
          <strong>Effective Date:</strong> 25 Oct 2024
        </p>
      </>
    ),
    refund: (
      <>
        <p>
          Welcome to Mithila Colors, where we offer unique and customizable
          Mithila painting cloths tailored to the preferences of our customers.
          These Terms of Service (“Terms”) govern your use of our website and
          the services we provide. By accessing or using our website, you agree
          to comply with these Terms.
        </p>

        {/* ... (other terms sections) ... */}

        <h3>6. Returns, Refunds, and Cancellations</h3>
        <h4>1. Return Policy</h4>
        <p>
          Due to the custom-made nature of our Mithila painting cloths, the
          following return conditions apply:
        </p>
        <h5>1.1 Custom Orders</h5>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Non-Returnable:
            Customizable Mithila painting cloths are customized to your specific
            preferences, and as such, <strong>we do not accept returns</strong>{" "}
            on customized products unless there is a defect or damage upon
            arrival.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Defective or Damaged
            Items: If you receive a product that is defective or damaged, you
            may return it for a replacement or refund. You must notify us within{" "}
            <strong>24 hours of receiving</strong>
            the product. Customers must record a video while opening the parcel
            to provide evidence of the defect or damage.
          </li>
        </ul>

        <h4>2. Refund Policy</h4>
        <h5>2.1 Custom Orders</h5>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> No Refunds for
            Customization: As each customized Mithila painting cloth is uniquely
            created based on your preferences, we do not offer refunds on
            custom-made orders unless the item is defective or damaged during
            shipping.
          </li>
        </ul>

        <h5>2.2 Refunds for Defective/Damaged Products</h5>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> If you receive a defective
            or damaged product, you may be eligible for a full refund. Once the
            return is received and inspected, we will notify you via email
            regarding the status of your refund.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Refunds will be processed
            to the original payment method within{" "}
            <strong>10-15 business days</strong> of receiving the returned item.
          </li>
        </ul>

        <h4>3. Cancellation Policy</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> After Ordering, we may
            have already started processing your order, and cancellations will
            not be possible. If you want to cancel an order, then contact us
            within <strong>5 hours</strong>.
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> If your cancellation is
            approved (within the allowable time frames), we will issue a full
            refund to your original payment method within{" "}
            <strong>10-15 business days</strong>.
          </li>
        </ul>

        {/* ... (other terms sections) ... */}

        <h3>11. Contact Us</h3>
        <p>
          If you have any questions or concerns regarding these Terms or our
          services, please contact us at:
        </p>
        <ul>
          <li>
            <FaCheckCircle className={styles.icon} /> Email:
            mithilacolors@gmail.com
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Phone: +91 7644040550
          </li>
        </ul>

        <p>
          Thank you for choosing Mithila Colors. We hope you enjoy your
          personalized Mithila painting cloths!
        </p>

        <p>Effective Date: 25 Oct 2024</p>
      </>
    ),
  };

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.section}>
        <h2 onClick={() => handleToggle("terms")}>Terms and Conditions</h2>
        {activeSection === "terms" && (
          <div className={styles.termsContent}>{sections.terms}</div>
        )}
      </div>
      <div className={styles.section}>
        <h2 onClick={() => handleToggle("privacy")}>Privacy Policy</h2>
        {activeSection === "privacy" && (
          <div className={styles.termsContent}>{sections.privacy}</div>
        )}
      </div>
      <div className={styles.section}>
        <h2 onClick={() => handleToggle("refund")}>
          Refund and Cancellation Policy
        </h2>
        {activeSection === "refund" && (
          <div className={styles.termsContent}>{sections.refund}</div>
        )}
      </div>
    </div>
  );
};

export default AboutMithila;