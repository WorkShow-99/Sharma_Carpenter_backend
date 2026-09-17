import "./SocialMediaLinks.css";

import {

    // Instagram,

    // Facebook,
Globe as Instagram,
    Mail as Facebook,
    Phone as Linkedin,
    Circle as Youtube,

    // Linkedin,

    Globe,

    Mail,

    MessageCircle

} from "lucide-react";

export default function SocialMediaLinks({

    socialLinks

}){

    const socials=[

        {

            key:"website",

            icon:<Globe size={22}/>,

            label:"Website",

            href:socialLinks.website

        },

        {

            key:"instagram",

            icon:<Instagram size={22}/>,

            label:"Instagram",

            href:socialLinks.instagram
                ? `https://instagram.com/${socialLinks.instagram}`
                : null

        },

        {

            key:"facebook",

            icon:<Facebook size={22}/>,

            label:"Facebook",

            href:socialLinks.facebook
                ? `https://facebook.com/${socialLinks.facebook}`
                : null

        },

        {

            key:"youtube",

            icon:<Youtube size={22}/>,

            label:"YouTube",

            href:socialLinks.youtube
                ? `https://youtube.com/${socialLinks.youtube}`
                : null

        },

        {

            key:"linkedin",

            icon:<Linkedin size={22}/>,

            label:"LinkedIn",

            href:socialLinks.linkedin
                ? `https://linkedin.com/in/${socialLinks.linkedin}`
                : null

        },

        {

            key:"whatsapp",

            icon:<MessageCircle size={22}/>,

            label:"WhatsApp",

            href:socialLinks.whatsapp
                ? `https://wa.me/${socialLinks.whatsapp}`
                : null

        },

        {

            key:"email",

            icon:<Mail size={22}/>,

            label:"Email",

            href:socialLinks.email
                ? `mailto:${socialLinks.email}`
                : null

        }

    ];

    return(

        <section className="social-section">

            <h3>

                Connect with the Worker

            </h3>

            <div className="social-grid">

                {

                    socials

                    .filter(item=>item.href)

                    .map((item)=>(

                        <a

                            key={item.key}

                            href={item.href}

                            target="_blank"

                            rel="noreferrer"

                            className="social-card"

                        >

                            {item.icon}

                            <span>

                                {item.label}

                            </span>

                        </a>

                    ))

                }

            </div>

        </section>

    )

}