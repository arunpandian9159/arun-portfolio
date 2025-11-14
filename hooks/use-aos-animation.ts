"use client"

import { useEffect } from "react"

export function useAOSAnimation() {
  useEffect(() => { 
    let hasAnimated = false;
    let observer: IntersectionObserver | null = null;
    let scrollListener: (() => void) | null = null;

    function triggerAOSOnce() {
      if (hasAnimated) return;
      hasAnimated = true;
      // Animate all elements with .aos-init
      const elementsToAnimate = document.querySelectorAll(".aos-init");
      elementsToAnimate.forEach((element, i) => { 
        setTimeout(() => {
          element.classList.add("aos-animate");
        }, i * 100);
      });
      // Disconnect observer if it exists 
      if (observer) observer.disconnect();
      // Remove scroll listener
      if (scrollListener) window.removeEventListener("scroll", scrollListener);
    }

    // Only listen for the first scroll event
    scrollListener = () => {
      triggerAOSOnce();
    };
    window.addEventListener("scroll", scrollListener, { once: true });

    // Optionally, if user lands mid-page, trigger on load if already scrolled
    if (window.scrollY > 0) {
      triggerAOSOnce();
    }

    // Set up observer for initial load (for progressive reveal if needed)
    observer = new IntersectionObserver((entries) => {
      if (hasAnimated) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elementsToAnimate = document.querySelectorAll(".aos-init");
    elementsToAnimate.forEach((element) => observer!.observe(element));

    return () => {
      if (observer) observer.disconnect();
      if (scrollListener) window.removeEventListener("scroll", scrollListener);
    };
  }, []);
}