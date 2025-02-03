import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Lock,
  KeyRound,
  Shield,
  Key,
  FileKey,
  Binary,
  Database,
  ShieldCheck,
  KeySquare,
  Network,
  Hash,
  FileCode,
  MessageSquare,
} from "lucide-react"
import type React from "react" // Import React

interface AlgorithmCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function AlgorithmCard({ title, description, icon }: AlgorithmCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function CryptoSimulator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cryptographic Algorithms Simulator</h1>
        <p className="text-lg text-muted-foreground">
          Explore and learn about different cryptographic algorithms through interactive simulations
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <SectionTitle
            title="Symmetric Encryption"
            description="Algorithms that use the same key for encryption and decryption"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AlgorithmCard
              icon={<Lock />}
              title="Caesar Cipher"
              description="A simple substitution cipher that shifts letters by a fixed number"
            />
            <AlgorithmCard
              icon={<KeyRound />}
              title="Vigenère Cipher"
              description="A polyalphabetic substitution cipher using a keyword"
            />
            <AlgorithmCard
              icon={<Shield />}
              title="DES Encryption"
              description="Data Encryption Standard - a symmetric-key block cipher"
            />
            <AlgorithmCard
              icon={<Key />}
              title="AES Encryption"
              description="Advanced Encryption Standard - modern symmetric encryption"
            />
          </div>
        </section>

        <section>
          <SectionTitle
            title="Asymmetric Encryption"
            description="Algorithms that use different keys for encryption and decryption"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AlgorithmCard
              icon={<FileKey />}
              title="RSA Encryption"
              description="Public-key cryptosystem for secure data transmission"
            />
            <AlgorithmCard
              icon={<Network />}
              title="Diffie-Hellman"
              description="Key exchange algorithm for secure communication"
            />
            <AlgorithmCard
              icon={<Binary />}
              title="Elliptic Curve Cryptography"
              description="Modern approach to public-key cryptography"
            />
            <AlgorithmCard
              icon={<Database />}
              title="ElGamal Algorithm"
              description="Public-key cryptography based on discrete logarithm"
            />
          </div>
        </section>

        <section>
          <SectionTitle title="Classical Ciphers" description="Historical encryption methods" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AlgorithmCard
              icon={<KeySquare />}
              title="Playfair Cipher"
              description="Uses a 5x5 matrix for substitution encryption"
            />
            <AlgorithmCard icon={<FileCode />} title="Hill Cipher" description="Uses linear algebra for encryption" />
            <AlgorithmCard
              icon={<Binary />}
              title="Rail Fence Cipher"
              description="A transposition cipher using multiple rails"
            />
          </div>
        </section>

        <section>
          <SectionTitle title="Other Algorithms" description="Additional cryptographic techniques and functions" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AlgorithmCard
              icon={<ShieldCheck />}
              title="Pseudorandom Number Generation"
              description="Generation of random numbers for cryptographic use"
            />
            <AlgorithmCard
              icon={<MessageSquare />}
              title="Message Authentication Code"
              description="Provides integrity and authenticity assurances"
            />
            <AlgorithmCard icon={<Hash />} title="Hash Algorithm" description="One-way function for data integrity" />
          </div>
        </section>
      </div>
      <footer className="mt-16 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">This page is locked</p>
          </div>
          <p className="text-sm font-medium">This Website is Created By Mohanish7777777</p>
        </div>
      </footer>
    </div>
  )
}

