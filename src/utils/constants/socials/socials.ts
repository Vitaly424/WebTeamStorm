import vk from '@/app/assets/images/icons/vk.svg';
import telegram from '@/app/assets/images/icons/telegram.svg';
import email from '@/app/assets/images/icons/email.svg';
import whatsApp from '@/app/assets/images/icons/whats-app.svg';
import skype from '@/app/assets/images/icons/skype.svg';
import { Social } from './type.ts';

export const socials: Social[] = [
    {
        id: 1,
        url: vk,
        alt: 'vk',
        link: '#'
    },
    {
        id: 2,
        url: telegram,
        alt: 'telegram',
        link: '#'
    },
    {
        id: 3,
        url: email,
        alt: 'email',
        link: '#'
    },
    {
        id: 4,
        url: whatsApp,
        alt: 'whatsApp',
        link: '#'
    },
    {
        id: 5,
        url: skype,
        alt: 'skype',
        link: '#'
    }
]
