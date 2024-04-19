const Footer = () => {
  const footerData = [
    {
      text: "Terms & Conditions",
      href: "https://goldenyearsbenefits.com/terms",
    },
    { text: "Privacy Policy", href: "https://goldenyearsbenefits.com/privacy" },
    {
      text: "CCPA",
      href: "https://goldenyearsbenefits.com/privacy.php#caresidents",
    },
  ];

  const footerLinks = (text: string, href: string) => {
    return (
      <div className="flex gap-3">
        <a className="link link-hover" href={href}>
          {text}
        </a>
        {text !== "CCPA" && <p className="text-blue-500">|</p>}
      </div>
    );
  };
  return (
    <div className="footer footer-center p-4 mt-12 mb-2 text-center max-w-6xl mx-auto text-xs flex gap-8 flex-col">
      <div className="flex gap-3 justify-center">
        {footerData.map((link) => footerLinks(link.text, link.href))}
      </div>
     
      <p>Copyright Golden Years Benefits © 2024 - All right reserved</p>

    </div>
  );
};

export default Footer;
