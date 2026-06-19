'use client'

import { useEffect, useRef } from 'react'

export default function AboutCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particlesArray: any[] = []

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 0,
    }

    const resize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      mouse.radius = (canvas.height / 120) * (canvas.width / 120)
      init()
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.x
      mouse.y = e.y
    }

    const onMouseOut = () => {
      mouse.x = undefined
      mouse.y = undefined
    }

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string
      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }
      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }
      update() {
        if (!canvas) return
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY
        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    function init() {
      if (!canvas) return // بررسی ایمنی برای تایپ‌اسکریپت
      particlesArray = []
      const numberOfParticles = (canvas.height * canvas.width) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1
        const x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2
        const y =
          Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        const color = 'rgba(85, 107, 47, 0.3)'
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color),
        )
      }
    }

    function connect() {
      if (!ctx || !canvas) return // بررسی ایمنی برای تایپ‌اسکریپت
      let opacityValue = 1
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = dx * dx + dy * dy

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000
            ctx.strokeStyle = `rgba(143, 188, 143, ${opacityValue})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update()
      connect()
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    resize()
    init()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      id='bg-animation'
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
    />
  )
}