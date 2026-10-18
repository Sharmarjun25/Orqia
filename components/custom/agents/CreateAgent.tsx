"use client"
import { Button } from '@/components/ui/button'
import { ArrowUp, BriefcaseBusiness, Ghost, Plus } from 'lucide-react'
import { title } from 'process'
import React from 'react'
import { useState } from 'react'


const quickSuggestions = [
    {
        label: 'Find AI Jobs',
        prompt: "Find the latest AI developer jobs for me"
    }
]

const templates = [
    {
        title: "Find latest jobs",
        description: "Search the web for latest jobs matching",
        icon: BriefcaseBusiness,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        border: "hover:border-blue-300",
        glow: "hover:shadow-blue-100",
    }
]

function CreateAgent() {

    const [prompt, setPrompt] = useState('')
    return (
        <div>
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold tracking-tight'>Create New Agent</h2>
                <p className='mt-1 text-sm text-muted-foreground'>
                    Ask what type of agent you want to create
                </p>
            </div>
            {/*Prompt*/}

            <div className='w-full border rounded-2xl bg-background p-3 mt-4
            shadow-lg shadow-blue-100 hover:shadow-blue-200'>
                <textarea placeholder='Decribe the agent you want to create..'
                    className='min-h-[90px] w-full resize-none bg-transparent px-2 py-2 text-sm outline-none'
                    value={prompt} onChange={(event) => setPrompt(event.target.value)} />


                <div className='flex justify-between items-center'>
                    <div>
                        <Button variant={'ghost'} size={'icon'}>
                            <Plus />
                        </Button>
                    </div>
                    <Button size={'icon'} className={'h-9 w-9 rounded-full bg-blue-600'}>
                        <ArrowUp />
                    </Button>
                </div>


            </div>

            <div className='mt-3 flex gap-2'>
                {quickSuggestions.map((suggestion, index) => (
                    <Button variant={'outline'}
                        onClick={() => setPrompt(suggestion.prompt)}
                        className='hover:text-blue-100 hover:bg-blue-500 hover:border-blue-700'>
                        {suggestion.label}
                    </Button>
                ))}
            </div>

            <div className='mt-5'>
                <h2 className='flex justify-between items-center font-semibold'>Get Started
                    <span className='text-sm font-medium'>View All</span></h2>
                <div className='grid grid-cols-1 gap-4  md:grid-cols-3 mt-4'>
                    {templates.map((template, index) => (
                        <div className={`border rounded-2xl p-5 hover:cursor-pointer hover:shadow-lg  ${template.border} ${template.glow}`}>
                            <template.icon className={`h-12 w-12 p-2 ${template.iconBg} ${template.iconColor} rounded-lg`} />
                            <div className='mt-6'>
                                <h2 className='font-semibold text-foreground'>{template.title}

                                </h2>
                                <p className='text-sm mt-2 leading-5 text-muted-foreground'>{template.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CreateAgent