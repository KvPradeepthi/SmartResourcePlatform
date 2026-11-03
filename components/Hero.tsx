"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [texts, setTexts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch hero texts from the database
    fetch("/api/hero")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && isMounted) {
          setTexts(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch hero texts:", error);
        // Fallback to default texts if API fails
        if (isMounted) {
          setTexts([
            "New, way to access PEC.UP : starBOT",
            "Ready for Mid-2?",
            "Bored with studies? Not anymore!",
            "resources that are actually useful",
            "Made for students, by students!",
          ]);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (texts.length === 0 || isLoading) return;

    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      const heading = document.getElementById("typing-heading");
      if (heading) {
        heading.textContent = letter;
      }
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        timeoutId = setTimeout(type, 2000); // Pause before typing next word
      } else {
        timeoutId = setTimeout(type, 150);
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [texts, isLoading]);

  return (
    <section id="hero">
      <div className="hero-content text-container">
        <div className="animated-text">
          <h1 id="typing-heading"></h1>
        </div>
        <a href="https://forms.gle/hGWbDTLErrqPgQJs7" className="btn-project">
          Feedback!!
        </a>
        <p className="centered-text">
          pickup by <span className="pickup">PEC.UP</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
