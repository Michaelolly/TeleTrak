import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleTelegramCallback } from '@/api/auth';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    TelegramLoginWidget: {
      dataOnauth: (user: TelegramUser) => void;
    };
  }
}

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

interface TelegramLoginProps {
  botName: string;
  onAuth?: (user: TelegramUser) => void;
  buttonSize?: 'large' | 'medium' | 'small';
  cornerRadius?: number;
  requestAccess?: 'write' | 'read';
  showUserPhoto?: boolean;
}

const TelegramLogin = ({
  botName,
  onAuth,
  buttonSize = 'medium',
  cornerRadius = 8,
  requestAccess = 'write',
  showUserPhoto = true,
}: TelegramLoginProps) => {
  const navigate = useNavigate();
  const { setUser, setError } = useAuth();
  const { toast } = useToast();

  const handleAuth = useCallback(async (telegramUser: TelegramUser) => {
    try {
      const { user, isNewUser } = await handleTelegramCallback(telegramUser);
      setUser(user);
      onAuth?.(telegramUser);
      
      toast({
        title: isNewUser ? 'Welcome!' : 'Welcome back!',
        description: isNewUser 
          ? 'Your account has been created successfully.'
          : 'You have been logged in successfully.',
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Telegram login error:', error);
      setError(error instanceof Error ? error : new Error('Authentication failed'));
      
      toast({
        title: 'Authentication Failed',
        description: 'There was an error logging in with Telegram. Please try again.',
        variant: 'destructive',
      });
    }
  }, [onAuth, navigate, setUser, setError, toast]);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = `https://oauth.telegram.org/auth?bot_id=7987549773&origin=https://github.com/Michaelolly/TeleTrak.git&request_access=write`;
    script.async = true;
    script.setAttribute('data-telegram-login', 'TeleTrak_bot');
    script.setAttribute('data-size', buttonSize);
    script.setAttribute('data-radius', cornerRadius.toString());
    script.setAttribute('data-request-access', requestAccess);
    script.setAttribute('data-userpic', showUserPhoto.toString());
    script.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)');

    // Add script to document
    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    // Set up global callback
    window.TelegramLoginWidget = {
      dataOnauth: handleAuth,
    };

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [botName, buttonSize, cornerRadius, requestAccess, showUserPhoto, handleAuth]);

  return <div id="telegram-login-container" />;
};

export default TelegramLogin;
