// components/ContactMap.tsx
export default function ContactMap() {
  return (
    <div className="contact-map card-dark">
      {/* Replace the src below with your own Google Maps embed URL */}
      <iframe
        className="contact-map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4406326315448!2d75.89101413488768!3d22.749023299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd5bf5f442f%3A0x9935eaddd6fd3a23!2sShagun%20arcade%20Vijay%20Nagar!5e0!3m2!1sen!2sin!4v1765373201744!5m2!1sen!2sin"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}