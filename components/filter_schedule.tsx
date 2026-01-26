import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

type ScheduleFilterProps = {
    subjectFilter: string;
    levelFilter: string;
    onSubjectChange: (value: string) => void;
    onLevelChange: (value: string) => void;
};

export default function ScheduleFilter({
    subjectFilter,
    levelFilter,
    onSubjectChange,
    onLevelChange,
}: ScheduleFilterProps) {
    const subjects = ['All Subjects', 'General Paper', 'Chemistry', 'Physics', 'Biology', 'Mathematics'];
    const levels = ['All Levels', 'J1', 'J2'];

    return (
        <div className="flex flex-col items-center sm:flex-row gap-4 sm:justify-center mb-8">

            <Listbox value={subjectFilter} onChange={onSubjectChange}>
                {({ open }) => (
                    <div className="relative w-40">
                        <ListboxButton className="w-full px-4 py-2 border rounded-lg text-white flex justify-between items-center
                        hover:border-amber-400 transition-colors duration-200 sm:text-lg">
                            <span className='ml-2'>{subjectFilter}</span>
                            <ChevronDown
                                className={`w-4 h-4 transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </ListboxButton>

                        {/* Animate dropdown appearance */}
                        <Transition
                            as={Fragment}
                            show={open}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white text-black z-10 shadow-lg">
                                {subjects.map((subject) => (
                                    <ListboxOption
                                        key={subject}
                                        value={subject}
                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 sm:text-lg"
                                    >
                                        {subject}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Transition>
                    </div>
                )}
            </Listbox>

            <Listbox value={levelFilter} onChange={onLevelChange}>
                {({ open }) => (
                    <div className="relative w-40">
                        <ListboxButton className="w-full px-4 py-2 border rounded-lg text-white flex justify-between items-center
                        hover:border-amber-400 transition-colors duration-200 sm:text-lg">
                            <span className='ml-2'>{levelFilter}</span>
                            <ChevronDown
                                className={`w-4 h-4 transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </ListboxButton>

                        {/* Animate dropdown appearance */}
                        <Transition
                            as={Fragment}
                            show={open}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white text-black z-10 shadow-lg">
                                {levels.map((level) => (
                                    <ListboxOption
                                        key={level}
                                        value={level}
                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 sm:text-lg"
                                    >
                                        {level}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
}
