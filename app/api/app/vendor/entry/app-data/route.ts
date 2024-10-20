import { NextRequest, NextResponse } from 'next/server';

//   Todo: code for facebook sign up for whatsapp
import axios from 'axios';
import { api, authDomain, companyId, franchiseId, secretKey } from './../../../../../../GlobalKey/GlobalKey';

// POST Request with Headers
export const POST = async (req: NextRequest) => {
    try {
        // Get the request body
        const body = await req.json();

        // Extract the origin (protocol + hostname)
        const urlObj = new URL(req.url);

        const axiosResponse = await axios.post(api + '/vendor/entry/app-data', body, {
            headers: {
                'Content-Type': 'application/json',
                Origin: urlObj.href, // Use the extracted request origin
            },
        });

        // Handle the axios response
        if (axiosResponse.status == 200) {
            return NextResponse.json(axiosResponse.data, { status: 200 });
        }
    } catch (error) {
        // Return error with custom headers
        return NextResponse.json(
            {
                error: 'Error creating product',
            },
            { status: 500, headers: { 'X-Error': 'True' } },
        );
    }
};
