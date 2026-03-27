"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { cn } from "../../lib/utils";
import { forwardRef, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export type SocialItem = {
  id: string;
  url: string;
  icon: React.ReactNode;
  label: string;
};

export interface IdentityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string;
  place: string;
  about: string;
  avatarUrl: string;
  avatarText: string;
  scheme?: "plain" | "accented";
  socials?: SocialItem[];
  displayAvatar?: boolean;
  titleCss?: React.CSSProperties;
  cardCss?: React.CSSProperties;
  descClass?: string;
  bioClass?: string;
  footerClass?: string;
  icon?: React.ReactNode;
}

export const IdentityCardBody = forwardRef<HTMLDivElement, IdentityCardProps>(
  (
    {
      fullName,
      place,
      about,
      avatarUrl,
      avatarText,
      scheme = "plain",
      socials = [],
      displayAvatar = true,
      titleCss,
      cardCss,
      descClass,
      bioClass,
      footerClass,
      className,
      icon,
      ...rest
    },
    ref
  ) => {
    const isAccent = scheme === "accented";

    return (
      <Card
        ref={ref}
        style={cardCss}
        className={cn(
          "flex flex-col rounded-3xl border-0 p-6",
          isAccent
            ? "text-[var(--on-accent-foreground)]"
            : "bg-card text-card-foreground",
          className
        )}
        {...rest}
      >
        <CardHeader className="p-0">
          <div className="flex items-center justify-between mb-4">
            <div className={cn(!displayAvatar && "hidden")}>
                <Avatar
                className="h-12 w-12 ring-2 ring-offset-4 ring-offset-card"
                style={
                    {
                    "--tw-ring-color": "var(--accent-color)",
                    } as React.CSSProperties
                }
                >
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{avatarText}</AvatarFallback>
                </Avatar>
            </div>
            {icon && (
                <div className={cn("text-gold", isAccent && "text-white")}>
                    {icon}
                </div>
            )}
          </div>
          
          <CardDescription
            className={cn(
              "text-left text-[10px] font-bold uppercase tracking-widest",
              !isAccent && "text-muted-foreground",
              descClass
            )}
            style={isAccent ? { color: "var(--on-accent-muted-foreground)" } : {}}
          >
            {place}
          </CardDescription>
          <CardTitle
            className="text-2xl text-left font-serif mb-2"
            style={{
              ...(isAccent ? { color: "var(--on-accent-foreground)" } : {}),
              ...titleCss,
            }}
          >
            {fullName}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow p-0">
          <p
            className={cn(
              "text-[13px] leading-relaxed text-left",
              !isAccent && "text-zinc-600/80",
              bioClass
            )}
            style={isAccent ? { opacity: 0.9 } : {}}
          >
            {about}
          </p>
        </CardContent>

        {socials.length > 0 && (
          <CardFooter className={cn("mt-4 p-0", footerClass)}>
            <div
              className={cn(
                "flex items-center gap-4",
                !isAccent && "text-muted-foreground"
              )}
              style={
                isAccent
                  ? { color: "var(--on-accent-muted-foreground)" }
                  : undefined
              }
            >
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-opacity",
                    isAccent ? "hover:opacity-75" : "hover:text-foreground"
                  )}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    );
  }
);
IdentityCardBody.displayName = "IdentityCardBody";

// ------------------ Animated Container ------------------

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export interface RevealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  base: React.ReactNode;
  overlay: React.ReactNode;
  accent?: string;
  textOnAccent?: string;
  mutedOnAccent?: string;
}

export const RevealCardContainer = forwardRef<HTMLDivElement, RevealCardProps>(
  (
    {
      base,
      overlay,
      accent = "var(--primary)",
      textOnAccent = "#fff",
      mutedOnAccent = "rgba(255,255,255,0.8)",
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    const holderRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const overlayMode = "dark"; 

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const assignRef = useCallback(
      (el: HTMLDivElement | null) => {
        holderRef.current = el;
        if (typeof ref === "function") {
          ref(el);
        } else if (ref) {
          (ref as any).current = el;
        }
      },
      [ref]
    );

    const startClip = "circle(50px at 64px 64px)";
    const expandClip = "circle(160% at 64px 64px)";

    useGSAP(() => {
      gsap.set(overlayRef.current, { clipPath: startClip });
    }, { scope: holderRef });

    const reveal = () => {
      gsap.to(overlayRef.current, {
        clipPath: expandClip,
        duration: 0.8,
        ease: "expo.inOut",
      });
    };
    const conceal = () => {
      gsap.to(overlayRef.current, {
        clipPath: startClip,
        duration: 1,
        ease: "expo.out(1, 1)",
      });
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) {
        reveal();
        // Delay the actual click action slightly to show the animation
        setTimeout(() => {
          if (onClick) onClick(e);
        }, 400);
      } else {
        if (onClick) onClick(e);
      }
    };

    return (
      <motion.div
        ref={assignRef}
        onMouseEnter={!isMobile ? reveal : undefined}
        onMouseLeave={!isMobile ? conceal : undefined}
        onViewportEnter={isMobile ? reveal : undefined}
        onViewportLeave={isMobile ? conceal : undefined}
        viewport={{ amount: 0.8 }}
        onClick={handleClick}
        style={
          {
            "--accent-color": accent,
            "--on-accent-foreground": textOnAccent,
            "--on-accent-muted-foreground": mutedOnAccent,
            borderColor: "var(--accent-color)",
          } as React.CSSProperties
        }
        className={cn(
          "relative w-full md:w-[350px] overflow-hidden rounded-3xl border-2 transition-all duration-500 cursor-pointer",
          className
        )}
        {...rest}
      >
        <div>{base}</div>
        <div
          ref={overlayRef}
          className={cn("absolute inset-0 h-full w-full", overlayMode)}
        >
          {overlay}
        </div>
      </motion.div>
    );
  }
);
RevealCardContainer.displayName = "RevealCardContainer";
