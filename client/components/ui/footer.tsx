export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a
              href="https://arzhost.com/"
              className="text-2xl font-bold text-primary mb-4 block"
            >
              ARZ Host
            </a>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional dedicated server hosting in Chicago. Performance,
              control, and local power for your business.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Website:{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-primary hover:underline"
                >
                  arzhost.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+16315948060"
                  className="text-primary hover:underline"
                >
                  +1 (631) 594-8060
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Chicago Dedicated Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/dedicated-servers/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dedicated Servers
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lifetime Web Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/vps/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  VPS Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.arzhost.com/about-us/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/terms-conditions/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/privacy-policy/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/disclaimer/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ARZ Host
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
