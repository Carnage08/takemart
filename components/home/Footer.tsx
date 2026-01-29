import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-white text-white pt-20 pb-10">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            
                            {/* ✅ LOGO ONLY (NO GREEN BOX) */}
                            <Image
                                src="/logo.png"
                                alt="TakeSmart Logo"
                                width={64}
                                height={64}
                                className="object-contain"
                                priority
                            />

                            <span className="text-2xl font-bold tracking-tight text-[#FF8432]">
                                Take<span className="text-primary">Smart</span>
                            </span>
                        </Link>

                        <p className="text-black/50 text-sm leading-relaxed">
                            TakeSmart is India's fastest-growing supermarket chain, dedicated to providing fresh produce and daily essentials to millions of happy customers.
                        </p>

                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg text-[#FF8432] font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-black/50">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Franchise Model</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg text-[#FF8432] font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-black/50">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>71-MIG, Dayanand Vihar Kalyanpur, Kanpur , UP</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>franchise@takesmart.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg text-[#FF8432] font-bold mb-6">Newsletter</h3>
                        <p className="text-black/50 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and franchise opportunities.
                        </p>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                            />
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2024 TakeMart. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}




// import Link from "next/link"
// import { Facebook, Twitter, Instagram, Linkedin, ShoppingCart, Mail, Phone, MapPin } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import Image from "next/image";


// export function Footer() {
//     return (
//         <footer className="bg-white text-white pt-20 pb-10">
//             <div className="container">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//                     {/* Brand & About */}
//                     <div className="space-y-6">
//                         <Link href="/" className="flex items-center gap-2">
//                             {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//                                 <ShoppingCart className="text-white w-6 h-6" />
//                             </div> */}
//                             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
//                                     <Image
//                                         src="/logo.png"
//                                         alt="TakeMart Logo"
//                                         width={28}
//                                         height={28}
//                                         className="object-contain"
//                                         priority
//                                     />
//                                     </div>

//                             <span className="text-2xl font-bold tracking-tight text-[#FF8432]">
//                                 Take<span className="text-primary">Smart</span>
//                             </span>
//                         </Link>
//                         <p className="text-black/50 text-sm leading-relaxed">
//                             TakeSmart is India's fastest-growing supermarket chain, dedicated to providing fresh produce and daily essentials to millions of happy customers.
//                         </p>
//                         <div className="flex gap-4">
//                             <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
//                                 <Facebook className="w-5 h-5" />
//                             </Link>
//                             <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
//                                 <Twitter className="w-5 h-5" />
//                             </Link>
//                             <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
//                                 <Instagram className="w-5 h-5" />
//                             </Link>
//                             <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
//                                 <Linkedin className="w-5 h-5" />
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-lg text-[#FF8432] font-bold mb-6">Quick Links</h3>
//                         <ul className="space-y-4 text-black/50">
//                             <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
//                             <li><Link href="#" className="hover:text-primary transition-colors">Franchise Model</Link></li>
//                             <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
//                             <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
//                             <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h3 className="text-lg text-[#FF8432] font-bold mb-6">Contact Us</h3>
//                         <ul className="space-y-4 text-black/50">
//                             <li className="flex gap-3">
//                                 <MapPin className="w-5 h-5 text-primary shrink-0" />
//                                 <span>123, Tech Park, Sector 44, Gurgaon, Haryana - 122002</span>
//                             </li>
//                             <li className="flex gap-3">
//                                 <Phone className="w-5 h-5 text-primary shrink-0" />
//                                 <span>+91 98765 43210</span>
//                             </li>
//                             <li className="flex gap-3">
//                                 <Mail className="w-5 h-5 text-primary shrink-0" />
//                                 <span>franchise@takesmart.com</span>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h3 className="text-lg text-[#FF8432] font-bold mb-6">Newsletter</h3>
//                         <p className="text-black/50 text-sm mb-4">Subscribe to our newsletter for the latest updates and franchise opportunities.</p>
//                         <form className="space-y-2">
//                             <Input type="email" placeholder="Enter your email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary" />
//                             <Button className="w-full">Subscribe</Button>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
//                     <p>© 2024 TakeMart. All rights reserved.</p>
//                     <div className="flex gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
