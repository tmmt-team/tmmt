
"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export const menuItems = [
  {
    title: "HOME",
    slug: "/"
  },
  {
    title: "ABOUT US",
    slug: "about"
  },
  {
    title: "SERVICES",
    slug: "services"
  },
  {
    title: "ADVERTISER",
    slug: "advertiser"
  },
  {
    title: "AFFILIATE",
    slug: "affiliate"
  },
  {
    title: "CONTACT US",
    slug: "contact"
  }
];

const NavbarComp = () => {
  const router= useRouter();
  const pathname = usePathname();  
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

 


  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="rounded-full">
        
        {/* brand information */}
        <NavbarContent>
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">Xtreamead</p>
          </NavbarBrand>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden" />
        </NavbarContent>
        
        {/* Navcontent in desktop view */}
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {
            menuItems.map((item, index) => (
              <NavbarItem>
                <button className={`font-semibold `+`${(pathname == `/${item.slug}` || pathname ==`${item.slug}`) ? "text-red-500" : "text-black"}`} onClick={() => { router.push( item.slug , { scroll: true }) }} >
                  {item.title}
                </button>
              </NavbarItem>
              ))
          }
        </NavbarContent>

        {/* Navcontent in mobile view */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <button className={`font-semibold ` + `${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-red-500" : "text-black"}`} onClick={() => { router.push(item.slug, { scroll: true }); setIsMenuOpen(!isMenuOpen) }} >
                {item.title}
              </button>
            </NavbarMenuItem>
          ))}

        </NavbarMenu>

      </Navbar>
  )
}

export default NavbarComp