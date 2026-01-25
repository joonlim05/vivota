'use client';
import { Eye } from 'lucide-react';

interface Subject {
    id: number;
    subject: string;
    posterImage: string;
    fileUrl: string;
}

export default function SampleNotesPage() {
    const subjects = [
        {
            id: 1,
            subject: 'Physics',
            posterImage: '/notes/physics_notes.png',
            fileUrl: 'https://drive.google.com/file/d/130jw4d4IKvD_Nc9mjGd9mBtmsiCEoBh3/view?usp=sharing'
        },
        {
            id: 2,
            subject: 'Chemistry',
            posterImage: '/notes/chemistry_notes.png',
            fileUrl: 'https://drive.google.com/file/d/1HAiyeEL0mZrrBDqZDasPZy4iGs8g3R43/view?usp=sharing'
        },
        {
            id: 3,
            subject: 'Mathematics',
            posterImage: '/notes/math_notes.png',
            fileUrl: 'https://drive.google.com/file/d/18TGS_xaKm3K5CUFMzPb3UISt4YsYNT9h/view?usp=sharing'
        },
        {
            id: 4,
            subject: 'Biology',
            posterImage: '/notes/biology_notes.png',
            fileUrl: 'https://drive.google.com/file/d/1cFirGkWOLq3CQPQ368Qr2r4DLNOzG_Q9/view?usp=sharing'
        },
        {
            id: 5,
            subject: 'General Paper',
            posterImage: '/notes/GP_notes.png',
            fileUrl: 'https://drive.google.com/file/d/12uIzRVK7MQHXtD1av6HDfOIzAhWry1uE/view?usp=sharing'
        },
    ];

    const handleView = (subject: Subject) => {
        window.open(subject.fileUrl, "_blank")
    };

    return (
        <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 md:mb-12">
                        Vivota's Sample Notes
                    </h1>
                    <p className="text-base md:text-lg text-center max-w-2xl mx-auto">
                        Looking for clear, well-organized study materials?
                        Vivota has put together a set of sample notes to help you revise key concepts quickly and
                        effectively. Have a look and get a taste of how Vivota makes learning easier,
                        clearer, and more engaging!
                    </p>
                </div>

                {/* --- Row 1: First 3 cards --- */}
                <div className="flex flex-col items-center gap-6 md:w-full lg:grid lg:grid-cols-3">
                    {subjects.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full min-w-2xs"
                        >
                            {/* Poster Image */}
                            <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                                <img
                                    src={item.posterImage}
                                    alt={`${item.subject} Notes Poster`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Subject Title & View Section */}
                            <div className="p-4 md:p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 text-center">
                                    {item.subject}
                                </h3>

                                <button
                                    onClick={() => handleView(item)}
                                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500
                                     hover:from-amber-400 hover:to-yellow-600 text-black font-semibold
                                      py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-200 
                                      flex items-center justify-center gap-2 shadow-md hover:shadow-lg 
                                      text-sm md:text-base"
                                >
                                    <Eye className="w-4 h-4 md:w-5 md:h-5" />
                                    View Sample
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Row 2: Last 2 cards centered --- */}
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:col-span-3 mt-6 lg:mt-8 w-full">
                    {subjects.slice(3).map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full min-w-2xs md:w-1/3"
                        >
                            {/* Poster Image */}
                            <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                                <img
                                    src={item.posterImage}
                                    alt={`${item.subject} Notes Poster`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Subject Title & View Section */}
                            <div className="p-4 md:p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 text-center">
                                    {item.subject}
                                </h3>

                                <button
                                    onClick={() => handleView(item)}
                                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500
                                     hover:from-amber-400 hover:to-yellow-600 text-black font-semibold
                                      py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-200 
                                      flex items-center justify-center gap-2 shadow-md hover:shadow-lg 
                                      text-sm md:text-base">
                                    <Eye className="w-4 h-4 md:w-5 md:h-5" />
                                    View Sample
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};