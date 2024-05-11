"use client";
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link';
declare global {
    interface Window {
        MSStream?: any;
    }
}

function redirectToApp() {
    const userAgent = navigator?.userAgent || navigator?.vendor;
    if (userAgent === undefined || userAgent === null) {
        console.error('Failed to get userAgent');
        return;
    }
    if (/android/i.test(userAgent)) {
        console.log(
            'android, открытие приложения, если нет, то в гугл плей',
        );
        const androidIntentURL =
            'intent://com.getmeback.vshop#Intent;scheme=http;package=com.getmeback.vshop;end';

        window.location.href = androidIntentURL;

        setTimeout(() => {
            window.location.href =
                'https://play.google.com/store/apps/details?id=com.getmeback.vshop';
        }, 500);
    } else if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        !window.MSStream
    ) {
        console.log('ios, переход в wallet');
        window.location.href = 'https://vshop.pwa.getmeback.ru/';
    } else {
        console.log('не распознано, переход на таплинк');
        // window.location.href = '/';
    }
}

// Call the function on page load

// Call the function on page load
export default function Home() {
    redirectToApp();
    return (
        <>
            <div className="mt-4 flex justify-center">
                <AspectRatio ratio={17 / 19}>
                    <Image
                        src="/images/app.jpg"
                        width={540}
                        height={607}
                        alt="Приложение «Vapar Shop», 4% кэшбэка за покупки, 55 баллов в системе лояльности."
                        className="rounded-lg object-cover"
                        loading="lazy"
                    />
                </AspectRatio>
            </div>
            <p className="mt-4 space-y-4 text-xl  text-gray-50">
                Скачай наше приложение, зарегистрируйся и получи 55
                приветственных бонусных баллов!
            </p>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-purple-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vshop.pwa.getmeback.ru/"
                >
                    Скачать IOS
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-purple-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="intent://com.getmeback.vshop#Intent;scheme=http;package=com.getmeback.vshop;end"
                >
                    Скачать Android
                </Link>
            </div>
        </>
    );
}
