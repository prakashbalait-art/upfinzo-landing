import { createAsyncThunk } from "@reduxjs/toolkit";


export const section3Thunk = createAsyncThunk(
    'sections/section3Thunk',
    async (_,{rejectWithValue}) => {
        try{
            const items = [
                    {
                    id: "ai-banking",
                    title: "AI Banking",
                    accent: "#21e0ff",
                    description:
                        "Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.",
                    metric: "3,969",
                    metricLabel: "TRANSACTIONS PER SECOND",
                    },
                    {
                    id: "payments",
                    title: "Payments",
                    accent: "#ffb84a",
                    description:
                        "Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.",
                    metric: "1,675",
                    metricLabel: "VALIDATOR NODES",
                    },
                    {
                    id: "payouts",
                    title: "Payouts",
                    accent: "#b176ff",
                    description:
                        "Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.",
                    metric: "163,077,581,394",
                    metricLabel: "TOTAL TRANSACTIONS",
                    },
                    {
                    id: "merchant-onboarding",
                    title: "Merchant Onboarding",
                    accent: "#30d58d",
                    description:
                        "Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.",
                    metric: "100%",
                    metricLabel: "ON-TIME MERCHANT ONBOARD",
                    },
                ];
                return items;
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);

export const section2Thunk = createAsyncThunk(
    'sections/section2Thunk',
    async (_,{rejectWithValue}) => {
        try{
            const sec2Items = [
                {
                id: 1,
                value: "11.5M+",
                label: "TRANSACTIONS PROCESSED MONTHLY",
                },
                {
                id: 2,
                value: "99.9%",
                label: "PLATFORM UPTIME AND RELIABILITY",
                },
                {
                id: 3,
                value: "70% Faster",
                label: "MERCHANT ONBOARDING WITH AI AUTOMATION",
                },
            ];
                return sec2Items;
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);

export const section5Thunk = createAsyncThunk(
    'sections/section5Thunk',
    async (_,{rejectWithValue}) => {
        try{
            const sec5Items = [
                {
                speed: 25,
                items: [
                    { title: "Multiple Pay Options", text: "Give your customers the flexibility" },
                    { title: "Automation At Its Finest", text: "Automate your entire payment" },
                    { title: "AI Payment Gateway", text: "Make checkout smooth" },
                ]
                },
                {
                speed: 18,
                items: [
                    { title: "Developer-Friendly APIs", text: "Integrate and launch faster" },
                    { title: "Unified Dashboard", text: "Manage banking, payments, and merchants in one place" },
                    { title: "Multiple Pay Options", text: "Give your customers flexibility" },
                ]
                },
                {
                speed: 8,
                items: [
                    { title: "Real-time Automation", text: "Reduce manual work with AI" },
                    { title: "Global Ready", text: "Scale seamlessly across borders" },
                    { title: "AI Payment Gateway", text: "Predictive risk scoring approvals" },
                ]
                }
            ];
                return sec5Items;
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);