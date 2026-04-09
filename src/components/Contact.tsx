import { Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Seo, SITE_URL } from './Seo';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const tempData = new FormData(e.target);
    tempData.append('access_key', '42e47037-e494-4816-971f-80d5289ead5c');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: tempData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success('Message sent! We\'ll get back to you soon.');
      setFormData({
        name: '', email: '', subject: '', message: '',
      });
    } else {
      toast.error('Error. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@bricklayouts.com',
      link: 'mailto:hello@bricklayouts.com',
    },
    {
      icon: MessageSquare,
      title: 'Community Request Board',
      content: 'Submit feedback or feature requests on our community request board.',
      link: 'https://bricklayouts.canny.io/feature-requests',
    },
  ];

  // ContactPoint schema for structured contact info
  const contactPointSchema = {
    '@type': 'ContactPoint',
    '@id': `${SITE_URL}/contact#contactpoint`,
    contactType: 'customer support',
    email: 'hello@bricklayouts.com',
    availableLanguage: 'English',
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Have a question about BrickLayouts? Need help with your LEGO® display? Get in touch with our team."
        path="/contact"
        pageType="ContactPage"
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ]}
        additionalSchemas={[contactPointSchema]}
      />
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-5xl">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question about BrickLayouts? Need help with your LEGO&reg; display? We're here
              to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3>Contact Information</h3>
                <p className="text-muted-foreground">
                  Choose your preferred way to reach us.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-4">
                    <a
                      href={info.link}
                      className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="p-6 hidden space-y-4 bg-gradient-to-br from-primary/5 to-secondary/10 border-2 border-primary/20">
                <h4>Support Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span>Community Forums</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2 border-t">
                  Response times are typically under 24 hours
                </p>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl">Common Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to questions you may have.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-3">
                <h4>How quickly will I get a response?</h4>
                <p className="text-muted-foreground text-sm">
                  We value your time. We typically respond to all inquiries within 24 hours during
                  weekdays. We will respond to contact via email for all requests.
                </p>
              </div>
              <div className="space-y-3">
                <h4>Do you offer technical support?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes! We respond by email and can schedule video calls for more in-depth
                  assistance.
                </p>
              </div>
              <div className="space-y-3">
                <h4>Can I request new LEGO&reg; parts?</h4>
                <p className="text-muted-foreground text-sm">
                  Absolutely! We're always adding new elements to our library. Submit your
                  requests, view ones from other people, or vote for your favorites, through
                  our
                  {' '}
                  <a className="plausible-event-name=Open+Feature+Requests" href="https://bricklayouts.canny.io/feature-requests">
                    <u>community requests board</u>
                  </a>
                  . We are also open to requests via email.
                </p>
              </div>
              <div className="space-y-3">
                <h4>Do you have tutorials?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes! Check out our
                  {' '}
                  <a href="https://www.youtube.com/@BrickLayouts">
                    <u>YouTube Channel</u>
                  </a>
                  {' '}
                  for video tutorials, getting started guides, and tips for
                  designing collaborative layouts with your club. You can also gain inspiration
                  from others in the community gallery (COMING SOON).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
