"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Building2,
    MessageSquare,
    Users,
    Settings,
    Plus,
    LogOut,
    Search,
    CheckCircle,
    Clock,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Total Properties", value: "12", icon: Building2, color: "text-blue-500" },
    { label: "New Inquiries", value: "8", icon: MessageSquare, color: "text-accent" },
    { label: "Assisted Users", value: "150+", icon: Users, color: "text-growth" },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-primary flex">
            {/* Sidebar */}
            <div className="w-64 bg-white dark:bg-primary-light/10 border-r border-primary/5 dark:border-white/10 p-8 flex flex-col">
                <div className="mb-12">
                    <Link href="/" className="flex flex-col items-start">
                        <span className="text-lg font-bold tracking-tight text-primary dark:text-white leading-none">
                            ASSOCIATES
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-accent font-semibold">
                            ADMIN PANEL
                        </span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                        { id: "properties", label: "Properties", icon: Building2 },
                        { id: "inquiries", label: "Inquiries", icon: MessageSquare },
                        { id: "settings", label: "Settings", icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm",
                                activeTab === item.id
                                    ? "bg-primary text-white dark:bg-accent dark:text-primary shadow-lg"
                                    : "text-primary/50 dark:text-white/50 hover:bg-cream dark:hover:bg-white/5"
                            )}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button className="flex items-center gap-4 px-4 py-3 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-12">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-primary dark:text-white">Welcome Back, Admin</h1>
                        <p className="text-primary/50 dark:text-white/50 text-sm">Here's what's happening today.</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-light transition-all dark:bg-accent dark:text-primary">
                        <Plus size={20} />
                        Add Property
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-primary/5 shadow-sm">
                            <div className={cn("p-4 rounded-2xl w-fit mb-6", stat.color.replace('text', 'bg').concat('/10'), stat.color)}>
                                <stat.icon size={24} />
                            </div>
                            <p className="text-sm font-bold text-primary/40 dark:text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-3xl font-extrabold text-primary dark:text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white dark:bg-white/5 rounded-3xl border border-primary/5 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-primary/5 dark:border-white/10 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-primary dark:text-white">Recent Property Submissions</h3>
                        <button className="text-accent text-sm font-bold flex items-center gap-2">
                            View All <ExternalLink size={14} />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-50 dark:bg-white/5 text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 dark:text-white/40">
                                    <th className="px-8 py-4">Property</th>
                                    <th className="px-8 py-4">Status</th>
                                    <th className="px-8 py-4">Date</th>
                                    <th className="px-8 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/5 dark:divide-white/5">
                                {[
                                    { title: "Plot in Green Valley", status: "Pending", date: "Oct 24, 2024" },
                                    { title: "Shop in Semi-Urban Center", status: "Approved", date: "Oct 22, 2024" },
                                    { title: "Industrial Land Area B", status: "Reviewing", date: "Oct 21, 2024" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-8 py-6 font-bold text-primary dark:text-white">{row.title}</td>
                                        <td className="px-8 py-6">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                                                row.status === "Approved" ? "bg-growth/10 text-growth" :
                                                    row.status === "Pending" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary dark:text-white"
                                            )}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-primary/50 dark:text-white/50">{row.date}</td>
                                        <td className="px-8 py-6">
                                            <button className="text-sm font-bold text-primary hover:text-accent dark:text-white dark:hover:text-accent transition-colors">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
