// import { prisma } from "../../../../helpers/lib/prisma";
// import { NextRequest, NextResponse } from 'next/server'



// export type SetupData = {
//   picture?: string
//   firstTime: boolean
// }

// export const GET = async (req: NextRequest) => {
//   try {
//     const userId = req.headers.get('x-user-id') as string

//     const data = await Users.findProfile(userId)

//     return NextResponse.json(
//       {
//         statusCode: 200,
//         message: 'Success on fetching all data',
//         data: data,
//       },
//       {
//         status: 200,
//       },
//     )
//   } catch (error) {
//     return NextResponse.json<ResponseAPIType<unknown>>(
//       {
//         statusCode: 200,
//         message: 'Error on fetching all data',
//       },
//       {
//         status: 200,
//       },
//     )
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { Upload } from '@/db/models/upload'


export type ResponseAPIType<T> = {
  statusCode: number
  message?: string
  data?: T
  error?: string
}


export const POST = async (req: NextRequest) => {
  try {
    const userId = req.headers.get('x-user-id') as string
console.log(userId);
    const data = (await req.formData()).get('pdf') as File

    if (data) {
      // Upload.upPDF(data, userId)
      Upload.extractPDF(data, userId)
      // Upload.extractPDF(data)
      
    }

    return NextResponse.json<ResponseAPIType<unknown>>(
      {
        statusCode: 201,
        message: 'Successfully upload a pdf',
      },
      {
        status: 201,
      },
    )
  } catch (err) {
    let statusCode = 500
    if (err !== 'Internal Server Error') statusCode = 400

    return NextResponse.json(
      {
        statusCode,
        error: err,
      },
      {
        status: statusCode,
      },
    )
  }
}