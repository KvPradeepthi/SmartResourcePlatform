import WhatsAppJoinPopup from '@/components/WhatsAppJoinPopup'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ChatBubble from '@/components/ChatBubble'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Header } from '@/components/Header'
import { 
  Mail, 
  Sparkle, 
  MessageCircle, 
  SquareUserRound, 
  Github, 
  GraduationCap, 
  Code2, 
  ExternalLink, 
  BadgeCheck
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 space-y-6 pb-12">
      <Header />

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Contact", isCurrentPage: true }
      ]} />

      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Contact & Administration</h1>
        <p className="text-muted-foreground">
          Reach out to the lead platform developer, administrators, or submit academic resource requests.
        </p>
      </div>

      {/* Featured Lead Developer Card */}
      <Card className="border-l-4 border-primary shadow-sm bg-gradient-to-r from-card via-card to-primary/5">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-xl md:text-2xl">Kamichetty Veera Pradeepthi</CardTitle>
                <CardDescription className="text-sm">
                  Lead Platform Developer & Academic Maintainer • PEC.UP
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-primary/90">Lead Developer</Badge>
              <Badge variant="secondary">Roll: 23A91A1225</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border">
              <GraduationCap className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Department & Institution</p>
                <p className="text-sm font-medium">Information Technology, Aditya University</p>
                <p className="text-xs text-muted-foreground">Year 2 • Semester 2</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Direct Developer Email</p>
                <a 
                  href="mailto:deepthikamichetty336@gmail.com" 
                  className="text-sm font-medium text-primary hover:underline break-all"
                >
                  deepthikamichetty336@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border">
              <Github className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">GitHub Profile & Repository</p>
                <a 
                  href="https://github.com/KvPradeepthi/SmartResourcePlatform" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                  KvPradeepthi/SmartResourcePlatform
                  <ExternalLink className="h-3 w-3 inline" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid for Team & Resource Request */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Card 1: Platform Team */}
        <Card>
          <CardHeader>
            <CardTitle>PEC.UP Team & Admins</CardTitle>
            <CardDescription>Platform development and administration team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-start gap-3 pb-3 border-b">
              <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Kamichetty Veera Pradeepthi</h3>
                  <Badge variant="outline" className="text-xs">Lead Developer</Badge>
                </div>
                <p className="text-sm text-muted-foreground">IT 2nd Year • Roll No: 23A91A1225</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-primary">
                  <a href="mailto:deepthikamichetty336@gmail.com" className="hover:underline">Email</a>
                  <span>•</span>
                  <a href="https://github.com/KvPradeepthi" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <SquareUserRound className="mt-1 h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Yeswanth Madasu</h3>
                <p className="text-sm text-muted-foreground">CSE-B 3rd Year</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <a href="https://yesh.pecup.in" target="_blank" rel="noopener noreferrer" className="hover:underline">Website</a>
                  <span>•</span>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <SquareUserRound className="mt-1 h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Venkatakumar G</h3>
                <p className="text-sm text-muted-foreground">CSE-B 3rd Year • Resource Admin</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <SquareUserRound className="mt-1 h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">KaavyaSri B</h3>
                <p className="text-sm text-muted-foreground">CSE-B 3rd Year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Resource Request & Support */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Request & Support</CardTitle>
            <CardDescription>Channels to request syllabus materials, notes, or assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Developer & Project Contact</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:deepthikamichetty336@gmail.com" className="hover:underline text-primary">deepthikamichetty336@gmail.com</a>
                </p>
                <p className="text-xs text-muted-foreground">For project reviews, technical queries, or feedback</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">WhatsApp Helpdesk</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="https://wa.me/919676242565" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                    +91 9676242565 (Request Resources)
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkle className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">starBOT AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Click the floating chat bubble on bottom right for 24/7 academic answers and syllabus navigation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <SquareUserRound className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">General Admin Inbox</h3>
                <p className="text-sm text-muted-foreground">work.pecup@gmail.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Card */}
      <div className="flex justify-center mt-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Frequently asked questions about PEC.UP platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 p-3 rounded-md hover:bg-muted transition-all duration-200">
              <h3 className="font-medium text-primary">Who developed and maintains this version of PEC.UP?</h3>
              <p className="text-sm text-muted-foreground">
                This smart academic resource platform is developed and maintained by Kamichetty Veera Pradeepthi (Roll No: 23A91A1225), Department of Information Technology, Aditya University, as part of the specialized academic internship.
              </p>
            </div>
            <div className="space-y-2 p-3 rounded-md hover:bg-muted transition-all duration-200">
              <h3 className="font-medium text-primary">How are syllabus materials and question papers updated?</h3>
              <p className="text-sm text-muted-foreground">
                Resources are organized by Regulation, Semester, and Subject. Verified unit notes, Mid-term papers, and lab manuals are uploaded and categorized regularly.
              </p>
            </div>
            <div className="space-y-2 p-3 rounded-md hover:bg-muted transition-all duration-200">
              <h3 className="font-medium text-primary">What should I do if the resources I need aren't available?</h3>
              <p className="text-sm text-muted-foreground">
                You can submit a resource request via email to <a href="mailto:deepthikamichetty336@gmail.com" className="text-primary hover:underline">deepthikamichetty336@gmail.com</a> or via WhatsApp helpdesk at <a href="https://wa.me/919676242565" className="text-primary hover:underline">+91 9676242565</a>.
              </p>
            </div>
            <div className="space-y-2 p-3 rounded-md hover:bg-muted transition-all duration-200">
              <h3 className="font-medium text-primary">Is there an AI assistant for quick doubts?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! The built-in starBOT assistant is available right from the bottom-right bubble on every page to help you search for notes, view exam schedules, and clarify concepts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ChatBubble href="https://chat.pecup.in" />
    </div>
  )
}
