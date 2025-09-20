"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

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
  const [isRefundChecked, setIsRefundChecked] = useState(false)
  const [showRefundPolicy, setShowRefundPolicy] = useState(false)

  const handleProceedToPayment = async () => {
    if (name.trim() && email.trim() && isRefundChecked) {
      try {
        await fetch("https://usebasin.com/f/ee568d1f8cb6", {
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

        window.open(stripeLink, "_blank")
        onClose()
        setName("")
        setEmail("")
        setIsRefundChecked(false)
      } catch (error) {
        console.error("Basin submission failed:", error)
      }
    }
  }

  const handleClose = () => {
    onClose()
    setName("")
    setEmail("")
    setIsRefundChecked(false)
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

          {/* Refund Policy Checkbox */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="refund-policy"
              checked={isRefundChecked}
              onCheckedChange={(checked) => setIsRefundChecked(!!checked)}
              className="mt-1"
            />
            <Label htmlFor="refund-policy" className="text-gray-300 text-sm leading-snug">
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowRefundPolicy(true)}
                className="text-teal-400 hover:underline"
              >
                Refund Policy
              </button>
            </Label>
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
            disabled={!name.trim() || !email.trim() || !isRefundChecked}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium"
          >
            Proceed to Payment
          </Button>
        </div>
      </DialogContent>

      {/* Refund Policy Popup */}
      <Dialog open={showRefundPolicy} onOpenChange={setShowRefundPolicy}>
        <DialogContent className="sm:max-w-lg bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">Refund Policy – DesignLab Solution</DialogTitle>
          </DialogHeader>
          <div className="text-gray-300 text-sm space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            <p>
              At DesignLab Solution, we are committed to delivering high-quality digital design services and products.
              Please read our refund policy carefully before making a purchase.
            </p>
            <h4 className="text-white font-semibold">1. Digital Products & Services</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>All our products and services are digital and delivered electronically.</li>
              <li>Due to the nature of digital items, all sales are final once the order has been delivered or the design process has started.</li>
            </ul>

            <h4 className="text-white font-semibold">2. Eligibility for Refunds</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>The digital file/service was not delivered to the customer.</li>
              <li>A technical error on our side caused you to receive the wrong product/service.</li>
              <li>The order was cancelled before any work began.</li>
            </ul>

            <h4 className="text-white font-semibold">3. Non-Refundable Situations</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>You change your mind after purchasing.</li>
              <li>You provide incorrect details or requirements for your order.</li>
              <li>The digital product/service has already been delivered and is functional.</li>
            </ul>

            <h4 className="text-white font-semibold">4. Requesting a Refund</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Refund requests must be submitted within 7 days of purchase.</li>
              <li>
                To request a refund, please contact us at{" "}
                <a
                  href="mailto:hello.designlabsolutions@gmail.com"
                  className="text-teal-400 hover:underline"
                >
                  hello.designlabsolutions@gmail.com
                </a>{" "}
                with your order details.
              </li>
              <li>
                Approved refunds will be processed back to your original payment method within
                5–10 business days (depending on your bank/Stripe).
              </li>
            </ul>

            <h4 className="text-white font-semibold">5. Contact Us</h4>
            <p>
              If you have any questions about our refund policy, you may contact us at:{" "}
              <a
                href="mailto:hello.designlabsolutions@gmail.com"
                className="text-teal-400 hover:underline"
              >
                📧 hello.designlabsolutions@gmail.com
              </a>
            </p>

          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  )
}
