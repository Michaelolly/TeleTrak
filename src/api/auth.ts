import { supabase } from '@/lib/supabase';
import { verifyTelegramAuth } from './telegram-auth';
import type { TelegramUser } from './telegram-auth';

export async function handleTelegramCallback(telegramData: TelegramUser) {
  try {
    // Verify the Telegram authentication data
    const isValid = await verifyTelegramAuth(telegramData);
    if (!isValid) {
      throw new Error('Invalid Telegram authentication data');
    }

    // Create auth user if doesn't exist
    const { data: authUser, error: signUpError } = await supabase.auth.signUp({
      email: `${telegramData.id}@telegram.user`,
      password: crypto.randomUUID(), // Generate a random password since we won't use it
    });

    if (signUpError) throw signUpError;
    if (!authUser.user) throw new Error('Failed to create auth user');

    // Check if user exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select()
      .eq('telegram_id', telegramData.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    // Create or update user
    const userData = {
      user_id: authUser.user.id,
      telegram_id: telegramData.id,
      first_name: telegramData.first_name,
      last_name: telegramData.last_name,
      username: telegramData.username,
      photo_url: telegramData.photo_url,
      last_login: new Date().toISOString(),
    };

    if (!existingUser) {
      // Create new user
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert([userData])
        .select()
        .single();

      if (createError) throw createError;
      return { user: newUser, isNewUser: true };
    }

    // Update existing user
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update(userData)
      .eq('telegram_id', telegramData.id)
      .select()
      .single();

    if (updateError) throw updateError;
    return { user: updatedUser, isNewUser: false };
  } catch (error) {
    console.error('Error in Telegram authentication:', error);
    throw error;
  }
}
