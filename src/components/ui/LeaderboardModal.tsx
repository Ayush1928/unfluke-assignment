"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Command,
    CommandGroup,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./button";
import { FunctionComponent, useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import backtests from "@/constants/backtests";
import Link from "next/link";

interface ILeaderboardModalProps {
}

const LeaderboardModal: FunctionComponent<ILeaderboardModalProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const slippages = [
        {
            value: "0",
            label: "0%",
        },
        {
            value: "0.5",
            label: "0.5%",
        },
        {
            value: "1",
            label: "1%",
        }
    ]
    const handleSelect = (currentValue: string) => {
        // Ensure the selected value is valid
        const selectedSlippage = slippages.find((slippage) => slippage.value === currentValue);
        if (selectedSlippage) {
            setValue(currentValue === value ? "" : currentValue);
        } else {
            console.error("Invalid slippage value selected:", currentValue);
        }
        setOpen(false);
    };

    return (
        <div className="my-8 w-full border-2 p-4 rounded-md shadow-md flex flex-col gap-y-4">
            <div className="flex justify-between items-center w-full">
                <p className="md:text-3xl sm:text-xl text-base font-bold text-[#e27498]">Basic Backtest</p>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[150px] justify-between md:text-lg"
                        >
                            {value
                                ? slippages.find((slippage) => slippage.value === value)?.label
                                : "Slippage"}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[150px] p-0">
                        <Command>
                            <CommandGroup className="flex flex-col">
                                {slippages.map((slippage, index) => (
                                    <p className="px-2" key={index}>
                                        {slippage.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === slippage.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </p>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <Table className="">
                <TableHeader className="border-b-[2px] border-[#e27498]">
                    <TableRow className="hover:bg-gray-100 md:text-lg">
                        <TableHead className="text-gray-600">Rank</TableHead>
                        <TableHead className="text-gray-600">Name</TableHead>
                        <TableHead className="text-right text-gray-600">Calmar Ratio</TableHead>
                        <TableHead className="text-right text-gray-600">Overall Profit</TableHead>
                        <TableHead className="text-right text-gray-600">Avg. Daily Profit</TableHead>
                        <TableHead className="text-right text-gray-600">Win % &#40;Day&#41;</TableHead>
                        <TableHead className="text-right text-gray-600">Price &#40;Rs&#41;</TableHead>
                        <TableHead className="text-right text-gray-600">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    {backtests.map((backtest) => (
                        <TableRow key={backtest.rank} className="border-[#e27498] border-b-[2px] hover:bg-[#E2749810] md:text-[16px] text-black">
                            <TableCell className="py-3">{backtest.rank}</TableCell>
                            <TableCell>{backtest.name}</TableCell>
                            <TableCell className="text-right flex justify-end items-center h-full py-3 text-green-600">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-5 h-5 mr-1" style={{ width: "20px" }}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                                {backtest.calmarRatio}
                            </TableCell>
                            <TableCell className="text-right">{backtest.overallProfit}</TableCell>
                            <TableCell className="text-right">{backtest.avgDailyProfit}</TableCell>
                            <TableCell className="text-right">{backtest.win}</TableCell>
                            <TableCell className="text-right">{backtest.price}</TableCell>
                            <TableCell className="text-right text-[#0000ff] font-semibold"><Link href={"/"}>{backtest.action}</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default LeaderboardModal;
