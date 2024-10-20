import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';
import short from 'short-uuid';

export const GET = async (req: NextRequest) => {
    try {
        const recentTime = Date.now();
        return NextResponse.json(
            {
                message: recentTime,
            },
            { status: 200 },
        );
    } catch (error) {
        console.log(error);
    }
};

export const POST = async (req: NextRequest) => {
    try {
        console.log('Parsing form data');

        // Parse form data to get the file
        const formData = await req.formData();
        const file = formData.get('file');

        // Check if the file is a Blob or a File
        if (!file || !(file instanceof Blob)) {
            return NextResponse.json({ error: 'No valid files received.' }, { status: 400 });
        }

        // Convert the file into a buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Extract the file extension
        const filename = (file as File).name.toLowerCase();
        const fileExtension = path.extname(filename); // e.g., .jpg, .png

        // Generate a unique file name using short-uuid
        const uniqueId = short.generate();
        const finalFileName = `${uniqueId}${fileExtension}`; // e.g., abc123.jpg

        // Generate the file path based on timestamp
        const timestamp = Date.now();
        const uploadDir = path.join(process.cwd(), `public/app-public-file/vendorUid/${timestamp}`);
        const filePath = path.join(uploadDir, finalFileName);

        // Ensure the directory exists (create it if not)
        await mkdir(uploadDir, { recursive: true });

        try {
            // Write the file to the target path
            await writeFile(filePath, buffer);
            return NextResponse.json({ message: 'File uploaded successfully!', status: 201 });
        } catch (error) {
            console.log('Error occurred during file write: ', error);
            return NextResponse.json({ message: 'File upload failed.', status: 500 });
        }
    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json(
            {
                error: 'Error processing file',
            },
            { status: 500 },
        );
    }
};
