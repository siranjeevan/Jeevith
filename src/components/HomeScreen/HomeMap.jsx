export default function HomeMap() {
  return (
    <div style={{ height: "200px", width: "50%", borderRadius: "16px", overflow: "hidden" }}>
      <iframe
        title="My Home"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.312121430973!2d78.7806!3d10.0506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab2e4e6fdc07%3A0x7f55d54db4f8fa75!2sKoviloor%2C%20Tamil%20Nadu%20630307!5e0!3m2!1sen!2sin!4v1692222222222!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
}
