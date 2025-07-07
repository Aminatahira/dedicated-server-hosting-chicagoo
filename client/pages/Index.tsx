import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  MapPin,
  Briefcase,
  CheckCircle,
  Star,
  ArrowRight,
  Server,
  Globe,
  Lock,
  Mail,
  BarChart3,
  Users,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Located in Chicago
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Dedicated Server Hosting – Chicago
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Performance. Control. Local Power.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
            Looking for serious hosting power in the heart of the Midwest? Our{" "}
            <a
              href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
              className="text-primary hover:underline"
            >
              Chicago Dedicated Server Hosting
            </a>{" "}
            is built for businesses that demand full control, unbeatable speed,
            and enterprise-grade reliability. Whether you're running
            high-traffic websites, SaaS platforms, or large databases—our
            dedicated servers in Chicago deliver the performance you can count
            on.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Shield className="w-5 h-5" />
              <span>Fully Managed</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span>Located in Chicago</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Briefcase className="w-5 h-5" />
              <span>Business-Grade Uptime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://arzhost.com/vps/">
                Start Hosting Today <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.arzhost.com/contact-us/">
                Talk to a Hosting Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Dedicated Server Hosting */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              💡 What Is Dedicated Server Hosting?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A{" "}
              <a
                href="https://en.wikipedia.org/wiki/Dedicated_hosting_service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                dedicated server
              </a>{" "}
              means your business gets the full power of a physical machine—no
              sharing, no slowdowns, and no compromises. It's ideal for
              businesses with resource-heavy websites, sensitive customer data,
              or applications that must run 24/7 without interruption. Hosting
              your server in Chicago ensures fast connections across the U.S.,
              strong peering networks, and low latency for Midwest-based users.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Chicago */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            ✅ Why Choose Dedicated Hosting in Chicago?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <CardTitle>Blazing-Fast Midwest Connectivity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Located in Chicago's prime data center hub, our servers
                  deliver ultra-low latency and rapid response times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Server className="w-8 h-8 text-primary" />
                  <CardTitle>Complete Resource Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You get 100% of the server's resources—CPU, RAM,
                  disk—custom-configured to meet your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle>Rock-Solid Uptime</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With redundant power, cooling, and 24/7 monitoring, we
                  guarantee a 99.9% uptime SLA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <CardTitle>Port 25 Open – Email Friendly</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Need to run your own mail server or email automation? You're
                  free to send without restrictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  <CardTitle>Secure & Scalable</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  DDoS protection, daily backups, firewall options, and easy
                  scaling keep your business safe and future-ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              💰 Dedicated Server Plans & Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick the plan that fits your business goals—priced to scale,
              packed with power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Starter Dedicated</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$100</span>
                  /month
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Ideal for single-site hosting, development environments, or
                  remote teams.
                </p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://arzhost.com/vps/">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Enhanced Dedicated</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$110</span>
                  /month
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Best for fast-growing businesses and content-heavy websites.
                </p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://arzhost.com/vps/">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Pro Dedicated</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$120</span>
                  /month
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Designed for eCommerce stores, high-volume blogs, or web-based
                  apps.
                </p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://arzhost.com/vps/">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Premium Dedicated</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$160</span>
                  /month
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  High availability, performance boost, and optimized for
                  multitasking servers.
                </p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://arzhost.com/vps/">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Elite Dedicated</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$170</span>
                  /month
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Our most advanced setup—perfect for enterprises, SaaS, and
                  large databases.
                </p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://arzhost.com/vps/">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              ✅ Every plan includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Full root/admin access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>DDoS protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>24/7 live support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Optional cPanel/Plesk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Weekly backups</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Free migration</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <a href="https://arzhost.com/vps/">Compare All Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            💼 Who Should Use Chicago Dedicated Hosting?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <CardTitle>Growing Businesses & Agencies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deliver fast, consistent service to clients and customers
                  nationwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  <CardTitle>E-commerce & Retail Sites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Handle spikes in traffic, checkout processes, and user data
                  securely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <CardTitle>Analytics & Big Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Process and store large datasets with power and precision.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <CardTitle>Email Marketing Platforms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Send bulk mail from a secure, dedicated IP with no sending
                  limits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Server className="w-8 h-8 text-primary" />
                  <CardTitle>SaaS Applications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Run your web apps on high-availability architecture optimized
                  for speed and uptime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            💬 What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "Our business is based in Chicago, and the local hosting speed
                  is unmatched. Never had a second of downtime!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">— Jessica R., TechStartup Inc.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "The Pro plan gave our eCommerce store the edge we needed
                  during holiday sales. Amazing support."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">— Malik S., ShopConnect</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "We send millions of emails monthly—this is the only host that
                  allowed us to scale safely with open ports."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">— Tasha P., Campaigners.io</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🧠 Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  Q: Is the server really located in Chicago?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes. Our servers are physically hosted in a Chicago-based data
                  center with direct U.S. peering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q: Can I send emails from the server?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. All servers include open SMTP ports so you can run
                  your mail services without limits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q: What if I want to upgrade my server?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can upgrade anytime—whether it's more storage, CPU, or
                  RAM—with no migration needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q: Do you offer managed services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer fully managed support including OS updates,
                  security patches, and monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q: Will you migrate my site or app?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide free expert migration from your current host,
                  with no downtime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🔐 The Benefits You Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Local Chicago Speed
              </h3>
            </div>
            <div className="text-center">
              <Server className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Full Customization Access
              </h3>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Top-Tier Security & Isolation
              </h3>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Ready for High-Traffic Growth
              </h3>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                24/7 Dedicated Support
              </h3>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Instant Server Provisioning
              </h3>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Add-ons: cPanel, Plesk, extra IPs & more
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🚀 Start Hosting in Chicago Today
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Your business deserves a powerful, private, and professional hosting
            solution. Get the performance you expect—with the local support you
            deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://arzhost.com/vps/">
                Order Your Dedicated Server{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.arzhost.com/contact-us/">
                Speak with a Hosting Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
