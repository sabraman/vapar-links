import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
    Carousel,
} from '@/components/ui/carousel';
import Youtube from '@/components/ui/Youtube';
export default function Home() {
    return (
        <>
            <Carousel className="mt-6 w-full max-w-md">
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={17 / 19}>
                                <Image
                                    src="/images/slide (1).jpg"
                                    width={540}
                                    height={607}
                                    alt="Интерьер вейп шопа Vapar Shop, с прилавком и полками, уставленными разнообразной вейп-продукцией"
                                    className="rounded-lg object-cover"
                                    priority
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={17 / 19}>
                                <Image
                                    src="/images/slide (2).jpg"
                                    width={540}
                                    height={607}
                                    alt="Интерьер вейп шопа Vapar Shop с подсвеченными полками, с различными жидкостями и устройствами, а также прилавком освещенным тусклым ораньжевым светом"
                                    className="rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={17 / 19}>
                                <Image
                                    src="/images/slide (3).jpg"
                                    width={540}
                                    height={607}
                                    alt="Молодая девушка стоит в ярко освещенном вейп шопе Vapar Shop с современными деревянными светильниками и неоновым освещением над головой. На ней серый свитшот и джинсы-клеш, а за ее спиной стоят полки с жидкостями и одноразками."
                                    className="rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={17 / 19}>
                                <Image
                                    src="/images/slide (4).jpg"
                                    width={540}
                                    height={607}
                                    alt="Интерьер вейп шопа Vapar Shop с деревянными стеллажами, на которых выставлены разнообразные жидкости для электронных сигарет и устройства для вейпинга. На переднем плане деревянная стойка с геометрическим узором."
                                    className="rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-purple-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vaparshop.ru/stores"
                >
                    Наши магазины
                </Link>
            </div>
            <h2 className="mt-4 text-left text-4xl font-light  text-gray-50">
                Система лояльности
            </h2>
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
            <h2 className="mt-8 text-left text-3xl font-light  text-gray-50">
                Следи за нами в социальных сетях
            </h2>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-pink-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.instagram.com/vaparshopspb/"
                >
                    Inst
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://t.me/vaparshopspb"
                >
                    Telegram
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-red-500 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-red-500/90  focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.youtube.com/@vaparshop/"
                >
                    Youtube
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-blue-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vk.com/vaparshop"
                >
                    VK
                </Link>
            </div>
            <h2 className="mt-4 text-left text-4xl font-light  text-gray-50">
                Присоединяйся к VAPARSHOP.TEAM
            </h2>
            <div className="mt-4 flex justify-center">
                <AspectRatio ratio={17 / 19}>
                    <Image
                        src="/images/vapar-team.jpg"
                        width={540}
                        height={607}
                        alt="Три полароидных фотографии: на одной изображена женщина, расчесывающая волосы, на другой мужчина, выдыхающий дым из вейпа в шапке и солнцезащитных очках, и третье фото двух людей, сидящих на трибунах."
                        className="rounded-lg object-cover"
                        loading="lazy"
                    />
                </AspectRatio>
            </div>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-purple-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vaparshop.ru/team"
                >
                    Узнать больше
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-pink-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.instagram.com/vaparshop.team"
                >
                    Inst
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://t.me/vaparshopteam"
                >
                    Telegram
                </Link>
            </div>
            <p className="mt-4 space-y-4 whitespace-pre-line  text-2xl text-gray-50">
                Становись партнером VAPARSHOP{'\n'}и зарабатывай от
                150.000 в месяц!
            </p>
            <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-4">
                <AspectRatio ratio={16 / 9}>
                    <Youtube id="qcTcIBhMtDY" title="Vapar Shop x VS Cofee x Аквачистка" />
                </AspectRatio>
            </div>
            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-purple-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vaparshop.ru/franchise"
                >
                    Сайти франшизы
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-pink-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.instagram.com/vaparshop.russia"
                >
                    Inst
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-red-500 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-red-500/90  focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.youtube.com/@vaparshoprussia"
                >
                    Youtube
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-blue-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://vk.com/vaparshop.russia"
                >
                    VK
                </Link>
            </div>
        </>
    );
}
