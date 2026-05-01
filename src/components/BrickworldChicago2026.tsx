import { useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Seo, SITE_URL } from './Seo';

export function BrickworldChicago2026() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Seo
        title="BrickLayouts at Brickworld Chicago 2026"
        description="Visit BrickLayouts at Brickworld Chicago 2026. Check out our seminar schedule, start using BrickLayouts, and sign up for updates."
        path="/bw26"
        pageType="WebPage"
        noIndex
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Brickworld Chicago 2026', url: `${SITE_URL}/bw26` },
        ]}
      />

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Brickworld Chicago 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Welcome, Brickworld Attendees!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thanks for scanning our flyer! Learn about our Brickworld seminars,
            try BrickLayouts for free, and stay in the loop on what&apos;s next.
          </p>
          <div className="pt-4">
            <Button size="lg" asChild>
              <a
                href="https://app.bricklayouts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=Open+BrickLayouts"
              >
                Open BrickLayouts App
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Seminar Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Seminar Schedule</h2>
            <p className="text-muted-foreground">
              Catch our sessions at Brickworld Chicago 2026.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Placeholder seminar cards — replace with real schedule */}
            <Card className="p-6 space-y-2">
              <p className="text-sm font-semibold text-primary">
                Thursday, 9:00AM - 9:50AM @ Euphoria
              </p>
              <h3 className="text-lg font-semibold">
                Design a layout to fit your space with BrickLayouts
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn how to design a LEGO® layout that fits your space using BrickLayouts. We
                walk builders through planning, scaling, and organizing layouts to maximize space,
                improve flow, and create cohesive displays. This is perfect for shows, home
                layouts, and collaborative builds.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <p className="text-sm font-semibold text-primary">
                Thursday, 12:00PM - 12:50PM @ Euphoria
              </p>
              <h3 className="text-lg font-semibold">
                Take your display planning digital with BrickLayouts
              </h3>
              <p className="text-sm text-muted-foreground">
                Take your layout planning digital with BrickLayouts. This session shows how to
                transform traditional pencil and graph-paper, build on the floor, or spreadsheet
                cell manipulation into an EASY online, portable layout plan you can access
                anywhere. Learn how digitizing your layout with BrickLayouts makes it easier to
                refine designs, collaborate with others, and bring your vision with you to shows,
                meetings, and builds.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <p className="text-sm font-semibold text-primary">
                Friday, 9:00AM - 9:50AM @ Euphoria
              </p>
              <h3 className="text-lg font-semibold">
                Advanced techniques of layout building with BrickLayouts
              </h3>
              <p className="text-sm text-muted-foreground">
                Level up your skills with an advanced deep dive into BrickLayouts. We'll transform
                an existing layout while exploring powerful features like templates, grouping,
                layers, configuration settings, keyboard shortcuts, and more. Plus you're welcome
                to bring a laptop to follow along hands-on.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <p className="text-sm font-semibold text-primary">
                Friday, 4:00PM - 4:50PM @ Euphoria
              </p>
              <h3 className="text-lg font-semibold">
                Collaborative group layout planning with BrickLayouts
              </h3>
              <p className="text-sm text-muted-foreground">
                BrickLayouts makes live, collaborative display planning simple, fast, and
                stress-free. Learn how individual builders can design their own modules while a
                group leader imports and arranges them into one cohesive layout within a shared
                space. Discover how using powerful collaboration and sharing tools works for groups
                of any size. Note: This presentation includes some features that are available as a
                paid subscription.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Newsletter Sign-Up */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 p-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Stay in the Loop</h2>
          <p className="text-muted-foreground">
            Sign up for the BrickLayouts newsletter to get product updates,
            building tips, and event announcements.
          </p>
          <div className="flex justify-center">
            <iframe
              title="Subscribe to BrickLayouts mailing list"
              src="https://subscribe-forms.beehiiv.com/d531b2e0-5401-4dcb-acba-19536697b5e9?utm_campaign=bw26&utm_medium=qrcode&utm_source=bw26_flyer"
              className="beehiiv-embed"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{
                width: '400px',
                height: '180px',
                borderRadius: '0px',
                border: 'none',
                margin: '0 auto',
                backgroundColor: 'transparent',
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
