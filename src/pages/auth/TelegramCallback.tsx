import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase/client";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  auth_date: number;
  hash: string;
}

const TelegramCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    const handleTelegramAuth = async () => {
      try {
        // Get the auth result from the URL hash
        const hash = window.location.hash;
        if (!hash) {
          toast({
            title: "Authentication Error",
            description: "No authentication data received",
            variant: "destructive",
          });
          navigate("/");
          return;
        }

        // Extract and parse the auth data
        const authData = decodeURIComponent(hash.replace("#tgAuthResult=", ""));
        const userData: TelegramUser = JSON.parse(authData);

        // Create a Supabase user object
        const { data: user, error } = await supabase.auth.signInWithOAuth({
          provider: "telegram",
          options: {
            queryParams: {
              telegram_user: JSON.stringify(userData),
            },
          },
        });

        if (error) {
          toast({
            title: "Authentication Error",
            description: error.message,
            variant: "destructive",
          });
          navigate("/");
          return;
        }

        if (user) {
          toast({
            title: "Success",
            description: "Successfully signed in!",
          });
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Auth error:", error);
        toast({
          title: "Authentication Error",
          description: "Failed to process authentication",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    handleTelegramAuth();
  }, [navigate, toast, supabase.auth]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Processing Authentication...</h2>
        <p>Please wait while we verify your credentials.</p>
      </div>
    </div>
  );
};

export default TelegramCallback;
