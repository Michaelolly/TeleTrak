import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export async function verifyTelegramAuth(userData: TelegramUser) {
  const { hash, ...data } = userData;
  
  // Create a sorted string of key=value pairs
  const dataCheckString = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key as keyof typeof data]}`)
    .join('\n');

  // Create secret hash using bot token
  const secretKey = crypto
    .createHash('sha256')
    .update(telegramBotToken)
    .digest();

  // Create a hash of the data check string
  const hmac = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  return hmac === hash;
}

export async function handleTelegramAuth(userData: TelegramUser) {
  try {
    // Verify the authentication data
    const isValid = await verifyTelegramAuth(userData);
    if (!isValid) {
      throw new Error('Invalid authentication data');
    }

    // Check if user exists in Supabase
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select()
      .eq('telegram_id', userData.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    // If user doesn't exist, create new user
    if (!existingUser) {
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([
          {
            telegram_id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            username: userData.username,
            photo_url: userData.photo_url,
          },
        ])
        .select()
        .single();

      if (insertError) throw insertError;
      return newUser;
    }

    // Update existing user
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        photo_url: userData.photo_url,
        last_login: new Date().toISOString(),
      })
      .eq('telegram_id', userData.id)
      .select()
      .single();

    if (updateError) throw updateError;
    return updatedUser;
  } catch (error) {
    console.error('Error handling Telegram auth:', error);
    throw error;
  }
}
