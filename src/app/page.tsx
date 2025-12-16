"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Zap, Heart, Calendar, Star, Users, Award, HelpCircle, Linkedin, Twitter, Instagram, Mail, Facebook, Youtube } from "lucide-react";

export default function SQ5FanclubPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="noiseDiagonalGradient"
      cardStyle="frosted-heavy"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="SQ5 Fanclub"
          navItems={[
            { name: "About", id: "about" },
            { name: "Models", id: "models" },
            { name: "Community", id: "community" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi 
          title="Welcome to SQ5 Fanclub"
          description="Join the ultimate community of Audi SQ5 enthusiasts. Experience the power, precision, and passion of the most advanced performance SUV."
          tag="Premium Automotive Community"
          tagIcon={Zap}
          kpis={[
            { value: "15,000+", label: "Active Members" },
            { value: "500+", label: "Events Yearly" },
            { value: "50+", label: "Countries" }
          ]}
          buttons={[
            { text: "Join Now", href: "#contact" },
            { text: "Explore Events", href: "#events" }
          ]}
          globePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout 
          title="About Our Community"
          description="The SQ5 Fanclub is dedicated to celebrating the engineering excellence and performance of Audi's flagship performance SUV. We bring together passionate drivers, collectors, and enthusiasts who share a deep appreciation for German automotive precision and raw power."
          tag="Our Story"
          tagIcon={Heart}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881712989-7d06wlqp.jpg"
          imageAlt="Audi SQ5 luxury automotive community"
          buttons={[
            { text: "Learn More", href: "#community" }
          ]}
        />
      </div>

      <div id="models" data-section="models">
        <FeatureCardNine 
          features={[
            {
              id: 1,
              title: "Twin-Turbo Engine",
              description: "Experience 450 horsepower of pure performance with a hand-crafted V6 biturbo engine delivering exceptional acceleration and responsive handling.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881713957-s8jpggpc.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881714983-zdg61ist.jpg" }
            },
            {
              id: 2,
              title: "Signature Design",
              description: "Every detail crafted to perfection. From the aggressive front grille to the sculpted body lines, the SQ5 commands attention on every road.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881716045-f4v1ws3i.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881717281-6msiljlh.jpg" }
            }
          ]}
          showStepNumbers={true}
          title="SQ5 Performance Showcase"
          description="Explore the technical excellence and innovative features that define the Audi SQ5 experience"
          tag="Model Features"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "View Specs", href: "https://audi.com" }
          ]}
        />
      </div>

      <div id="events" data-section="events">
        <ProductCardThree 
          products={[
            {
              id: "1",
              name: "Spring Track Day",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881734787-p36x3cnl.jpg",
              imageAlt: "SQ5 track day event",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Summer Car Show",
              price: "$49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881716045-f4v1ws3i.jpg",
              imageAlt: "Annual car show gathering",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Winter Meetup",
              price: "Free",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881717281-6msiljlh.jpg",
              imageAlt: "Community winter gathering",
              initialQuantity: 1
            }
          ]}
          title="Upcoming Events"
          description="Be part of exclusive SQ5 gatherings, track days, and community meetups"
          tag="Join the Action"
          tagIcon={Calendar}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="community" data-section="community">
        <TestimonialCardTwelve 
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881718498-150dltf0.jpg"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881719415-xu6at500.jpg"
            },
            {
              id: "3",
              name: "David Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881720272-8ejgl1zq.jpg"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881721964-8q066j3g.jpg"
            }
          ]}
          cardTitle="Join 15,000+ SQ5 Enthusiasts Worldwide"
          cardTag="Trusted by our community"
          cardTagIcon={Star}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="leadership" data-section="leadership">
        <TeamCardNine 
          members={[
            {
              id: "1",
              name: "Andreas Schmidt",
              role: "Founder & President",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881722953-vgfvw4c9.jpg",
              socialLinks: [
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
              ]
            },
            {
              id: "2",
              name: "Victoria Weber",
              role: "Events Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881723951-ik8jnp83.jpg",
              socialLinks: [
                { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
              ]
            },
            {
              id: "3",
              name: "Klaus Mueller",
              role: "Technical Advisor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881725137-hwc5vh4h.jpg",
              socialLinks: [
                { icon: Mail, href: "mailto:klaus@sq5fanclub.com", ariaLabel: "Email" },
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
              ]
            },
            {
              id: "4",
              name: "Sophie Bergmann",
              role: "Community Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881726070-21qmdjo9.jpg",
              socialLinks: [
                { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
                { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
              ]
            }
          ]}
          title="Community Leadership"
          description="Meet the passionate team driving the SQ5 Fanclub forward"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofTwo 
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881727169-4e1cal9d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881728292-ss1pzr6o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881729113-s5pwejqp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881730217-hk7bej0a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881731242-wz9kqffo.jpg"
          ]}
          title="Trusted by Premium Automotive Brands"
          description="Partners in excellence driving the future of automotive passion"
          tag="Industry Partners"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          faqs={[
            {
              id: "1",
              title: "How do I join the SQ5 Fanclub?",
              content: "Joining is simple and free. Simply fill out our membership form below with your details and SQ5 information. You'll gain access to exclusive events, community forums, technical resources, and member-only discounts."
            },
            {
              id: "2",
              title: "What are the membership benefits?",
              content: "Members enjoy exclusive track days, priority access to special events, technical workshops with Audi experts, discounted merchandise, networking with fellow enthusiasts, and invitations to VIP launches and gatherings."
            },
            {
              id: "3",
              title: "Are there membership fees?",
              content: "Basic membership is completely free. We also offer premium membership tiers with additional benefits like priority event registration and exclusive merchandise. Event fees apply separately for organized gatherings."
            },
            {
              id: "4",
              title: "How often do you organize events?",
              content: "We host monthly meetups, quarterly track days, seasonal car shows, and special events throughout the year. Check our events calendar for upcoming dates in your region. Most events are open to all members."
            },
            {
              id: "5",
              title: "Can I bring my family to events?",
              content: "Absolutely! Many of our events are family-friendly. We encourage bringing spouses, partners, and children to community gatherings. Track days have separate categories, so check event details for age and safety requirements."
            },
            {
              id: "6",
              title: "How do I contact the leadership team?",
              content: "You can reach our team through the contact form below, or email us at contact@sq5fanclub.com. For specific inquiries, use our online contact form and we'll connect you with the appropriate team member."
            }
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about joining and participating in the SQ5 Fanclub"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm 
          title="Join the SQ5 Fanclub"
          description="Become part of our elite community. Fill out the form below and we'll send you exclusive membership details and upcoming events."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "sq5Model",
              type: "text",
              placeholder: "Your SQ5 Model Year",
              required: false
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your SQ5 passion and what events interest you most...",
            rows: 5,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765881711884-a4o7a084.jpg"
          imageAlt="Audi SQ5 luxury performance"
          mediaPosition="right"
          buttonText="Join Fanclub"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial 
          logoText="SQ5 Fanclub"
          description="The premier community for Audi SQ5 enthusiasts worldwide. Celebrating performance, precision, and passion."
          columns={[
            {
              title: "Community",
              items: [
                { label: "About Us", href: "about" },
                { label: "Events", href: "events" },
                { label: "Membership", href: "contact" },
                { label: "Forums", href: "https://community.sq5fanclub.com" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Technical Guides", href: "https://resources.sq5fanclub.com" },
                { label: "Maintenance Tips", href: "https://resources.sq5fanclub.com/maintenance" },
                { label: "Performance Tuning", href: "https://resources.sq5fanclub.com/tuning" },
                { label: "Gallery", href: "https://gallery.sq5fanclub.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "terms" },
                { label: "Privacy Policy", href: "privacy" },
                { label: "Code of Conduct", href: "https://sq5fanclub.com/conduct" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/sq5fanclub", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/sq5fanclub", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com/sq5fanclub", ariaLabel: "Twitter" },
            { icon: Youtube, href: "https://youtube.com/@sq5fanclub", ariaLabel: "YouTube" },
            { icon: Mail, href: "mailto:contact@sq5fanclub.com", ariaLabel: "Email" }
          ]}
          copyrightText="© 2025 SQ5 Fanclub. All rights reserved. Passion for Performance."
        />
      </div>
    </ThemeProvider>
  );
}
