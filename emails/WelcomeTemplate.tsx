import React, { CSSProperties } from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components'
//manual styling
// const WelcomeTemplate = ({ name }: { name: string }) => {
//   return (
//     <Html>
//       <Preview>Welcome aboard!</Preview>
//       <Body style={body}>
//         <Container>
//           <Text style={heading}>Hello {name}!</Text>
//           <Link href='https://unsplash.com/'>Unsplash</Link>
//         </Container>
//       </Body>
//     </Html>
//   )
// }

// const body: CSSProperties = {
//   background: '#fff',
// }
// const heading: CSSProperties = {
//   fontSize: '32px',
// }
const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className='bg-white'>
          <Container>
            <Text className='font-bold text-3xl'>Hello {name}!</Text>
            <Link href='https://unsplash.com/'>Unsplash</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
export default WelcomeTemplate
