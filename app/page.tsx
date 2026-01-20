import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import WhatYoullFind from "@/components/WhatYoullFind";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhatYoullFind />
      <Categories />
      <Newsletter />
    </>
  );
}
