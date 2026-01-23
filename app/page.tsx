import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import WhatYoullFind from "@/components/WhatYoullFind";
import Categories from "@/components/Categories";
import Resources from "@/components/Resources";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhatYoullFind />
      <Categories />
      <Resources />
      <Newsletter />
    </>
  );
}
