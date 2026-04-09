import {
  Target, Users, Rocket, Heart,
} from 'lucide-react';
import { Card } from './ui/card';
import { Seo, SITE_URL } from './Seo';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Approachable',
      description: 'We believe LEGO® planning tools should be easy to use, whether you\'re a solo builder or part of a large club.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Built for LEGO® enthusiasts, by LEGO® enthusiasts. SOON, you will be able to share your designs and get inspired by others in our community gallery.',
    },
    {
      icon: Rocket,
      title: 'Creative Freedom',
      description: 'We give you the tools to design anything from simple train loops to massive collaborative city displays.',
    },
    {
      icon: Heart,
      title: 'Builder Success',
      description: 'Your vision matters. We provide the tools, parts lists, and collaboration features to make your display a reality.',
    },
  ];

  const features = [
    {
      title: 'For Individual Builders',
      description: 'Planning a train layout or winter village on your dining room table? Want to set up a city in your basement like that guy you saw on Instagram? BrickLayouts helps you visualize your design, optimize your space, and generate a complete parts list before you buy a single brick.',
    },
    {
      title: 'For LEGO® Fan Clubs',
      description: 'Coordinate large collaborative displays with ease. Working together in BrickLayouts, each member designs their own module or section, and the group leader arranges everything into a cohesive exhibition layout. When everyone arrives, they can access the display plan right from their phone, tablet, or laptop with a QR code or personalized link!',
    },
    {
      title: 'For Exhibitions',
      description: 'Planning a public display at a convention or museum? Use BrickLayouts to map out your space, assign sections to builders, and ensure everything fits together perfectly on the big day.',
    },
  ];

  return (
    <>
      <Seo
        title="About BrickLayouts"
        description="Learn about BrickLayouts — we're passionate LEGO® builders on a mission to make collaborative display planning easy, creative, and accessible to everyone."
        path="/about"
        pageType="AboutPage"
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'About', url: `${SITE_URL}/about` },
        ]}
      />
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl">About BrickLayouts</h1>
            <p className="text-xl text-muted-foreground">
              We're passionate LEGO&reg; builders on a mission to make collaborative display
              planning easy, creative, and accessible to everyone from solo hobbyists to
              international clubs.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BrickLayouts was created by LEGO&reg; train enthusiasts who were tired of planning
                  layouts with pencil and paper, or struggling with generic design tools that
                  didn't understand LEGO geometry.
                </p>
                <p>
                  We knew there had to be a better way, a tool built specifically for LEGO&reg;
                  builders that could handle everything from curved train tracks to collaborative
                  city layouts. So we built it ourselves.
                </p>
                <p>
                  Today, BrickLayouts is used by individual builders, LEGO&reg; fan clubs, and
                  exhibition planners around the world to design stunning displays that come
                  together perfectly, both digitally and in real life.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-secondary/20 to-primary/10 border-2 border-primary/20">
                <div className="space-y-6">
                  <h3 className="text-2xl">Why BrickLayouts?</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>
                        Designed specifically for LEGO&reg; geometry and parts, and compatible
                        elements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>Built-in collaboration tools for clubs and groups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>Cloud storage so you never lose your designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>Detailed automatic parts lists with purchase links</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>Community gallery for inspiration and sharing(COMING SOON)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span>
                        Access your layouts from anywhere, on any device with a web browser
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid gap-12 items-center">
            <div className="space-y-12">
              <h2 className="text-center text-4xl">The Creators</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jessica and Justin&apos;s story began long before adulthood, back when LEGO&reg;
                  bricks covered bedroom floors and imagination did all the heavy lifting. After
                  they started dating in 2006, they rediscovered that shared childhood love and,
                  with the joy of having &quot;adult money,&quot; began building and designing
                  together again. A chance visit to a WamaLTC LEGO&reg; train club display at
                  Brunswick Train Day in 2007 reignited their passion and led them to join both the
                  Washington Metropolitan Area LEGO&reg; Train Club (WamaLTC) and the Washington
                  Metropolitan Area LEGO&reg; Users Group (WamaLUG). From there, they became
                  regular participants in community shows, public exhibitions, and train displays
                  throughout the DC and Maryland region.
                </p>
                <p>
                  Their involvement quickly grew beyond casual participation. In 2008, Jessica and
                  Justin joined BrickFair, a Northern Virginia based LEGO&reg; fan convention,
                  where they unexpectedly stepped into the role of Train and Town Theme
                  Coordinators, a position they have proudly held every year since. They&apos;ve
                  also been active members of LGMS (LEGO&reg; Gauge Modular Standard), a
                  train-focused group, contributing to collaborative layouts and displays across
                  Maryland and Washington, DC. Over more than 17 years in the AFOL (Adult Fan of
                  LEGO&reg;) community, they&apos;ve worked alongside countless builders,
                  organizers, and vendors, forming deep connections and a strong understanding of
                  how large-scale LEGO&reg; displays come together.
                </p>
                <p>
                  It was through years of coordinating events, planning layouts, and supporting
                  fellow builders that the idea for this project was born. Jessica spent years
                  sketching table layouts on graph paper, constantly erasing and rearranging as
                  plans evolved, while Justin identified the limitations and pain points in
                  existing layout tools. With two wildly creative ADHD brains making unexpected
                  connections, they set out to build something better- something flexible, visual,
                  and easy to carry right in your pocket. Rooted in community and shaped by
                  real-world experience, this tool is built by fans, for fans, and you&apos;re
                  warmly invited to build alongside them.
                </p>
                <p>
                  You will find Justin and Jessica at plenty of upcoming events as they look forward
                  to sharing BrickLayouts with more people around the US, and eventually the world.
                  You might even get to meet their incredibly brilliant daughters, whom they build
                  with frequently as well.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="p-6 space-y-4 text-center border-2 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3>{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl">Who Uses BrickLayouts?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From hobbyists to professional exhibition planners, BrickLayouts adapts to your
                needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="hidden bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-12 border-2 border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl">BrickLayouts by the Numbers</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl text-primary">100+</div>
                <p className="text-muted-foreground">Layouts Designed</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl text-primary">10+</div>
                <p className="text-muted-foreground">Countries</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl text-primary">5+</div>
                <p className="text-muted-foreground">LEGO&reg; fan Clubs</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl text-primary">25+</div>
                <p className="text-muted-foreground">LEGO&reg; Parts</p>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl">Join the BrickLayouts Community</h2>
            <p className="text-xl text-muted-foreground">
              Share your creations, get inspired by others, and connect with LEGO&reg; builders
              around the world. Whether you're building trains, cities, or custom displays, you'll
              find your people here.
            </p>
            <p className="text-sm text-muted-foreground italic">
              LEGO&reg; is a trademark of the LEGO&reg; Group, which does not sponsor, authorize, or
              endorse this application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
