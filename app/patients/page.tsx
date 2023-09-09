import Patients from '@/components/pages/Patients'
import React from 'react'
// import { getServerSession} from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const PatientsPage = async () => {
    //  const session = await getServerSession(authOptions)
//  console.log(session, "patiiennts")
  return (
    <>
        <Patients />
    </>
  )
}

export default PatientsPage