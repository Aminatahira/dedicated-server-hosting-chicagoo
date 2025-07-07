import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a
              href="https://arzhost.com/"
              className="text-2xl font-bold text-primary"
            >
              ARZ Host
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Chicago Dedicated Hosting
              </a>
              <a
                href="https://arzhost.com/dedicated-servers/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Dedicated Servers
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <a href="https://arzhost.com/vps/">Get Started</a>
            </Button>
            <Button asChild>
              <a href="https://www.arzhost.com/contact-us/">Talk to Advisor</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
