'use client';

import illinoisLogo from '@/assets/illinois_logo.png';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function ChatDemo() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const fullQuestion = "What is Delta at NCSA?";
    const fullAnswer = "Delta is a high-performance computing cluster at the National Center for Supercomputing Applications (NCSA).";

    useEffect(() => {
        // Animate question typing
        let questionIndex = 0;
        const questionTimer = setInterval(() => {
            if (questionIndex <= fullQuestion.length) {
                setQuestion(fullQuestion.slice(0, questionIndex));
                questionIndex++;
            } else {
                clearInterval(questionTimer);
                // Start answer animation after question is complete
                let answerIndex = 0;
                const answerTimer = setInterval(() => {
                    if (answerIndex <= fullAnswer.length) {
                        setAnswer(fullAnswer.slice(0, answerIndex));
                        answerIndex++;
                    } else {
                        clearInterval(answerTimer);
                    }
                }, 30);
            }
        }, 50);

        return () => clearInterval(questionTimer);
    }, []);

    return (
        <div className="md:w-auto md:h-[290px] flex-col bg-[#FF5F05] rounded-2xl">
           <div className="flex pl-6 w-96 h-14 text-base bg-black rounded-tl-2xl rounded-tr-2xl text-white text-start darker-grotesque-body items-center gap-2">
            <Image src={illinoisLogo} alt="Illinois Logo" width={15} height={15} />
            Ask uiuc.chat
            </div>
            <div className = "flex justify-center items-center gap-4 pt-3">
                <div className="w-72 h-[40px] bg-[#13294B] rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-lg p-3 text-white darker-grotesque-small overflow-hidden flex items-center">
                    {question}
                </div>
                <div className="w-11 h-10 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                    <UserCircleIcon className="w-7 h-7 text-[#13294B]" />
                </div>
            </div>
            <div className = "flex justify-center items-start gap-4 pt-5">
                <div className="w-11 h-10 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                    <Image src={illinoisLogo} alt="Illinois Logo" width={15} height={15} />
                </div>
                <div className="w-72 h-[144px] darker-grotesque-small p-[2px] relative bg-[conic-gradient(from_var(--angle),white_0deg,#13294B_90deg,#13294B_180deg,#13294B_270deg,white_360deg)] rounded-tl-[3px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] animate-border">
                    <div className="w-full h-full bg-[#13294B] rounded-tl-[1px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] p-3 text-white overflow-hidden">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}