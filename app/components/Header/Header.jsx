"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>


        <div className={styles.left}>
          <div className={styles.logoBox}>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={36}
              height={36}
              priority
            />
          </div>
          <span className={styles.appName}>WIGA POS</span>
        </div>


        <div className={styles.right}>


          <SignedOut>
            <SignInButton mode="modal">
              <button className={styles.signInBtn}>Sign In</button>
            </SignInButton>
          </SignedOut>


          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>

        </div>

      </div>
    </header>
  );
}
