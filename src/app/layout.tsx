import './globals.css'

export const metadata = {
  title: 'AI Automation for Hotels & Real Estate',
  description: 'Streamline daily operations for hotels and real estate with AI automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}