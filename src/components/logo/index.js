import React from 'react'
import {Svg} from './styles'

export const Logo = props => (
  <Svg
    width={180.777}
    height={180.82}
    viewBox="159.611 -15.41 180.777 180.82"
    style={{
          background: '#080808',
        }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__editing-glowing-gradient"
        x1={0.801}
        x2={0.199}
        y1={0.899}
        y2={0.101}
      >
        <stop offset={0} stopColor="#9d8074" />
        <stop offset={1} stopColor="#cfb29a" />
      </linearGradient>
      <filter
        id="prefix__editing-glowing"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={30} />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M14.9-25.6V0H6v-44q0-10.8 6.95-18.4Q19.9-70 30.9-70h22.9V0h-9.4v-61.2H30.9q-7.3 0-11.65 4.3-4.35 4.3-4.35 13.7v8.5q5.6-5.9 16-5.9H40v8.8h-9.1q-5.8 0-9.45 1.4-3.65 1.4-6.55 4.8zM76.7 0h-9.4v-45.5q0-12.1 5.95-18.8Q79.2-71 90.2-71q11.1 0 17.05 5.4 5.95 5.4 5.95 15.2 0 6.3-3 10.3-3 4-10.2 6.3v.4q7.5 2.9 10.05 8.25 2.55 5.35 2.55 17.65V0h-9.4v-12.8q0-7.6-4.3-11.85T86.5-28.9h-5.4v-8.8h5.7q9.6 0 13.3-3.9 3.7-3.9 3.7-9.3 0-5.1-3.65-8.2-3.65-3.1-9.65-3.1-6.9 0-10.35 3.9-3.45 3.9-3.45 12.8V0z"
      fill="url(#prefix__editing-glowing-gradient)"
      transform="translate(190.4 110.203)"
      filter="url(#prefix__editing-glowing)"
    />
    <style />
  </Svg>
)

export default Logo
