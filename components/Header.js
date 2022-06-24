import Image from 'next/image'

export default function Header() {
  return (
      <div className="header">
      <Image 
      className="header--image"  
      src={`/Troll_Face.png`}
      width={58}
      height={48}
      alt={`/components/Troll Face`}
      priority
      />
          <h2 className="header--title">Meme Generator</h2>
          <h4 className="header--project">Godwin Mshiu</h4>
      </div>
  )
}