"use client"

import React from 'react'
import {useRouter} from 'next/navigation'
import { ShowMoreProps } from '@/types'

function ShowMore({pageNumber,isNext}:ShowMoreProps) {
    const router = useRouter();
  return (
    <div>ShowMore</div>
  )
}

export default ShowMore