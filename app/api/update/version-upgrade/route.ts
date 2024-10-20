import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {


        const recenetTIme=Date.now()
        return NextResponse.json({
            message: recenetTIme,

          }, { status: 200 });
    } catch (error) {
        console.log(error);

    }
};

export const POST=async(req:NextRequest)=>{
    
    try {
        const body = await req.json();

        return NextResponse.json({
            message: 'done',
            data: body,
          }, { status: 201 });
    } catch (error) {

    return NextResponse.json({
      error: 'Error creating product',
    }, { status: 500 });
    }


}
