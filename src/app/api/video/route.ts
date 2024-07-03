import fs from 'fs';
import { NextRequest } from 'next/server';
import path from 'path';

export function GET(req: NextRequest) {
    const videoPath = path.resolve('.', 'public', 'mock-ai-interviewer-app-demo.mp4');
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.get('range');

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const headers = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        //@ts-expect-error unknown error
        return new Response(file, {
            status: 206,
            headers,
        });
    } else {
        const headers = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };

        const file = fs.createReadStream(videoPath);
        //@ts-expect-error unknown error
        return new Response(file, {
            status: 200,
            headers,
        });
    }
}
