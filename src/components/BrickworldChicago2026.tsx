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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
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
              <p className="text-sm font-semibold text-primary">TBD</p>
              <h3 className="text-lg font-semibold">Seminar Title TBD</h3>
              <p className="text-sm text-muted-foreground">
                Details coming soon. Check back for the full schedule.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <p className="text-sm font-semibold text-primary">TBD</p>
              <h3 className="text-lg font-semibold">Seminar Title TBD</h3>
              <p className="text-sm text-muted-foreground">
                Details coming soon. Check back for the full schedule.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Newsletter Sign-Up */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
