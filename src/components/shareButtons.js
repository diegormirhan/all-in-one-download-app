'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Share2, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaPinterest, FaReddit, FaWhatsapp } from 'react-icons/fa'

const ShareButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButtons = () => setIsOpen(!isOpen)

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
  const shareTitle = encodeURIComponent('Check it out this website that can download any video from all social media for free!')

  const shareLinks = [
    { name: 'Facebook', icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
    { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}` },
    { name: 'LinkedIn', icon: Linkedin, url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}` },
    { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/?text=${shareTitle}%20${shareUrl}` },
    { name: 'Pinterest', icon: FaPinterest, url: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}` },
    { name: 'Reddit', icon: FaReddit, url: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}` },
    { name: 'Email', icon: Mail, url: `mailto:?subject=${shareTitle}&body=Confira este link: ${shareUrl}` },
  ]

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-primary size-12 bg-white text-primary-foreground hover:bg-secondary-bg-color hover:text-white rounded-full ring-2 border-none ring-black p-2"
        onClick={toggleButtons}
      >
        <Share2 className="size-20" />
      </Button>
      {isOpen && (
        <div className="flex flex-col gap-2 mt-2">
          {shareLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              className="bg-primary size-12 text-primary-foreground bg-white hover:bg-secondary-bg-color hover:text-white rounded-full ring-2 border-none ring-black p-2"
              onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
            >
              <link.icon className="size-20" />
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShareButtons

