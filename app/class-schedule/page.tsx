'use client';
import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ScheduleFilter from '@/components/filter_schedule';

export default function SchedulePage() {
    const schedule = [
        { day: 'Monday', time: '7:00 - 9:00 pm', subject_short: 'J1 Chem', subject_long: 'J1 Chemistry', tutor: 'Elijah' },

        { day: 'Tuesday', time: '8:00 - 10:00 pm', subject_short: 'Free Slot', subject_long: 'Free Slot', tutor: '' },

        { day: 'Wednesday', time: '1:30 - 3:30 pm', subject_short: 'Free Slot', subject_long: 'Free Slot', tutor: '' },
        { day: 'Wednesday', time: '5:00 - 7:00 pm', subject_short: 'J1 Phy', subject_long: 'J1 Physics', tutor: 'Tenor ' },
        { day: 'Wednesday', time: '7:00 - 9:00 pm', subject_short: 'J1/J2 GP', subject_long: 'J1/J2 General Paper', tutor: 'Tenor' },

        { day: 'Thursday', time: '3:30 - 5:30 pm', subject_short: 'Free Slot', subject_long: 'Free Slot', tutor: '' },
        { day: 'Thursday', time: '5:30 - 7:30 pm', subject_short: 'J2 Chem', subject_long: 'J2 Chemistry', tutor: 'Elijah' },
        { day: 'Thursday', time: '7:30 - 9:30 pm', subject_short: 'J1 GP', subject_long: 'J1 General Paper', tutor: 'Tenor' },

        { day: 'Friday', time: '3:00 - 5:00 pm', subject_short: 'Free Slot', subject_long: 'Free Slot', tutor: '' },
        { day: 'Friday', time: '5:00 - 7:00 pm', subject_short: 'J2 Math', subject_long: 'J2 Mathematics', tutor: 'Jaryl' },
        { day: 'Friday', time: '7:00 - 9:00 pm', subject_short: 'J2 Bio', subject_long: 'J2 Biology', tutor: 'Kaiser' },

        { day: 'Saturday', time: '8:30 - 10:30 am', subject_short: 'J1 Bio', subject_long: 'J1 Biology', tutor: 'Kaiser' },
        { day: 'Saturday', time: '3:30 - 5:30 pm', subject_short: 'J1 Chem', subject_long: 'J1 Chemistry', tutor: 'Elijah' },
        { day: 'Saturday', time: '5:30 - 7:30 pm', subject_short: 'J2 GP', subject_long: 'J2 General Paper', tutor: 'Tenor' },
        { day: 'Saturday', time: '7:30 - 9:30 pm', subject_short: 'J2 Bio', subject_long: 'J2 Biology', tutor: 'Kaiser' },

        { day: 'Sunday', time: '8:30 - 10:30 am', subject_short: 'Free Slot', subject_long: 'Free Slot', tutor: '' },
        { day: 'Sunday', time: '3:30 - 5:30 pm', subject_short: 'J2 Physics', subject_long: 'J2 Physics', tutor: 'Jaryl' },
        { day: 'Sunday', time: '5:30 - 7:30 pm', subject_short: 'J2 Math', subject_long: 'J2 Mathematics', tutor: 'Jaryl' },
        { day: 'Sunday', time: '7:30 - 9:30 pm', subject_short: 'J1 Math', subject_long: 'J1 Mathematics', tutor: 'Jaryl' },
    ];

    const subjectColors = {
        'GP': 'bg-blue-50 border-blue-200 text-blue-900',
        'Chem': 'bg-red-50 border-red-200 text-red-900',
        'Phy': 'bg-yellow-50 border-yellow-200 text-yellow-900',
        'Bio': 'bg-green-50 border-green-200 text-green-900',
        'Math': 'bg-purple-50 border-purple-200 text-purple-900',
        'Free Slot': 'bg-slate-50 border-slate-200 text-slate-900',
    };

    const getSubjectColor = (subject_short: string) => {
        const key = ['GP', 'Chem', 'Phy', 'Bio', 'Math'].find(k => subject_short.includes(k));
        return subjectColors[key as keyof typeof subjectColors] || subjectColors['Free Slot'];
    };

    const [subjectFilter, setSubjectFilter] = useState('All Subjects');
    const [levelFilter, setLevelFilter] = useState('All Levels');

    const filteredSchedule = schedule.filter(lesson => {
        const subjectMatch =
            subjectFilter === 'All Subjects' || lesson.subject_long.includes(subjectFilter);

        const levelMatch =
            levelFilter === 'All Levels' || lesson.subject_long.includes(levelFilter);

        return subjectMatch && levelMatch;
    });

    const groupedSchedule = filteredSchedule.reduce<Record<string, typeof schedule>>((acc, lesson) => {
        if (!acc[lesson.day]) acc[lesson.day] = [];
        acc[lesson.day].push(lesson);
        return acc;
    }, {});

    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="min-h-screen max-w-7xl mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Vivota Class Schedule
                    </h1>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <p className="text-base sm:text-lg font-semibold">Economics Cafe</p>
                        </div>
                        <p className="text-base sm:text-lg">505B Bishan St 11, #01-422</p>
                    </div>
                </div>

                <div className="text-center mb-6">
                    <p className="text-base sm:text-lg text-white font-medium">
                        Free slot is now available for any subject with <span className='block text-amber-400'>minimum of 5 students</span>
                    </p>
                </div>

                <ScheduleFilter
                    subjectFilter={subjectFilter}
                    levelFilter={levelFilter}
                    onSubjectChange={setSubjectFilter}
                    onLevelChange={setLevelFilter}
                />

                <div className="space-y-6">
                    {dayOrder.map(day => {
                        const lessons = groupedSchedule[day];
                        if (!lessons) return null;

                        return (
                            <div key={day} className="border-l-4 border-slate-300 pl-4 sm:pl-6">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                                    {day}
                                </h2>
                                <div className="space-y-3">
                                    {lessons.map((lesson, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${getSubjectColor(lesson.subject_short)}
                                                }`}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 flex-shrink-0" />
                                                    <span className="font-semibold text-base sm:text-lg">
                                                        {lesson.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3 ml-8 sm:ml-0">
                                                    <span className="text-lg sm:text-xl font-bold md:hidden">
                                                        {lesson.subject_short}
                                                    </span>
                                                    <span className="text-lg sm:text-xl font-bold hidden md:inline">
                                                        {lesson.subject_long}
                                                    </span>
                                                    {lesson.tutor && (
                                                        <span className="px-2 py-1 rounded-full bg-white bg-opacity-60 text-sm font-medium">
                                                            {lesson.tutor}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center pt-24">
                <Link href="/contact-us">
                    <button
                        className="px-8 sm:px-12 md:px-18 lg:px-24 py-4 text-base sm:text-lg font-semibold bg-white 
                        text-black rounded-full shadow-lg transition-all 
                        hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                        active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                        Enrol Today!
                    </button>
                </Link>
            </div>
        </div>
    );
};
