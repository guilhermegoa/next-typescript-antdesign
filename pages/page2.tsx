import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd';

export default function page2() {
  const router = useRouter ()
  return (
    <div>
      <Button type='link' onClick={() => router.push('/')} >Button</Button>
    </div>
  )
}
