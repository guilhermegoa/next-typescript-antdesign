import { Button } from 'antd';
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  return(
  <Button type='primary' onClick={() => router.push('/page2')}>Button</Button>
  )
}

export default Home;