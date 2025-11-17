import { Calculator, Target, Brain, ClipboardList } from 'lucide-react';
import React from 'react';

interface CoreFeature {
    icon: React.ElementType;
    title: string;
    desc: string;
    detail: string;
}

export const coreFeatures: CoreFeature[] = [
    {
        icon: Calculator,
        title: 'APS Calculator',
        desc: 'Enter your matric results and instantly calculate your Admission Point Score',
        detail: 'Know exactly where you stand with accurate APS calculations based on your current or expected results',
    },
    {
        icon: Target,
        title: 'Course Matching',
        desc: 'Discover which courses and programs you qualify for across SA universities',
        detail: 'Get personalized recommendations based on your APS, subjects, and career interests',
    },
    // {
    //     icon: Brain,
    //     title: 'AI Study Coach',
    //     desc: 'Get personalized AI feedback to improve your marks in specific subjects',
    //     detail: 'Receive actionable advice on how to boost your performance and meet course requirements',
    // },
    // {
    //     icon: ClipboardList,
    //     title: 'Application Tracker',
    //     desc: 'Track all your university and college applications in one place',
    //     detail: 'Never miss a deadline with organized tracking of documents, dates, and application status',
    // },
];
