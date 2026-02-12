import { Calendar } from 'lucide-react';

export default function EnrollmentPage() {
    const trialClassLink = "https://forms.gle/2E3i3FqZ8yci8qh69";

    return (
        <div className="max-w-7xl mx-auto my-18 md:my-34 lg:my-38 px-8 sm:px-10 md:px-12 lg:px-14">

            <div className="container mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center py-12 md:py-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                        Get started with <span className='block sm:inline'>a free trial today!</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl font-semibold max-w-2xl mx-auto">
                        Kick-start your journey to academic excellence with one simple step
                    </p>
                </div>

                {/* Enrolment Btn */}
                <a
                    href={trialClassLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black border border-yellow-500 text-white text-center
                        py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-102 shadow-lg"
                >
                    <div className="flex items-center justify-center">
                        <Calendar className="w-6 mr-4"/>
                        <span className="text-xl md:text-2xl font-bold tracking-wide">Book a Trial Class</span>
                    </div>
                </a>
            </div>

            {/* Footer Note */}
            <div className="text-center font-semibold space-y-2 py-12 md:py-16">
                <p className="md:text-lg mb-4">
                    Our team will respond to your request as soon as possible to confirm your booking.
                </p>
                <p className="md:text-lg ">
                    Thank you for choosing Vivota Education!
                </p>
            </div>
        </div>
    );
}