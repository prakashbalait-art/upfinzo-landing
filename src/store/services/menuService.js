import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchMenu = createAsyncThunk(
    'menu/fetchMenu',
    async (_,{rejectWithValue}) => {
        try{
            const menu = [
                    {
                        id: "ai-banking",
                        label: "AI Banking",
                        path: "#ai-banking",
                    },
                    {
                        id: "payments",
                        label: "Payments",
                        path: "#payments",
                        children: [
                            { id: "payments-rtp", label: "Real-time payments", path: "#payments-rtp" },
                            { id: "payments-checkout", label: "Checkout", path: "#payments-checkout" }
                        ]
                    },
                    {
                        id: "payouts",
                        label: "Payouts",
                        path: "#payouts",
                        children: [
                            { id: "payouts-global", label: "Global payouts", path: "#payouts-global" },
                            { id: "payouts-onboarding", label: "Vendor onboarding", path: "#payouts-onboarding" }
                        ]
                    },
                    {
                        id: "supports",
                        label: "Supports",
                        path: "#support"
                    },
                ];
                return menu;
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);