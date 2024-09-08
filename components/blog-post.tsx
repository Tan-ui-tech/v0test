'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogPost() {
  const [author, setAuthor] = useState({
    name: 'Jane Doe',
    age: 30
  })
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAuthor({
      name: formData.name || author.name,
      age: parseInt(formData.age) || author.age
    })
    setFormData({ name: '', age: '' })
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">The Art of Minimalism in Design</h1>
        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="Author" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-sm text-muted-foreground">Age: {author.age} | June 1, 2023</p>
          </div>
        </div>
      </header>
      <Separator />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Change Name:
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter new name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="age" className="text-sm font-medium">
            Change Age:
          </label>
          <Input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter new age"
          />
        </div>
        <Button type="submit">Update Author Info</Button>
      </form>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Minimalism in design is not about the mere absence of elements, but rather about the strategic inclusion of only what's necessary. It's a philosophy that emphasizes simplicity and functionality, stripping away excess to reveal the essence of a design.
        </p>
        {/* ... rest of the blog post content ... */}
      </div>
    </article>
  )
}