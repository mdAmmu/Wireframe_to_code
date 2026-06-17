"use client"
import { supabase } from '@/configs/supabaseConfig';
import React from 'react'

function Authentication({ children }: any) {
    const onButtonPress = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/dashboard`
            }
        });
        if (error) {
            console.error("Error signing in:", error.message);
        }
    }
    return (
        <div>
            <div onClick={onButtonPress}>
                {children}
            </div>
        </div>
    )
}

export default Authentication