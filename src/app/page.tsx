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
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-2 py-12">
                <div className="space-y-18 w-full max-w-md">
                    <div className="space-y-12 text-center">
                        <svg
                            viewBox="0 0 145 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto"
                            height={178}
                            width={290}
                        >
                            <path d="M30.0651 0.848442L20.0622 30.261H10.0028L0 0.848442H8.47698L15.2586 23.1907L22.0402 0.848442H30.0651ZM38.2369 9.89845H30.3252C30.7773 2.37564 36.824 0 43.6056 0C50.6698 0 56.3213 2.54533 56.3213 10.1813V30.261H48.4093V24.6048H48.1268C48.1268 24.6048 46.3184 31.1093 38.8022 31.1093C33.4332 31.1093 29.4774 28.6208 29.4774 23.1907C29.4774 17.7042 33.9985 15.2154 38.8586 13.971C43.7752 12.7266 48.4093 12.3306 48.4093 9.05001C48.4093 6.73096 46.7139 5.37345 43.6056 5.37345C40.2148 5.37345 38.3499 6.73095 38.2369 9.89845ZM48.4093 15.4415C47.1096 16.6295 44.4535 17.2515 42.193 17.8173C39.6498 18.4395 37.5023 19.7403 37.5023 22.3421C37.5023 24.6048 39.0847 26.0189 41.6277 26.0189C46.9964 26.0189 48.4093 19.7969 48.4093 15.4415ZM59.1269 40.4423V0.848442H66.7564V4.80783H67.0389C67.0389 4.80783 69.5819 0 76.0809 0C84.558 0 88.7963 7.35313 88.7963 15.5546C88.7963 23.7562 84.558 31.1093 76.0809 31.1093C69.8646 31.1093 67.3214 27.15 67.3214 27.15H67.0389V40.4423H59.1269ZM66.7564 15.5546C66.7564 20.8716 69.0168 25.1704 73.8205 25.1704C78.6242 25.1704 80.8846 20.8716 80.8846 15.5546C80.8846 10.2378 78.6242 5.93907 73.8205 5.93907C69.0168 5.93907 66.7564 10.2378 66.7564 15.5546ZM99.2758 9.89845H91.3638C91.8159 2.37564 97.8629 0 104.645 0C111.709 0 117.36 2.54533 117.36 10.1813V30.261H109.448V24.6048H109.165C109.165 24.6048 107.357 31.1093 99.8408 31.1093C94.4721 31.1093 90.5162 28.6208 90.5162 23.1907C90.5162 17.7042 95.0372 15.2154 99.8974 13.971C104.814 12.7266 109.448 12.3306 109.448 9.05001C109.448 6.73096 107.753 5.37345 104.645 5.37345C101.254 5.37345 99.3887 6.73095 99.2758 9.89845ZM109.448 15.4415C108.148 16.6295 105.492 17.2515 103.232 17.8173C100.688 18.4395 98.5409 19.7403 98.5409 22.3421C98.5409 24.6048 100.123 26.0189 102.667 26.0189C108.035 26.0189 109.448 19.7969 109.448 15.4415ZM120.166 30.261V0.848442H128.078V7.07033H132.034C135.424 7.07033 136.555 7.07033 136.555 3.39377V0.848442H144.466V4.24219C144.466 10.7469 142.206 12.7266 134.012 12.7266H128.078V30.261H120.166ZM0.565131 69.2003H8.19443C8.19443 69.2003 8.19443 74.2909 14.4109 74.2909C18.6494 74.2909 19.7796 72.3113 19.7796 70.6144C19.7796 64.3927 1.13026 69.2003 1.13026 57.8879C1.13026 52.7973 5.9339 48.5549 13.8457 48.5549C25.1484 48.5549 26.8438 55.0597 26.8438 57.8879H19.2145C19.2145 57.8879 19.2145 53.9286 13.8457 53.9286C10.7375 53.9286 9.04213 55.5122 9.04213 57.3224C9.04213 62.413 27.6914 58.7362 27.6914 69.7661C27.6914 75.4223 22.888 79.6644 14.4109 79.6644C2.82567 79.6644 0.565131 72.5941 0.565131 69.2003ZM49.14 78.8161V67.2206H38.12V78.8161H30.2081V49.4035H38.12V60.9989H49.14V49.4035H57.052V78.8161H49.14ZM67.5289 64.1097C67.5289 69.4267 69.5634 73.7254 74.593 73.7254C79.6228 73.7254 81.6574 69.4267 81.6574 64.1097C81.6574 58.7929 79.6228 54.4941 74.593 54.4941C69.5634 54.4941 67.5289 58.7929 67.5289 64.1097ZM59.6171 64.1097C59.6171 55.5122 64.9293 48.5549 74.593 48.5549C84.2569 48.5549 89.5691 55.5122 89.5691 64.1097C89.5691 72.7074 84.2569 79.6644 74.593 79.6644C64.9293 79.6644 59.6171 72.7074 59.6171 64.1097ZM92.1299 88.9974V49.4035H99.7591V53.3628H100.042C100.042 53.3628 102.585 48.5549 109.084 48.5549C117.561 48.5549 121.799 55.9082 121.799 64.1097C121.799 72.3113 117.561 79.6644 109.084 79.6644C102.867 79.6644 100.324 75.7051 100.324 75.7051H100.042V88.9974H92.1299ZM99.7591 64.1097C99.7591 69.4267 102.02 73.7254 106.823 73.7254C111.627 73.7254 113.888 69.4267 113.888 64.1097C113.888 58.7929 111.627 54.4941 106.823 54.4941C102.02 54.4941 99.7591 58.7929 99.7591 64.1097Z" className="fill-gray-100" />
                            <path d="M126.319 74.365C126.319 71.5673 128.606 69.2783 131.401 69.2783C134.196 69.2783 136.483 71.5673 136.483 74.365C136.483 77.1627 134.196 79.4518 131.401 79.4518C128.606 79.4518 126.319 77.1627 126.319 74.365Z" fill="#E13CF5" />
                        </svg>
                        <h1 className="mt-4 text-center text-6xl font-bold text-gray-50">
                            VAPAR SHOP
                        </h1>
                        <p className="whitespace-pre-line text-lg text-gray-50">
                            Международная сеть дизайнерских {'\n'}
                            вейп-шопов с оригинальной продукцией
                        </p>
                    </div>
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
                            <Youtube id="qcTcIBhMtDY" title="Vapar Shop x VS Cofee x Аквачистка"/>
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
                </div>
            </div>
        </main>
    );
}
