import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

import Cross1 from '@/components/radix/cross1';

export default function SelectionSidebar() {
    return (
        <div className="h-screen p-6 w-80">
            <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Nodes</CardTitle>
                    <Cross1 />
                </CardHeader>
                <CardContent>
                    <p>Content goes here test</p>
                </CardContent>

                <Collapsible className="relative w-full">
                    <CollapsibleTrigger className="flex justify-between items-center px-4 py-2 text-lg font-medium hover:bg-gray-100 transition w-full">
                        <span>Category 1</span>
                        <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608
                     10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 
                     7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="p-4 bg-gray-50 rounded-md">
                        Info inside category 1.
                    </CollapsibleContent>
                </Collapsible>

                <div className="relative">
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
                </div>

                <Collapsible className="relative w-full">
                    <CollapsibleTrigger className="flex justify-between items-center px-4 py-2 text-lg font-medium hover:bg-gray-100 transition w-full">
                        <span>Category 2</span>
                        <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608
                     10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 
                     7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="p-4 bg-gray-50 rounded-md">
                        Info inside category 2.
                    </CollapsibleContent>
                </Collapsible>

                <div className="relative">
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
                </div>

                <Collapsible className="relative w-full">
                    <CollapsibleTrigger className="flex justify-between items-center px-4 py-2 text-lg font-medium hover:bg-gray-100 transition w-full">
                        <span>Category 3</span>
                        <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608
                     10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 
                     7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="p-4 bg-gray-50 rounded-md">
                        Info inside category 3.
                    </CollapsibleContent>
                </Collapsible>

                <div className="relative">
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
                </div>


                <Collapsible className="relative w-full">
                    <CollapsibleTrigger className="flex justify-between items-center px-4 py-2 text-lg font-medium hover:bg-gray-100 transition w-full">
                        <span>Category 4</span>
                        <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608
                     10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 
                     7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="p-4 bg-gray-50 rounded-md">
                        Info inside category 4.
                    </CollapsibleContent>
                </Collapsible>

                <div className="relative">
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
                </div>


            </Card>
        </div>
    );
}
