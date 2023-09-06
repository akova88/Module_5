import { Stack } from "@mui/material";
import React from "react";
import LeftContent from "./LeftContent";
import MainContent from "./MainContent";
import RightContent from "./RightContent";

function StackMUI() {
    return (
        <div className="App">
            <h1>Stacks</h1>
            <Stack direction='row' justifyContent='space-between'>
                <p>This is a tutorial about Stack in MUI 5.</p>
                <p>Thank you for watching.</p>
                <p>Please like and subscribe my channel.</p>
            </Stack>
            <h1>Flex</h1>
            <Stack direction='row' justifyContent='space-between'>
                <LeftContent />
                <MainContent />
                <RightContent />
            </Stack>
        </div>
    )
}

export default StackMUI