import Image from "next/image";

export default function OurSpace() {
    return (
        <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Spaces</h1>
                <div className="space-y-12 max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-12">
                    <p >
                        We have two cozy locations — Bishan and Beauty World. The Bishan classroom is just a 3 minutes walk from Bishan MRT,
                        hosting up to 24 students, and within close proximity to Raffles Institution, Junction 8 and Bishan Public Library.
                    </p>
                    <p>
                        Our Beauty World outlet is also similarly just 3 minutes away from Beauty World MRT. Our Students can enjoy an amazing panoramic view
                        from the 14th floor as well as a conducive self-study area there.
                    </p>
                    <p>
                        Both locations are designed for comfort and fully equipped with teaching equipment like in-house projectors and whiteboards. We intend to keep our class sizes small,
                        and have dual tutors for large classes to ensure every student receives the help they need.
                    </p>
                </div>

                {/* Images Section */}
                <div className="space-y-12">
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8">Bishan Main Branch</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                                <Image
                                    src="/bishan_classroom1.png"
                                    alt="Classroom photo 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                                <Image
                                    src="/bishan_classroom2.png"
                                    alt="Classroom photo 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8">Beauty World Outlet</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                                <Image
                                    src="/bw_classroom1.png"
                                    alt="Classroom photo 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                                <Image
                                    src="/bw_classroom2.png"
                                    alt="Classroom photo 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
