"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageName: string
  packagePrice: string
  stripeLink: string
}

export function PaymentModal({ isOpen, onClose, packageName, packagePrice, stripeLink }: PaymentModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

const handleProceedToPayment = async () => {
  if (name.trim() && email.trim()) {
    try {
      await fetch("https://usebasin.com/f/eb9b208f4047", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          package: packageName,
          price: packagePrice,
        }),
      })

      // Open Stripe payment link in new tab
      window.open(stripeLink, "_blank")
      onClose()
      setName("")
      setEmail("")
    } catch (error) {
      console.error("Basin submission failed:", error)
    }
  }
}


  const handleClose = () => {
    onClose()
    setName("")
    setEmail("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white text-xl font-semibold">Get Started with {packageName}</DialogTitle>
          </div>
          <DialogDescription className="text-gray-300">
            You're about to purchase the {packageName} package for {packagePrice}. Please provide your details to
            continue.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-400"
              required
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white bg-transparent"
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceedToPayment}
            disabled={!name.trim() || !email.trim()}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium"
          >
            Proceed to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
