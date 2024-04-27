import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";



export const Route = createFileRoute('/progress_page/$user_id')({
    component: ProgressPage,
});

function ProgressPage(){

}