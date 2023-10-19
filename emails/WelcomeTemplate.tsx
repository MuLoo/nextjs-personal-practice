import React, { CSSProperties } from 'react'
import { Html, Body , Container, Text, Link, Preview, Tailwind} from '@react-email/components'
const WelcomeTemplate = ({ name }: {name: string}) => {
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Tailwind>
      <Body className='bg-white'>
        <Container>
          <Text className='font-bold text-2xl'>hello {name}</Text>
        </Container>
        </Body>
        </Tailwind>
    </Html>

  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '30px'
}

export default WelcomeTemplate