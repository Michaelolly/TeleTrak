import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { handleTelegramCallback } from '@/api/auth';
import { useToast } from '@/hooks/use-toast';

const TelegramCallback = () => {
  const navigate = useNavigate();
  const { setUser, setError } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the Telegram auth data from the URL
        const params = new URLSearchParams(window.location.search);
        const authData = {
          id: Number(params.get('id')),
          first_name: params.get('first_name') || '',
          last_name: params.get('last_name') || undefined,
          username: params.get('username') || undefined,
          photo_url: params.get('photo_url') || undefined,
          auth_date: Number(params.get('auth_date')),
          hash: params.get('hash') || '',
        };

        // Validate required fields
        if (!authData.id || !authData.first_name || !authData.auth_date || !authData.hash) {
          throw new Error('Missing required Telegram authentication data');
        }

        const { user, isNewUser } = await handleTelegramCallback(authData);
        setUser(user);
        
        toast({
          title: isNewUser ? 'Welcome!' : 'Welcome back!',
          description: isNewUser 
            ? 'Your account has been created successfully.'
            : 'You have been logged in successfully.',
        });
        
        navigate('/dashboard');
      } catch (error) {
        console.error('Error handling Telegram callback:', error);
        setError(error instanceof Error ? error : new Error('Authentication failed'));
        
        toast({
          title: 'Authentication Failed',
          description: 'There was an error logging in with Telegram. Please try again.',
          variant: 'destructive',
        });
        
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate, setUser, setError, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Processing Telegram Login...</h1>
        <p className="text-gray-600">Please wait while we complete your authentication.</p>
      </div>
    </div>
  );
};

export default TelegramCallback;
