import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
        <ShaderGradient
          animate="on"
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={0.9}
          cAzimuthAngle={180}
          cDistance={3.59}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#F32517"
          color2="#000038"
          color3="#b60000"
          destination="onCanvas"
          embedMode="off"
          envPreset="dawn"
          fov={45}
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

export default App
