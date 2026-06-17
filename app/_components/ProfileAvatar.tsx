"use client"
import { supabase } from '@/configs/supabaseConfig';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function ProfileAvatar() {

    const user = useAuthContext();
    const router = useRouter();
    const onButtonPress = async () => {
        await supabase.auth.signOut();
        router.replace('/');
    }
    return (
        <div>
            <Popover >
                <PopoverTrigger>
                    {user?.user?.user_metadata?.avatar_url && <img src={user?.user?.user_metadata?.avatar_url} alt='profile' className='w-[35px] h-[35px] rounded-full' />}
                </PopoverTrigger>
                <PopoverContent className='w-[100px] mx-w-sm'>
                    <Button variant={'ghost'} onClick={onButtonPress} className=''>Logout</Button>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ProfileAvatar