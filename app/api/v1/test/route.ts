import { TLS_Client } from '@/utils/tls/tls';
import { NextResponse, NextRequest } from 'next/server'
type ResponseType = {
  status: number,
  errors?: string[],
  data?: any,
  success?: boolean
}
export async function GET(request: NextRequest) {
  let response: ResponseType = { status: 200, errors: [], data: null }
  const client = new TLS_Client()


  return NextResponse.json({ errors: response.errors, data: response.data }, { status: response.status })

}
