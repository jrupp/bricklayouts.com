import { Check, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Seo, SITE_URL } from './Seo';

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for personal builders and hobbyists',
      price: { monthly: 0, annual: 0 },
      features: [
        { text: 'Design, save & print 1 layout', included: true },
        // { text: '<strong>Browse</strong> Community Gallery', included: true },
        { text: 'Cloud storage', included: true },
        { text: 'Full parts library', included: true },
        { text: 'Custom shapes & labels', included: true },
        { text: 'Detailed parts list with purchase links', included: true },
        { text: '24/7 access to tutorials & support resources', included: true },
        // { text: 'Collaboration features', included: false },
      ],
      cta: 'Start Building',
      popular: true,
      url: 'https://app.bricklayouts.com/',
    },
    {
      name: 'Pro',
      description: 'For serious builders and small clubs',
      price: { monthly: 7, annual: 70 },
      features: [
        { text: '<strong>Unlimited</strong> saved layouts', included: true },
        { text: '<strong>Publish</strong> to community gallery', included: true },
        { text: 'Cloud storage & <strong>backups</strong>', included: true },
        { text: 'Full parts library', included: true },
        { text: 'Custom shapes & labels', included: true },
        { text: 'Detailed parts list with purchase links', included: true },
        { text: '24/7 access to tutorials & support resources', included: true },
        // { text: 'Collaboration (up to 5 members)', included: true },
      ],
      cta: 'Get Notified on Launch', // Was: Signup
      popular: false,
      url: `${SITE_URL}/pricing`, // Previous url was `${SITE_URL}/signup`
    },
    /* {
      name: 'Club',
      description: 'For LEGO® fan  clubs and large exhibitions',
      price: { monthly: 29, annual: 290 },
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Unlimited team members', included: true },
        { text: 'Advanced section management', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Custom parts & elements', included: true },
        { text: 'White-label exports', included: true },
        { text: 'Admin controls & permissions', included: true },
        { text: 'Dedicated account support', included: true },
      ],
      cta: 'Contact Us',
      popular: false,
    }, */
  ];

  // Build OfferCatalog schema for pricing plans
  const offerCatalogSchema = {
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/pricing#offers`,
    name: 'BrickLayouts Subscription Plans',
    itemListElement: plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      description: plan.description,
      availability: `https://schema.org/${plan.price.monthly === 0 ? 'InStock' : 'LimitedAvailability'}`,
      ...(plan.price.monthly !== 0 ? { availabilityStarts: new Date().toISOString() } : {}),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual,
        priceCurrency: 'USD',
        billingDuration: billingPeriod === 'monthly' ? 'P1M' : 'P1Y',
      },
      url: plan.url,
      category: plan.name,
    })),
  };

  return (
    <>
      <Seo
        title="Pricing"
        description="Simple, transparent pricing for BrickLayouts. Start free and upgrade as your LEGO® layouts grow."
        path="/pricing"
        pageType="CollectionPage"
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Pricing', url: `${SITE_URL}/pricing` },
        ]}
        additionalSchemas={[offerCatalogSchema]}
      />
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as your layouts grow.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-muted rounded-lg p-1">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md transition-colors cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-md transition-colors cursor-pointer ${
                  billingPeriod === 'annual'
                    ? 'bg-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <span className="ml-2 text-xs text-green-600">Save 17%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className={`grid md:grid-cols-${plans.length} gap-8 mb-16`}>
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 space-y-6 relative ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : 'border-2 border-border'
                }`}
              >
                {plan.popular ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                ) : (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-destructive text-primary-foreground px-4 py-1 rounded-full text-sm">
                    Coming Soon
                  </div>
                )}

                <div className="space-y-2">
                  <h3>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  {!plan.popular && (
                    <p className="text-sm text-muted-foreground"><b>This plan is coming soon.</b></p>
                  )}
                </div>

                <div className={`space-y-1 ${!plan.popular ? 'line-through text-muted-foreground' : ''}`}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl">
                      ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    {plan.price.monthly > 0 && (
                    <span className="text-muted-foreground">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                    )}
                  </div>
                  {billingPeriod === 'annual' && plan.price.annual > 0 && (
                  <p className="text-sm text-muted-foreground">
                    ${(plan.price.annual / 12).toFixed(2)}/month billed annually
                  </p>
                  )}
                </div>

                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  {plan.name === 'Club' ? (
                    <Link to="/contact">{plan.cta}</Link>
                  ) : (plan.name === 'Pro' ? (
                    <a href="#mailing-list">{plan.cta}</a>
                  ) : (
                    <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">{plan.cta}</a>
                  ))}
                </Button>

                <div className="space-y-3 pt-6 border-t">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={
                        feature.included ? '' : 'text-muted-foreground line-through'
                      }
                        dangerouslySetInnerHTML={{ __html: feature.text }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/5 border-2 border-primary/20">
              <h2 className="text-3xl text-center mb-8">All Plans Include</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>LEGO&reg; Track Library</h4>
                  <p className="text-sm text-muted-foreground">
                    Accurate LEGO&reg; brand train track pieces, curves, and switches, plus parts
                    from your favorite brands like BrickTracks
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>Cloud Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    Your layouts are safely stored in the cloud and accessible anywhere
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>Parts Lists</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatic generation of detailed parts lists for your designs
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>Community Gallery</h4>
                  <p className="text-sm text-muted-foreground">
                    Browse and get inspired by layouts from builders worldwide
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>Mobile & Desktop</h4>
                  <p className="text-sm text-muted-foreground">
                    Works on any device: desktop, tablet, or phone
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary">✓</div>
                  <h4>Regular Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    New features, LEGO&reg; parts, and compatible elements added regularly
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Can I change plans later?</h4>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect
                  immediately, and we'll prorate any charges.
                </p>
              </div>
              <div className="space-y-2">
                <h4>What happens to my layouts if I downgrade?</h4>
                <p className="text-muted-foreground">
                  Your layouts are never deleted. If you downgrade to Free, you'll need to choose
                  which 1 layout to keep active, but you can always upgrade again to access all
                  your saved work. If you have more questions about a specific situation,
                  please <a href="/contact"><u>contact us</u></a>.
                </p>
              </div>
              <div className="space-y-2">
                <h4>What payment methods do you accept?</h4>
                <p className="text-muted-foreground">
                  We accept all major credit cards (Visa, MasterCard, American Express, Discover).
                </p>
              </div>
              <div className="space-y-2">
                <h4>Is there a setup fee?</h4>
                <p className="text-muted-foreground">
                  No setup fees, ever. You only pay for your subscription plan.
                </p>
              </div>
              <div className="space-y-2">
                <h4>Can I cancel anytime?</h4>
                <p className="text-muted-foreground">
                  Absolutely. You can cancel your subscription at any time with no penalties.
                  You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h4>Do you offer discounts for larger LEGO&reg; fan clubs or groups?</h4>
                <p className="text-muted-foreground">
                  Yes! If you have a club with more than 20 members, please contact us for special
                  pricing.
                </p>
              </div>
            </div>
          </div>

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
          <div className="mt-20 text-center space-y-6 bg-primary text-white rounded-2xl p-12">
            <h2 className="text-3xl">Ready to Start Designing?</h2>
            <p className="max-w-xl mx-auto opacity-90">
              Get started with BrickLayouts for free today. No credit card required.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">Create Your First Layout</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
