import { useEffect } from 'react';
import {
  Check, /* Users, */ Cloud, Layout, Shapes, ShoppingCart, MonitorSmartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Seo } from './Seo';

// Static screenshot paths (served from public/screenshots/)
const screenshotCreateLayout = '/screenshots/screenshot-create-layout.png';
const screenshotCollaborate = '/screenshots/screenshot-collaborate.png';
const screenshotCustomShapes = '/screenshots/screenshot-custom-shapes.png';
const screenshotHero = '/screenshots/screenshot-hero.png';
const screenshotRoadmap = '/screenshots/roadmap.png';

export function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: Layout,
      title: 'Create Any Layout',
      description: 'Design LEGO® scale train layouts, city displays, or any custom arrangement to fit your space—from a dining room table to massive exhibition halls.',
    },
    // {
    //   icon: Users,
    //   title: 'Collaborate with Your Club',
    //   description: 'Each member designs their own section while the group leader arranges
    // everything into one seamless display. Perfect for LEGO® fan clubs and events.',
    // },
    {
      icon: Cloud,
      title: 'Cloud Storage & Sharing',
      description: 'Store your designs securely in the cloud, share them privately (COMING SOON) with your team, or publish to our community gallery (COMING SOON) for everyone to see.',
    },
    {
      icon: Shapes,
      title: 'Extensive Parts Library',
      description: 'Access thousands of official LEGO® elements and compatible parts. Add custom shapes, baseplates, tables, and labels to bring your vision to life.',
    },
    {
      icon: ShoppingCart,
      title: 'Automated Parts Lists',
      description: 'BrickLayouts generates detailed parts lists with purchase links, so your vision moves seamlessly from plan to display without missing a piece.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Available Anywhere',
      description: 'Access your layout from your phone, laptop, tablet, or any internet-connected device.',
    },
  ];

  return (
    <>
      <Seo
        title="BrickLayouts — Build Stunning LEGO® Displays Together"
        description="BrickLayouts is the easiest way for LEGO® builders to design stunning displays together, from anywhere, on any device. Plan train layouts, city displays, and collaborative exhibitions."
        path="/"
        pageType="WebPage"
        breadcrumbs={[{ name: 'Home', url: 'https://www.bricklayouts.com/' }]}
        includeAppSchema
      />
      <div className="w-full text-center border-b" style={{ backgroundColor: '#fef9c3' }}>
        Bricklayouts is in active development — Join our <a href="#mailing-list"><u>Early Builder List</u></a> for updates & exclusive access.
      </div>
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm border border-accent/40">
                    ✨ Design LEGO® displays together
                  </div>
                  <h1 className="text-5xl lg:text-6xl">
                    Build Stunning LEGO® Displays Together
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    BrickLayouts is the easiest way for LEGO® builders to design stunning displays
                    together, from anywhere, on any device.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">Start Building</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#mailing-list">Join Mailing List</a>
                  </Button>
                </div>
                <div className="flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span>Cloud storage included</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                  <img
                    src={screenshotHero}
                    alt="BrickLayouts app interface"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Roadmap */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative order-2 lg:order-1">
                <img
                  src={screenshotRoadmap}
                  alt="Roadmap for BrickLayouts"
                  className="rounded-2xl shadow-xl border-2 border-primary/20"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl">Roadmap</h2>
                <p className="text-xl text-muted-foreground">
                  We&apos;re a small team building the layout planner we always wished existed.
                  BrickLayouts is evolving <strong>fast</strong>, and early users directly
                  influence what we build next.
                </p>
                <Button size="lg" asChild>
                  <a className="plausible-event-name=Open+Roadmap" href="https://bricklayouts.canny.io/">View & Vote on the Roadmap</a>
                </Button>
              </div>
            </div>
            <hr className="border-b-2 border-accent/40" />

            {/* Create any layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl">Create Any Layout to Fit Your Needs</h2>
                <p className="text-xl text-muted-foreground">
                  Whether you're planning a figure-eight train track, a sprawling city layout, or
                  a custom display for your home, BrickLayouts gives you the flexibility to design
                  exactly what you envision. Start from scratch or use our extensive library of
                  LEGO® track pieces, baseplates, and accessories.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Integrated library of LEGO® train track pieces including curves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Drag-and-drop interface for quick layout design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      Start building quickly by placing tables, roads, baseplates, or buildings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      Design your entire room including walls and furniture and place your layout
                      accordingly
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src={screenshotCreateLayout}
                  alt="Create any layout to fit your needs"
                  className="rounded-2xl shadow-xl border-2 border-primary/20"
                />
              </div>
            </div>

            {/* Collaborate */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src={screenshotCollaborate}
                  alt="Work together to plan collaborative displays"
                  className="rounded-2xl shadow-xl border-2 border-primary/20"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl">Work Together to Plan Collaborative Displays</h2>
                <p className="text-xl text-muted-foreground">
                  Perfect for LEGO&reg; fan clubs and group shows! Each team member can design
                  their own section independently, while the group leader seamlessly arranges all
                  sections into one cohesive display. Add labels to mark each builder's area and
                  coordinate colors, themes, and connections.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Assign sections to different builders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Real-time collaboration and updates (Coming Soon)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom labels and color-coding for organization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Custom shapes */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl">Add Custom Shapes, Baseplates, and Labels</h2>
                <p className="text-xl text-muted-foreground">
                  Go beyond standard pieces with custom shapes to represent scenery, buildings, or
                  non-LEGO&reg; elements. Add baseplates in any size, insert tables and furniture,
                  and label everything to keep your design organized and easy to understand at a
                  glance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Create custom shapes for trees, buildings, and scenery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Add baseplates, tables, and physical elements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Label sections with text and custom styling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Use layers to represent different heights</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src={screenshotCustomShapes}
                  alt="Add custom shapes, baseplates, and labels"
                  className="rounded-2xl shadow-xl border-2 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl">Everything You Need to Bring Your Vision to Life</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seamlessly store your designs in the cloud and share them privately or publish them
                to a browsable community gallery. With an extensive library of LEGO® elements and
                compatible parts, there is no limit to what you can design.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors bg-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Full Elevator Pitch */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-6 text-center">
                <h2 className="text-4xl">From Vision to Display- Seamlessly</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  BrickLayouts is the easiest way for LEGO® builders to design stunning displays
                  together, from anywhere, on any device. Seamlessly store your designs in the
                  cloud and share them privately or publish them to a browsable community gallery.
                  When building with a group, each member designs their own section, while the
                  group leader arranges all the sections into one seamless display. With an
                  extensive library of LEGO® elements and compatible parts, there is no limit to
                  what you can design. Plus, BrickLayouts automatically generates a detailed parts
                  list with links for easy purchasing, so your vision moves seamlessly from plan to
                  display without missing a piece.
                </p>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">Start Designing Today</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="mailing-list" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl">Stay Updated with BrickLayouts</h2>
            <p className="text-xl text-muted-foreground">
              Join our mailing list to receive the latest updates, tips, and exclusive offers from
              BrickLayouts.
            </p>
            <div className="flex justify-center">
              <iframe
                title="Subscribe to BrickLayouts mailing list"
                src="https://subscribe-forms.beehiiv.com/d531b2e0-5401-4dcb-acba-19536697b5e9"
                className="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: '400px',
                  height: '180px',
                  margin: '0',
                  borderRadius: '0px 0px 0px 0px',
                  backgroundColor: 'transparent',
                  boxShadow: '0 0 #0000',
                  maxWidth: '100%',
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl">Ready to Design Your Next LEGO&reg; Display?</h2>
            <p className="text-xl opacity-90">
              Join LEGO&reg; enthusiasts and clubs worldwide who are planning better displays with
              BrickLayouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">Get Started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
