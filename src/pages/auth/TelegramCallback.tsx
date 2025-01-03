import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/components/ui/use-toast';
import type { User } from '@/lib/supabase';

const TelegramCallback = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the hash parameters from the URL
        const params = new URLSearchParams(window.location.hash.substring(1));
        const telegramId = Number(params.get('id'));
        
        if (!telegramId) {
          throw new Error('Invalid Telegram ID');
        }

        // Create user object matching the User type
        const user: User = {
          id: crypto.randomUUID(), // Generate a unique ID
          user_id: crypto.randomUUID(), // Generate a unique user ID
          telegram_id: telegramId,
          first_name: params.get('first_name') || '',
          last_name: params.get('last_name') || undefined,
          username: params.get('username') || undefined,
          photo_url: params.get('photo_url') || undefined,
          created_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        };

        // Store user data
        setUser(user);
        
        // Show success message
        toast({
          title: 'Successfully signed in!',
          description: `Welcome ${user.first_name}!`,
        });

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Error in Telegram callback:', error);
        toast({
          title: 'Error',
          description: 'Failed to authenticate with Telegram. Please try again.',
          variant: 'destructive',
        });
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate, setUser, toast]);

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-mint mx-auto mb-4" />
        <p>Authenticating...</p>
      </div>
    </div>
  );
};

export default TelegramCallback;
