import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { Seo, SITE_URL } from './Seo';

export function SignUp() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignIn && formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!isSignIn && !formData.agreeToTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    // In a real app, this would authenticate with a backend
    toast.success(isSignIn ? 'Welcome back!' : 'Account created successfully!');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    });
  };

  const handleSocialAuth = (provider: string) => {
    // In a real app, this would initiate OAuth flow
    toast.info(`${provider} authentication would be initiated here`);
  };

  return (
    <>
      <Seo
        title="Sign Up"
        description="Create your free BrickLayouts account and start designing stunning LEGO® displays today. No credit card required."
        path="/signup"
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Sign Up', url: `${SITE_URL}/signup` },
        ]}
      />
      <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <Card className="w-full max-w-md p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl">{isSignIn ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="text-muted-foreground">
              {isSignIn
                ? 'Sign in to continue designing your LEGO layouts'
                : 'Start designing your LEGO displays today'}
            </p>
          </div>

          {/* Social Auth Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialAuth('Google')}
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-muted-foreground text-sm">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isSignIn && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {isSignIn && (
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                  onClick={() => toast.info('Password reset email would be sent')}
                >
                  Forgot password?
                </button>
                )}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            {!isSignIn && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
            )}

            {!isSignIn && (
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked: boolean | 'indeterminate') => setFormData({ ...formData, agreeToTerms: checked === true })}
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            )}

            <Button type="submit" className="w-full">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Toggle Sign In/Sign Up */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
            </span>
            <button
              type="button"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  agreeToTerms: false,
                });
              }}
              className="text-primary hover:underline"
            >
              {isSignIn ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          {/* Additional Info */}
          {!isSignIn && (
          <div className="text-center text-sm text-muted-foreground bg-gradient-to-br from-primary/5 to-secondary/10 rounded-lg p-4 border border-primary/20">
            <p>🎉 Start free and upgrade anytime</p>
            <p className="text-xs mt-1">No credit card required</p>
          </div>
          )}
        </Card>
      </div>
    </>
  );
}
