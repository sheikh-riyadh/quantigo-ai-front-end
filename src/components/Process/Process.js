import React from 'react';


const Process = () => {
    return (
        <div className='mt-8 xl:mt-14'>
            <div className='flex lg:text-start items-center justify-center mb-10 lg:mb-10'>
                <p className='text-3xl md:text-4xl font-semibold lg:pl-20'>ANNOTATION PR</p>
                <div className='w-8 h-8 border-8 border-dashed rounded-full animate-spin border-[#4E4534]'></div>
                <p className='text-3xl md:text-4xl font-semibold'>CESS</p>
            </div>
            <div className='px-10 md:px-16 xl:px-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <div>
                        <ul className="steps steps-vertical">
                            <li data-content="1" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>EXPERT CONSULTATION</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                            <li data-content="2" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>TRAINING</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                            <li data-content="3" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>WORKFLOW CUSTOMIZATION</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="steps steps-vertical">
                            <li data-content="4" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>FEEDBACK CYCLE</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                            <li data-content="5" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>EVALUATION</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                            <li data-content="6" className="step">
                                <div className='text-start my-2 p-5 rounded-3xl skeuomorphic'>
                                    <h1 className='font-semibold text-xl'>EXPERT CONSULTATION</h1>
                                    <p>Transformative, solution-based approach. Interdisciplinary video annotation problem solving. Agility and responsiveness, time-to-value enhancers.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;